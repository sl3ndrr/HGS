import path from 'node:path';
import { importBriefing } from '../src/import-briefing.mjs';
import { recoverImport } from '../src/import-transaction.mjs';
import { projectRoot } from '../src/content-data.mjs';

const args = process.argv.slice(2);
const allowed = args.every(a => ['--dry-run', '--write', '--recover'].includes(a) || a.startsWith('--briefing='));
if (!allowed || (args.includes('--write') && args.includes('--dry-run')) || (args.includes('--recover') && args.length !== 1)) {
  console.error('Aufruf: npm run import:briefing -- [--dry-run | --write] [--briefing=/pfad/briefing.md] oder --recover');
  process.exitCode = 1;
} else {
  try {
    if (args.includes('--recover')) console.log(await recoverImport(path.join(projectRoot, 'content')));
    else {
      const result = await importBriefing({
        briefingPath: args.find(a => a.startsWith('--briefing='))?.slice('--briefing='.length),
        dryRun: !args.includes('--write'),
        onReport: report => console.log(JSON.stringify({ reviewDiff: report }, null, 2))
      });
      console.log(`${result.dryRun ? 'Dry-Run: keine Dateien geschrieben' : 'Import erfolgreich'}; ${result.report.changes.length} geänderte Objekte.`);
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
