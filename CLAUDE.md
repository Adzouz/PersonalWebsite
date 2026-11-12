# CLAUDE.md

Personal portfolio SPA (thewebsdoor.com). React 19 + TypeScript 6 + Vite 8 + Sass CSS Modules + i18next. No router and no tests.

## Commands

- `npm run dev`: dev server
- `npm run build`: type-check, client build, SSR build of `src/entry-server.tsx`, then `scripts/prerender.js` writes static HTML for each language (`dist/index.html` for en, `dist/{en,fr,es}/index.html`). Run it to verify changes.
- `npm run lint`: ESLint flat config (`eslint.config.js`)
- `npm run format`: Prettier. Many existing files are not formatted yet, so only format the files you touch.

Node 24 is required and pinned via Volta.

## Conventions

- Package is ESM (`"type": "module"`), so config files use `export default`.
- Components live in `src/components/<Name>/index.tsx` with a sibling `<Name>.module.scss`. Page sections live in `src/sections/<Name>/`.
- Imports are grouped with `// Libraries`, `// Components` and `// Styles` comments.
- SVG icons and logos are React components exported from `src/components/{Icons,Logos,Social,Languages}/index.ts`.
- Sass mixins from `src/styles/_mixins.scss` are auto-injected into every SCSS file (see `vite.config.ts`). Do not `@use` them manually.
- `@/` is aliased to `src/`.
- Prettier: single quotes, semicolons, `trailingComma: es5`, 80 cols.
- Commits must follow Conventional Commits (commitlint runs in a husky hook).

## i18n

- Translations are TS objects in `src/i18n/languages/{en,fr,es}.ts`. Keep all three in sync when you add keys.
- The language comes from the URL path segment and defaults to `en`.

## SEO / GEO

- Crawlers and AI agents often don't run JS, so the build prerenders the page. `<head>` tags (description, canonical, hreflang, JSON-LD `Person`) are built in `src/entry-server.tsx`, not in components. There is no Helmet.
- `main.tsx` uses `createRoot` (not `hydrateRoot`), so the client replaces the prerendered markup. Render-time code must not touch `window`/`document`/`location` without a `typeof` guard, or the prerender step fails.
- English lives at `/`, so its canonical is `/`. `/en` serves the same page.
- `public/llms.txt` is a hand-written summary for LLMs. Update it when projects, clients, or the bio change. Keep `public/sitemap.xml` in sync with the languages.

## Env vars

- Read them with `import.meta.env.REACT_APP_*` and type them in `src/vite-env.d.ts`.
- `envPrefix` is `['VITE_', 'REACT_APP_']`. The `REACT_APP_` prefix is kept so existing Vercel and CI env vars keep working.
- Never reintroduce `define: { 'process.env': env }`: it inlines every env var into the client bundle.

## Gotchas

- `typescript-eslint` supports only TypeScript `<6.1`, so do not upgrade to TS 7 until it adds support.
- Vite 8 minifies CSS with Lightning CSS, which keeps only the last of two duplicate properties. Put vendor-prefixed properties before the unprefixed one (`-webkit-backdrop-filter` and then `backdrop-filter`). If you don't, the standard property is dropped in production builds only. Check `dist/assets/*.css` after a build.
- With React 19, `JSX` is no longer a global namespace. Use `import type { JSX } from 'react'`.
- The chatbot calls `${REACT_APP_CHATBOT_URL}/ask`, guarded by reCAPTCHA v3, which is lazy-loaded when the textarea gets focus.
