import { createShellRenderer } from './shell.mjs';
import { createSectionRenderer } from './sections.mjs';
import { createSpecialRenderer } from './special-pages.mjs';
import { createPageRenderer } from './page.mjs';
import { createHomeRenderer } from './home.mjs';
import { createArticleRenderer } from './article.mjs';
import { renderErrorPage } from './error.mjs';

// Bind the loaded registers once. Renderers perform no file I/O or global mutation.
export function createRenderers(context) {
  const findDocs = ids => {
    const urls = new Set();
    return (ids || []).map(id => context.documents.find(d => d.referenceIds.includes(id))).filter(d => d && !urls.has(d.originalUrl) && urls.add(d.originalUrl));
  };
  const shell = createShellRenderer(context);
  const section = createSectionRenderer({
    ...context,
    findDocs
  });
  const special = createSpecialRenderer(context);
  const shared = {
    ...context,
    shell,
    section,
    special,
    findDocs
  };
  return {
    homepage: createHomeRenderer(shared),
    layout: createPageRenderer(shared),
    article: createArticleRenderer(shared),
    errorPage: () => renderErrorPage(shared)
  };
}
