// Writes one static HTML page per language into dist/ from the SSR bundle
// built from src/entry-server.tsx, plus dist/404.html. Run after both Vite
// builds.
import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const ssrDist = path.join(root, 'dist-ssr');

const { availableLanguages, defaultLanguage, notFoundHead, render } =
  await import(path.join(ssrDist, 'entry-server.js'));
const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');

const ROBOTS_INDEX = '<meta name="robots" content="index, follow" />';

for (const placeholder of [
  '<html lang="en">',
  ROBOTS_INDEX,
  '<!--app-head-->',
  '<!--app-html-->',
]) {
  if (!template.includes(placeholder)) {
    throw new Error(`index.html is missing "${placeholder}"`);
  }
}

for (const lang of availableLanguages) {
  const { head, html } = await render(lang);
  const page = template
    .replace('<html lang="en">', `<html lang="${lang}">`)
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html);

  await fs.mkdir(path.join(dist, lang), { recursive: true });
  await fs.writeFile(path.join(dist, lang, 'index.html'), page);
  if (lang === defaultLanguage) {
    await fs.writeFile(path.join(dist, 'index.html'), page);
  }
  console.log(`Prerendered /${lang}`);
}

// Vercel serves dist/404.html, with a 404 status, for every URL that matches
// no file. #root stays empty: the browser renders the page in the language of
// the URL (see `notFound` in src/App.tsx).
await fs.writeFile(
  path.join(dist, '404.html'),
  template
    // Global styles give the 404 page its own glows. The attribute is in the
    // file so that they are right from the first paint.
    .replace('<html lang="en">', '<html lang="en" data-page="not-found">')
    .replace(ROBOTS_INDEX, '<meta name="robots" content="noindex" />')
    .replace('<!--app-head-->', notFoundHead)
    .replace('<!--app-html-->', '')
);
console.log('Wrote /404.html');

await fs.rm(ssrDist, { recursive: true, force: true });
