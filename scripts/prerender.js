// Writes one static HTML page per language into dist/ from the SSR bundle
// built from src/entry-server.tsx. Run after both Vite builds.
import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const ssrDist = path.join(root, 'dist-ssr');

const { availableLanguages, defaultLanguage, render } = await import(
  path.join(ssrDist, 'entry-server.js')
);
const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');

for (const placeholder of [
  '<html lang="en">',
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

await fs.rm(ssrDist, { recursive: true, force: true });
