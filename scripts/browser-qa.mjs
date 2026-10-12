// Reproducible browser tests. CI runs in its own disposable runner, never against production.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { writeFile, mkdir } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { setTimeout as delay } from 'node:timers/promises';
const port = 4187,
  base = `http://127.0.0.1:${port}`,
  output = 'docs/qa/browser';
await mkdir(output, {
  recursive: true
});
const report = {
  timestamp: new Date().toISOString(),
  engine: 'Chromium / Playwright 1.62.1',
  sourceCommit: process.env.GITHUB_SHA || null,
  screens: [],
  checks: [],
  errors: [],
  limitations: ['Viewport emulation, keine physischen Endgeräte.', 'Google Maps wird im Test abgefangen, nicht auf tatsächliche Fremdanbieter-Funktion geprüft.', 'Bildrechte, PDF-Inhalte und Rechtsfreigaben sind keine automatisierten Browserprüfungen.']
};
const server = spawn(process.execPath, ['scripts/server.mjs', '--production'], {
  env: {
    ...process.env,
    PORT: String(port),
    HOST: '127.0.0.1'
  },
  stdio: ['ignore', 'pipe', 'pipe']
});
let browser;
const check = (name, detail) => {
  report.checks.push({
    name,
    result: 'passed',
    detail
  });
  console.log(`PASS ${name}`);
};
try {
  for (let i = 0; i < 50; i++) {
    try {
      if ((await fetch(base)).ok) break;
    } catch {}
    await delay(100);
  }
  browser = await chromium.launch({
    headless: true
  });
  const screens = [{
    name: 'small-phone',
    width: 320,
    height: 740
  }, {
    name: 'large-phone',
    width: 390,
    height: 844
  }, {
    name: 'tablet',
    width: 768,
    height: 1024
  }, {
    name: 'desktop',
    width: 1440,
    height: 1000
  }];
  const pages = [['home', '/'], ['ganztag', '/schulalltag/ganztag/'], ['news', '/schulleben/nachrichten/'], ['downloads', '/downloads/'], ['contact', '/kontakt/']];
  for (const screen of screens) {
    const context = await browser.newContext({
      viewport: {
        width: screen.width,
        height: screen.height
      },
      deviceScaleFactor: 1,
      hasTouch: screen.width < 800,
      isMobile: screen.width < 500
    });
    const page = await context.newPage();
    let errors = [],
      requests = [];
    page.on('pageerror', e => errors.push(e.message));
    page.on('request', r => requests.push(r.url()));
    page.on('response', r => {
      if (r.url().startsWith(base) && r.status() >= 400) errors.push(`${r.status()} ${r.url()}`);
    });
    for (const [name, url] of pages) {
      errors = [];
      requests = [];
      const response = await page.goto(base + url, {
        waitUntil: 'networkidle'
      });
      assert.equal(response.status(), 200);
      await page.evaluate(() => document.fonts.ready);
      const dimensions = await page.evaluate(() => ({
        width: innerWidth,
        scroll: document.documentElement.scrollWidth,
        body: document.body.scrollWidth,
        h1: document.querySelectorAll('h1').length
      }));
      assert.equal(dimensions.h1, 1);
      assert(dimensions.scroll <= dimensions.width + 1 && dimensions.body <= dimensions.width + 1, `Horizontal overflow ${name} ${screen.width}: ${JSON.stringify(dimensions)}`);
      assert.deepEqual(errors, [], `Page errors on ${name}`);
      assert.equal(requests.filter(u => !u.startsWith(base)).length, 0, 'External content loaded before activation');
      const path = `${output}/${name}-${screen.width}.png`;
      await page.screenshot({
        path,
        fullPage: true,
        animations: 'disabled'
      });
      if (name === 'home') await page.screenshot({
        path: `${output}/home-${screen.width}-viewport.png`,
        fullPage: false,
        animations: 'disabled'
      });
      report.screens.push({
        page: name,
        url,
        width: screen.width,
        height: screen.height,
        overflow: false,
        consoleErrors: errors,
        file: path
      });
    }
    await page.goto(base + '/');
    await page.keyboard.press('Tab');
    assert.equal(await page.locator(':focus').getAttribute('class'), 'skip-link');
    await page.keyboard.press('Enter');
    assert.equal(await page.evaluate(() => document.activeElement.id), 'inhalt');
    check(`Skip link ${screen.width}`, 'Keyboard focus moves to main content.');
    if (screen.width <= 1050) {
      const menu = page.locator('.menu-toggle');
      await menu.click();
      assert.equal(await menu.getAttribute('aria-expanded'), 'true');
      await page.locator('.nav-group summary').first().click();
      await page.keyboard.press('Escape');
      assert.equal(await page.locator('.nav-group').first().getAttribute('open'), null);
      await page.keyboard.press('Escape');
      assert.equal(await menu.getAttribute('aria-expanded'), 'false');
      const targets = await page.locator('.mobile-bar a, .mobile-bar button').evaluateAll(els => els.map(e => ({
        label: e.textContent.trim(),
        width: e.getBoundingClientRect().width,
        height: e.getBoundingClientRect().height
      })));
      if (screen.width < 760) assert(targets.every(t => t.width >= 44 && t.height >= 44));
      check(`Mobile navigation ${screen.width}`, 'Open, disclosure, Escape and touch targets.');
    } else {
      const summary = page.locator('.nav-group summary').first();
      await summary.focus();
      await page.keyboard.press('Enter');
      assert(await page.getByRole('link', {
        name: 'Profil & Leitbild',
        exact: true
      }).isVisible());
      await page.keyboard.press('Escape');
      assert.equal(await page.locator('.nav-group').first().getAttribute('open'), null);
      check('Desktop keyboard navigation', 'Enter opens native disclosure; Escape closes it.');
    }
    await context.close();
  }
  const context = await browser.newContext({
    viewport: {
      width: 390,
      height: 844
    },
    hasTouch: true
  });
  const page = await context.newPage();
  await page.goto(base + '/downloads/');
  await page.locator('#filter-category').selectOption('SchoolFox');
  await page.locator('#filter-extra').selectOption('Englisch');
  assert.equal(await page.locator('.document:visible').count(), 1);
  assert.match(await page.locator('.document:visible').innerText(), /Englisch/);
  await page.getByRole('button', {
    name: 'Zurücksetzen',
    exact: true
  }).click();
  await page.waitForFunction(() => document.querySelectorAll('.document:not([hidden])').length === 70);
  assert.equal(await page.locator('.document:visible').count(), 70);
  await page.locator('#filter-search').fill('xxyyzz-kein-dokument');
  await page.waitForFunction(() => !document.querySelector('.filter-empty').hidden);
  check('Document filters', 'Language, topic, reset and empty state.');
  await page.goto(base + '/schulleben/nachrichten/');
  await page.locator('#filter-extra').selectOption('2024');
  assert.equal(await page.locator('.news-card:visible').count(), 2);
  await page.locator('#filter-search').fill('ukulelen');
  assert.equal(await page.locator('.news-card:visible').count(), 1);
  check('News archive filters', '2024 yields two posts; Ukulelen yields one.');
  await page.goto(base + '/suche/');
  await page.locator('#site-query').fill('SchoolFox');
  await page.getByRole('button', {
    name: 'Suchen',
    exact: true
  }).click();
  await page.waitForFunction(() => document.querySelectorAll('#search-results li').length > 0);
  assert((await page.locator('#search-results li').count()) >= 7);
  check('Search', 'Finds pages and multilingual SchoolFox documents.');
  await page.goto(base + '/kontakt/');
  assert.equal(await page.locator('form').count(), 0);
  assert((await page.locator('a[href="mailto:sekretariat@hgs-rosdorf.de"]').count()) > 0);
  assert.equal(await page.locator('iframe').count(), 0);
  await page.route('https://www.google.com/**', route => route.fulfill({
    contentType: 'text/html',
    body: '<!doctype html><html lang="de"><body>Karteninhalt im Test abgefangen.</body></html>'
  }));
  await page.locator('#load-map').click();
  assert.equal(await page.locator('iframe').count(), 1);
  await page.locator('#unload-map').click();
  assert.equal(await page.locator('iframe').count(), 0);
  check('Contact alternative and map activation', 'Mail/phone links; no false form submission; iframe only after action, removable.');
  await page.goto(base + '/');
  await page.route('**/fotos.verwaltungsportal.de/**', route => route.abort());
  await page.locator('.photo-enable').first().click();
  await page.locator('.photo-error').first().waitFor({
    state: 'visible'
  });
  assert(await page.locator('.photo-error').first().getByRole('link').isVisible());
  check('Unavailable original image', 'Accessible error state retains exact original link.');
  await page.emulateMedia({
    reducedMotion: 'reduce'
  });
  assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), 'auto');
  check('Reduced motion', 'Smooth scrolling is disabled.');
  const nojs = await browser.newContext({
    javaScriptEnabled: false,
    viewport: {
      width: 390,
      height: 844
    }
  });
  const nojsPage = await nojs.newPage();
  await nojsPage.goto(base + '/downloads/');
  assert.equal(await nojsPage.locator('.document').count(), 70);
  assert(await nojsPage.locator('.main-nav').isVisible());
  check('No JavaScript', 'All 70 resources and navigation remain available.');
  await nojs.close();
  const old = await context.request.get(base + '/seite/708744/schoolfox.html', {
    maxRedirects: 0
  });
  assert.equal(old.status(), 301);
  assert.equal(old.headers().location, '/eltern/schoolfox/');
  const unicode = await context.request.get(base + '/seite/708736/verl%C3%A4ssliche-grundschule.html', {
    maxRedirects: 0
  });
  assert.equal(unicode.status(), 301);
  assert.equal(unicode.headers().location, '/schulalltag/#verl%C3%A4sslichkeit');
  const archive = await context.request.get(base + '/news/index.php?rubrik=1&archiv=1', {
    maxRedirects: 0
  });
  assert.equal(archive.status(), 301);
  assert.equal(archive.headers().location, '/schulleben/nachrichten/');
  const missing = await page.goto(base + '/does-not-exist/');
  assert.equal(missing.status(), 404);
  assert.match(await page.locator('h1').innerText(), /Hier wächst/);
  check('Routing', 'Legacy route redirects; real 404 status with useful error page.');
  await context.close();
  report.result = 'passed';
} catch (error) {
  report.result = 'failed';
  report.errors.push(error.stack || error.message);
  console.error(error);
  process.exitCode = 1;
} finally {
  await writeFile(`${output}/report.json`, JSON.stringify(report, null, 2) + '\n');
  if (browser) await browser.close();
  server.kill('SIGTERM');
}
