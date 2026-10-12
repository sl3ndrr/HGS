import * as C from '../components.mjs';
export function createShellRenderer({
  settings,
  nav,
  siteUrl,
  ready
}) {
  function shell(page, main) {
    const title = page.url === '/' ? `${settings.name} Rosdorf – Bunt wie das Leben` : `${page.navTitle || page.title} | ${settings.name} Rosdorf`;
    return [
      `<!doctype html>`,
      `<html lang="de">`,
      `<head>`,
      `<meta charset="utf-8">`,
      `<meta name="viewport" content="width=device-width,initial-scale=1">`,
      `<meta name="color-scheme" content="light">`,
      `<title>${C.esc(title)}</title>`,
      `<meta name="description" content="${C.esc(page.intro)}">`,
      `<meta name="robots" content="${ready && !page.legal && page.kind !== 'search' ? 'index,follow' : 'noindex,follow'}">`,
      `<link rel="canonical" href="${siteUrl}${page.url}">`,
      `<meta property="og:title" content="${C.esc(title)}">`,
      `<meta property="og:description" content="${C.esc(page.intro)}">`,
      `<meta property="og:type" content="${page.kind === 'news-detail' ? 'article' : 'website'}">`,
      `<meta property="og:url" content="${siteUrl}${page.url}">`,
      `<meta name="theme-color" content="#173f37">`,
      `<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">`,
      `<link rel="stylesheet" href="/assets/site.css">`,
      `<script src="/assets/site.js" defer>`,
      `</script>`,
      `</head>`,
      `<body class="${page.url === '/' ? 'home' : `theme-${page.theme || 'green'}`}">${C.header(settings, nav, page.url)}${main}${C.footer(settings)}</body>`,
      `</html>`
    ].join('');
  }
  return shell;
}
