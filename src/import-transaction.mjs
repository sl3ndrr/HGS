import * as fs from 'node:fs/promises';
import path from 'node:path';

export const transactionName = '.briefing-import';
const json = value => JSON.stringify(value, null, 2) + '\n';

async function durableWrite(io, filename, content) {
  const handle = await io.open(filename, 'wx', 0o600);
  try {
    await handle.writeFile(content);
    await handle.sync();
  } finally { await handle.close(); }
}

async function restore(io, dir, txn, names) {
  for (const name of names) {
    const bytes = await io.readFile(path.join(txn, name + '.before'));
    const temporary = path.join(txn, name + '.restore');
    await io.rm(temporary, { force: true });
    await durableWrite(io, temporary, bytes);
    await io.chmod(temporary, (await io.stat(path.join(txn, name + '.before'))).mode & 0o777);
    await io.rename(temporary, path.join(dir, name));
  }
}

// Per-file atomic rename plus durable backups and a fail-closed transaction marker.
// A process crash is recovered explicitly; readers refuse any pending transaction.
export async function replaceRegistries(dir, replacements, expected, { io = fs } = {}) {
  const txn = path.join(dir, transactionName);
  try { await io.mkdir(txn); } catch (error) {
    throw Error(`Import gesperrt: ${txn} (${error.code}); laufenden Import abwarten oder --recover nach Prozessende.`, { cause: error });
  }
  const names = Object.keys(replacements);
  let journalReady = false;
  try {
    await durableWrite(io, path.join(txn, 'owner.json'), json({ pid: process.pid }));
    for (const name of names) {
      if (!/^[a-z-]+\.json$/.test(name)) throw Error(`Unsicherer Transaktionsname: ${name}`);
      const before = await io.readFile(path.join(dir, name));
      if (!before.equals(expected[name])) throw Error(`${name}: Bestand seit Review geändert; Import erneut prüfen`);
      await durableWrite(io, path.join(txn, name + '.before'), before);
      await durableWrite(io, path.join(txn, name + '.after'), replacements[name]);
      const mode = (await io.stat(path.join(dir, name))).mode & 0o777;
      await io.chmod(path.join(txn, name + '.before'), mode);
      await io.chmod(path.join(txn, name + '.after'), mode);
    }
    await durableWrite(io, path.join(txn, 'journal.json'), json({ state: 'pending', names }));
    journalReady = true;
    for (const name of names) await io.rename(path.join(txn, name + '.after'), path.join(dir, name));
    await durableWrite(io, path.join(txn, 'commit-ready'), 'complete\n');
    await io.rename(path.join(txn, 'commit-ready'), path.join(txn, 'committed'));
  } catch (error) {
    try {
      if (journalReady) await restore(io, dir, txn, names);
      await io.rm(txn, { recursive: true, force: true });
    } catch (rollbackError) {
      throw Error(`Import fehlgeschlagen: ${error.message}. Rollback unvollständig: ${rollbackError.message}. Backups in ${txn}; Build blockiert bis --recover.`, { cause: error });
    }
    throw Error(`Import fehlgeschlagen; Bestand unverändert/wiederhergestellt: ${error.message}`, { cause: error });
  }
  try { await io.rm(txn, { recursive: true, force: true }); } catch (error) {
    throw Error(`Import vollständig geschrieben; Transaktionsmarker konnte nicht entfernt werden (${error.message}). --recover räumt den bestätigten Commit auf.`);
  }
}

export async function recoverImport(dir) {
  const txn = path.join(dir, transactionName);
  let owner;
  try { owner = JSON.parse(await fs.readFile(path.join(txn, 'owner.json'), 'utf8')); } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.rm(txn, { recursive: true, force: true });
      return 'Kein vorbereiteter Import; Bestand unverändert.';
    }
    throw error;
  }
  if (!Number.isSafeInteger(owner.pid) || owner.pid <= 0) throw Error('Importowner ungültig; Backups manuell prüfen.');
  try {
    process.kill(owner.pid, 0);
    throw Error(`Importprozess ${owner.pid} läuft noch; keine Wiederherstellung während eines laufenden Imports.`);
  } catch (error) { if (error.code !== 'ESRCH') throw error; }
  try {
    await fs.access(path.join(txn, 'committed'));
    await fs.rm(txn, { recursive: true, force: true });
    return 'Vollständig bestätigten Import aufgeräumt.';
  } catch (error) { if (error.code !== 'ENOENT') throw error; }
  let journal;
  try { journal = JSON.parse(await fs.readFile(path.join(txn, 'journal.json'), 'utf8')); } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    await fs.rm(txn, { recursive: true, force: true });
    return 'Vorbereitungsphase abgebrochen; Bestand unverändert.';
  }
  if (journal.state !== 'pending' || !Array.isArray(journal.names) || journal.names.some(n => !/^[a-z-]+\.json$/.test(n))) throw Error('Importjournal ungültig; Backups manuell prüfen.');
  await restore(fs, dir, txn, journal.names);
  await fs.rm(txn, { recursive: true, force: true });
  return 'Unterbrochenen Import vollständig aus Backups wiederhergestellt.';
}
