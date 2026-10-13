import { readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { pages, quickLinks } from '../content/pages.mjs';

export const projectRoot = fileURLToPath(new URL('../', import.meta.url));
export const registryFiles = {
  settings: 'settings', nav: 'navigation', news: 'news', documents: 'documents',
  refs: 'document-references', media: 'media', people: 'people', classes: 'classes',
  redirects: 'redirects', conflicts: 'editorial-review'
};

export async function loadContent(contentDir = path.join(projectRoot, 'content')) {
  try {
    await access(path.join(contentDir, '.briefing-import'));
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    return readRegisters(contentDir);
  }
  throw Error('Unterbrochener/laufender Import: content/.briefing-import vorhanden. Nach Prozessende npm run import:briefing -- --recover ausführen.');
}

async function readRegisters(contentDir) {
  const entries = await Promise.all(Object.entries(registryFiles).map(async ([key, name]) => {
    try {
      return [key, JSON.parse(await readFile(path.join(contentDir, name + '.json'), 'utf8'))];
    } catch (error) {
      throw Error(`${name}.json: ${error.message}`, { cause: error });
    }
  }));
  try {
    await access(path.join(contentDir, '.briefing-import'));
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    return { ...Object.fromEntries(entries), pages, quickLinks };
  }
  throw Error('Import begann während des Einlesens; Build/Check nach Importende erneut ausführen.');
}

export async function loadInventory() {
  return JSON.parse(await readFile(path.join(projectRoot, 'docs/migration-inventory.json'), 'utf8'));
}
