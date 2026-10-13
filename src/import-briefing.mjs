import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { parseBriefing } from './briefing.mjs';
import { loadContent, loadInventory, projectRoot, registryFiles } from './content-data.mjs';
import { validateContent } from './validate-content.mjs';
import { assertMigration } from './migration.mjs';
import { replaceRegistries } from './import-transaction.mjs';

const importedKeys = ['news', 'media', 'documents', 'refs', 'conflicts'];
// Only these fields are source identities. Every other existing field is editorial
// or local state and wins on re-import, including future extension fields.
const sourceFields = {
  news: ['id', 'sourceUrl', 'published'],
  media: ['id', 'originalUrl', 'source'],
  refs: ['id', 'originalUrl', 'sourceUrl', 'originalTitle'],
  documents: ['id', 'originalUrl', 'sourceUrl', 'originalTitle'],
  conflicts: ['id', 'topic', 'evidence']
};
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

export function planImport(current, incoming, baseline) {
  const candidate = { ...current };
  const report = { added: [], preserved: [], sourceChanges: [], missingFromSource: [], changes: [] };
  for (const key of importedKeys) {
    const oldById = new Map(current[key].map(item => [item.id, item]));
    const baseById = new Map(baseline[key].map(item => [item.id, item]));
    const incomingIds = new Set(incoming[key].map(item => item.id));
    const mergedIncoming = incoming[key].map(item => {
      const old = oldById.get(item.id);
      const base = baseById.get(item.id);
      if (base) for (const field of new Set([...Object.keys(base), ...Object.keys(item)])) {
        if (!same(base[field], item[field])) report.sourceChanges.push({ registry: key, id: item.id, field, before: base[field], after: item[field] });
      }
      if (!old) {
        report.added.push(`${key}[${item.id}]`);
        return item;
      }
      const merged = { ...item, ...old };
      for (const field of sourceFields[key]) merged[field] = item[field];
      if (key === 'documents') {
        merged.referenceIds = [...new Set([...old.referenceIds, ...item.referenceIds])];
        merged.sources = [...old.sources];
        for (const source of item.sources) if (!merged.sources.some(s => same(s, source))) merged.sources.push(source);
      }
      const preserved = Object.keys(old).filter(field => !sourceFields[key].includes(field) && !same(old[field], item[field]));
      if (preserved.length) report.preserved.push({ registry: key, id: item.id, fields: preserved });
      return merged;
    });
    const mergedById = new Map(mergedIncoming.map(item => [item.id, item]));
    candidate[key] = current[key].map(old => {
      if (!incomingIds.has(old.id)) report.missingFromSource.push(`${key}[${old.id}]`);
      return mergedById.get(old.id) || old;
    });
    candidate[key].push(...mergedIncoming.filter(item => !oldById.has(item.id)));
    for (const item of candidate[key]) {
      const old = oldById.get(item.id);
      if (!same(old, item)) report.changes.push({ registry: key, id: item.id, before: old ?? null, after: item });
    }
  }
  return { candidate, report };
}

export async function importBriefing({
  briefingPath = path.join(projectRoot, 'docs/RELAUNCH-BRIEFING.md'),
  contentDir = path.join(projectRoot, 'content'),
  dryRun = true,
  onReport = () => {},
  transactionOptions
} = {}) {
  const [current, inventory, text, baselineText] = await Promise.all([
    loadContent(contentDir), loadInventory(), readFile(briefingPath, 'utf8'),
    readFile(path.join(projectRoot, 'docs/RELAUNCH-BRIEFING.md'), 'utf8')
  ]);
  if (createHash('sha256').update(baselineText).digest('hex') !== inventory.sourceSha256) throw Error('Archiviertes Briefing wurde verändert; Originalquelle wiederherstellen, Inventar nicht neu generieren.');
  validateContent(current, { inventory });
  const expected = Object.fromEntries(await Promise.all(importedKeys.map(async key => {
    const name = registryFiles[key] + '.json';
    const bytes = await readFile(path.join(contentDir, name));
    if (!same(JSON.parse(bytes), current[key])) throw Error(`${name}: Bestand während des Einlesens geändert`);
    return [name, bytes];
  })));
  let incoming;
  try { incoming = parseBriefing(text); } catch (error) {
    throw Error(`Briefing ${briefingPath}: ${error.message}`, { cause: error });
  }
  // Validate incoming references separately: a merge must not mask missing rows.
  validateContent({ ...current, ...incoming });
  const { candidate, report } = planImport(current, incoming, parseBriefing(baselineText));
  onReport(report);
  assertMigration(incoming, inventory);
  validateContent(candidate, { inventory });
  if (!dryRun && report.changes.length) {
    const replacements = Object.fromEntries(importedKeys.map(key => [registryFiles[key] + '.json', JSON.stringify(candidate[key], null, 2) + '\n']));
    await replaceRegistries(contentDir, replacements, expected, transactionOptions);
  }
  return { candidate, report, dryRun };
}
