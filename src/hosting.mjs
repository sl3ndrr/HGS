// Internal paths are build-time routes. External source URLs never pass through encoding.
export function normalizeBasePath(value = '/') {
  if (!/^\/(?:[A-Za-z0-9_-]+\/)*[A-Za-z0-9_-]*$/.test(value)) {
    throw new Error('BASE_PATH must be an absolute path such as / or /HGS/.');
  }
  return value === '/' ? '/' : value.replace(/\/$/, '') + '/';
}

export function sitePath(value, basePath = '/') {
  if (!value.startsWith('/') || value.startsWith('//')) return value;
  return basePath === '/' ? value : basePath.slice(0, -1) + value;
}

export function scopeHtml(html, basePath) {
  return html.replace(/\b(href|src|action|data-src)="(\/(?!\/)[^"]*)"/g,
    (_, name, value) => `${name}="${sitePath(value, basePath)}"`)
    .replace(/\bsrcset="([^"]*)"/g, (_, value) =>
      `srcset="${value.replace(/(^|,\s*)(\/(?!\/)[^,\s]+)/g,
        (_, separator, url) => separator + sitePath(url, basePath))}"`);
}
