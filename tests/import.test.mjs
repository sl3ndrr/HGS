import test from 'node:test';
import assert from 'node:assert/strict';
import * as fs from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';
import { execFile } from 'node:child_process';
import { importBriefing } from '../src/import-briefing.mjs';
import { loadContent, projectRoot } from '../src/content-data.mjs';
import { recoverImport } from '../src/import-transaction.mjs';

const run = promisify(execFile);
const brief = await fs.readFile(path.join(projectRoot, 'docs/RELAUNCH-BRIEFING.md'), 'utf8');
const extra = '| Sa, 02. Januar 2027 | [Synthetische Testmeldung](https://example.invalid/news/1/9999999/nachrichten/test.html) | Nur isolierte Testdaten. |\n';
async function fixture(t) {
  const root = await fs.mkdtemp(path.join(path.dirname(projectRoot), 'ap02-test-'));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const contentDir = path.join(root, 'content');
  await fs.cp(path.join(projectRoot, 'content'), contentDir, { recursive: true });
  const briefingPath = path.join(root, 'briefing.md');
  await fs.writeFile(briefingPath, brief);
  return { root, contentDir, briefingPath };
}
async function snapshot(dir) {
  const entries = await fs.readdir(dir);
  return Object.fromEntries(await Promise.all(entries.filter(n => n.endsWith('.json')).map(async name => [name, (await fs.readFile(path.join(dir, name))).toString('base64')])));
}
async function change(dir, name, mutate) {
  const filename = path.join(dir, name + '.json');
  const data = JSON.parse(await fs.readFile(filename));
  mutate(data);
  await fs.writeFile(filename, JSON.stringify(data, null, 2) + '\n');
}
test('Dry-run and unchanged --write leave all content files byte-identical', async t => {
  const f = await fixture(t);
  const before = await snapshot(f.contentDir);
  const dry = await importBriefing(f);
  assert.equal(dry.dryRun, true);
  assert.equal(dry.report.changes.length, 0);
  await importBriefing({ ...f, dryRun: false });
  assert.deepEqual(await snapshot(f.contentDir), before);
});
test('Invalid/missing historical input fails before any content write', async t => {
  const f = await fixture(t);
  const before = await snapshot(f.contentDir);
  for (const bad of [brief.replace('28. Juni 2026', '31. Juni 2026'), brief.split('\n').filter(l => !l.startsWith('| B01 |')).join('\n'), brief.replace('## Redaktionelle Konflikte und offene Entscheidungen', '## missing')]) {
    await fs.writeFile(f.briefingPath, bad);
    await assert.rejects(importBriefing({ ...f, dryRun: false }), /Kalenderdatum|B01|Konflikt-/);
    assert.deepEqual(await snapshot(f.contentDir), before);
  }
});
test('Changed original addresses have a separate source diff and cannot be applied', async t => {
  const f = await fixture(t);
  const current = await loadContent(f.contentDir);
  await fs.writeFile(f.briefingPath, brief.replaceAll(current.media[0].originalUrl, 'https://example.invalid/changed.jpg'));
  const before = await snapshot(f.contentDir);
  let report;
  await assert.rejects(importBriefing({ ...f, dryRun: false, onReport: r => report = r }), /media\[B01\].originalUrl.*Originalwert/);
  assert(report.sourceChanges.some(c => c.registry === 'media' && c.id === 'B01' && c.field === 'originalUrl'));
  assert.deepEqual(await snapshot(f.contentDir), before);
});
test('Re-import preserves local mappings, variants, reviews, source supplements and editorial additions', async t => {
  const f = await fixture(t);
  await change(f.contentDir, 'media', media => Object.assign(media[0], { localFile: '/assets/local.jpg', variants: [{ url: '/assets/local-480.webp', width: 480 }], width: 960, height: 640, rights: 'Test: lokaler Status unverändert', reviewedAt: '2026-10-12', reviewStatus: 'needs-review', provenance: { kind: 'unknown' }, availability: { status: 'blocked', checkedAt: null } }));
  await change(f.contentDir, 'news', news => {
    Object.assign(news[0], { summary: 'Redaktionelle Ergänzung im Test', paragraphs: ['Redaktioneller Testtext'], schoolYear: null, reviewStatus: 'pending', validFrom: null, validTo: null, customEditorialField: { note: 'Extension bleibt erhalten' } });
    news.unshift({ ...news[0], id: 'local-test-only', url: '/schulleben/nachrichten/local-test-only/', title: 'Lokaler Test', historical: false, imageId: null, documentIds: [] });
  });
  await change(f.contentDir, 'documents', docs => { docs[0].note = 'Testnotiz'; docs[0].sources.push({ url: 'https://example.invalid/supplement', title: 'Ergänzende Testquelle' }); });
  await change(f.contentDir, 'editorial-review', conflicts => conflicts[0].status = 'Test: lokale Reviewbearbeitung');
  const before = await snapshot(f.contentDir);
  const result = await importBriefing({ ...f, dryRun: false });
  assert(result.report.preserved.some(r => r.id === 'B01' && r.fields.includes('variants')));
  assert(result.report.missingFromSource.includes('news[local-test-only]'));
  assert.equal(result.candidate.news[0].id, 'local-test-only');
  assert.deepEqual(await snapshot(f.contentDir), before);
  // Force a real successful transaction by importing an extra source record.
  await fs.writeFile(f.briefingPath, brief + '\n' + extra);
  await importBriefing({ ...f, dryRun: false });
  const after = await loadContent(f.contentDir);
  const beforeData = Object.fromEntries(Object.entries(before).map(([name, bytes]) => [name, JSON.parse(Buffer.from(bytes, 'base64'))]));
  assert.deepEqual(after.media, beforeData['media.json']);
  assert.deepEqual(after.news.slice(0, -1), beforeData['news.json']);
  assert.equal(after.news.at(-1).id, '9999999');
  for (const [key, filename] of [['documents', 'documents.json'], ['conflicts', 'editorial-review.json']]) assert.deepEqual(after[key], beforeData[filename]);
});
test('A write failure after the first replacement rolls back every file byte-for-byte', async t => {
  const f = await fixture(t);
  await fs.writeFile(f.briefingPath, brief + '\n' + extra);
  const before = await snapshot(f.contentDir);
  let replacements = 0;
  const io = { ...fs, rename: async (from, to) => {
    if (from.endsWith('.after') && ++replacements === 2) throw Error('injected rename failure');
    return fs.rename(from, to);
  } };
  await assert.rejects(importBriefing({ ...f, dryRun: false, transactionOptions: { io } }), /wiederhergestellt.*injected rename failure/);
  assert.equal(replacements, 2);
  assert.deepEqual(await snapshot(f.contentDir), before);
  assert(!(await fs.readdir(f.contentDir)).includes('.briefing-import'));
});
test('Concurrent changes after review are not overwritten', async t => {
  const f = await fixture(t);
  await fs.writeFile(f.briefingPath, brief + '\n' + extra);
  const edited = '[]\n';
  // The callback is synchronous; transaction mkdir is our controlled handoff.
  const io = { ...fs, mkdir: async dir => {
    await fs.writeFile(path.join(f.contentDir, 'news.json'), edited);
    return fs.mkdir(dir);
  } };
  await assert.rejects(importBriefing({ ...f, dryRun: false, transactionOptions: { io } }), /Bestand seit Review geändert/);
  assert.equal(await fs.readFile(path.join(f.contentDir, 'news.json'), 'utf8'), edited);
});
test('A failed commit-marker write cannot disguise a failed rollback as a completed import', async t => {
  const f = await fixture(t);
  await fs.writeFile(f.briefingPath, brief + '\n' + extra);
  const before = await snapshot(f.contentDir);
  const io = { ...fs, open: async (filename, ...args) => {
    if (filename.endsWith('commit-ready')) throw Error('injected commit-marker failure');
    return fs.open(filename, ...args);
  }, rename: async (from, to) => {
    if (from.endsWith('.restore')) throw Error('injected rollback failure');
    return fs.rename(from, to);
  } };
  await assert.rejects(importBriefing({ ...f, dryRun: false, transactionOptions: { io } }), /Rollback unvollständig/);
  await assert.rejects(fs.access(path.join(f.contentDir, '.briefing-import/committed')), { code: 'ENOENT' });
  const { stdout } = await run(process.execPath, ['-e', 'console.log(process.pid)']);
  await fs.writeFile(path.join(f.contentDir, '.briefing-import/owner.json'), JSON.stringify({ pid: Number(stdout.trim()) }));
  assert.match(await recoverImport(f.contentDir), /vollständig.*wiederhergestellt/);
  assert.deepEqual(await snapshot(f.contentDir), before);
});
test('Interrupted/failed rollback blocks readers and supports explicit recovery', async t => {
  const f = await fixture(t);
  await fs.writeFile(f.briefingPath, brief + '\n' + extra);
  const before = await snapshot(f.contentDir);
  let replacements = 0;
  const io = { ...fs, rename: async (from, to) => {
    if ((from.endsWith('.after') && ++replacements === 2) || from.endsWith('.restore')) throw Error('injected disk failure');
    return fs.rename(from, to);
  } };
  await assert.rejects(importBriefing({ ...f, dryRun: false, transactionOptions: { io } }), /Rollback unvollständig.*Build blockiert/);
  await assert.rejects(loadContent(f.contentDir), /Unterbrochener\/laufender Import/);
  await assert.rejects(recoverImport(f.contentDir), /läuft noch/);
  // Emulate the ended importing process; a child PID is guaranteed dead after exit.
  const { stdout } = await run(process.execPath, ['-e', 'console.log(process.pid)']);
  await fs.writeFile(path.join(f.contentDir, '.briefing-import/owner.json'), JSON.stringify({ pid: Number(stdout.trim()) }));
  assert.match(await recoverImport(f.contentDir), /vollständig.*wiederhergestellt/);
  assert.deepEqual(await snapshot(f.contentDir), before);
  await loadContent(f.contentDir);
});
test('An isolated extra contribution passes the actual build and check; published files stay untouched', async t => {
  const f = await fixture(t);
  const before = await snapshot(path.join(projectRoot, 'content'));
  const repo = path.join(f.root, 'repo');
  await fs.cp(projectRoot, repo, { recursive: true, filter: source => !['.git', 'dist', '.briefing-import'].includes(path.basename(source)) });
  await change(path.join(repo, 'content'), 'news', news => news.push({ ...news[0], id: 'synthetic-test-only', url: '/schulleben/nachrichten/synthetic-test-only/', title: 'Synthetische Testmeldung', published: '2027-01-02', schoolYear: null, historical: false, imageId: null, documentIds: [] }));
  const built = await run(process.execPath, ['scripts/build.mjs'], { cwd: repo, env: { ...process.env, BASE_PATH: '/HGS/', RELEASE_READY: '0' } });
  assert.match(built.stdout, /34 news/);
  const checked = await run(process.execPath, ['scripts/check.mjs'], { cwd: repo });
  assert.match(checked.stdout, /Integrity passed: 67 HTML files/);
  // Build validation must fail before removing the previous successful output.
  const good = await loadContent(path.join(repo, 'content'));
  const beforeHtml = await fs.readFile(path.join(repo, 'dist/index.html'));
  const cases = [
    ['news', d => d[0].published = '2026-02-30', /news\[1256501\]\.published.*Kalenderdatum/],
    ['news', d => d[0].documentIds = ['missing-doc'], /news\[1256501\]\.documentIds.*missing-doc/],
    ['news', d => d[0].imageId = 'missing-image', /news\[1256501\]\.imageId.*missing-image/],
    ['media', d => d[0].localFile = '/assets/%2e%2e/unsafe.jpg', /media\[B01\]\.localFile.*unsicher/]
  ];
  for (const [name, mutation, expression] of cases) {
    const data = structuredClone(good[name]);
    mutation(data);
    await fs.writeFile(path.join(repo, 'content', name + '.json'), JSON.stringify(data));
    await assert.rejects(run(process.execPath, ['scripts/build.mjs'], { cwd: repo }), error => {
      assert.match(error.stderr, expression);
      return true;
    });
    assert.deepEqual(await fs.readFile(path.join(repo, 'dist/index.html')), beforeHtml);
    await fs.writeFile(path.join(repo, 'content', name + '.json'), JSON.stringify(good[name]));
  }
  assert.deepEqual(await snapshot(path.join(projectRoot, 'content')), before);
});
