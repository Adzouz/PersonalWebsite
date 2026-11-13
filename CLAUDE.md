# CLAUDE.md

Personal portfolio SPA (thewebsdoor.com). React 19 + TypeScript 6 + Vite 8 + Sass CSS Modules + i18next. No router and no tests.

## Commands

- `npm run dev`: dev server
- `npm run build`: type-check, client build, SSR build of `src/entry-server.tsx`, then `scripts/prerender.js` writes static HTML for each language (`dist/index.html` for en, `dist/{en,fr,es}/index.html`) and `dist/404.html`. Run it to verify changes.
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
- The language comes from the first segment of the URL path and defaults to `en`.

## SEO / GEO

- Crawlers and AI agents often don't run JS, so the build prerenders the page. `<head>` tags (description, canonical, hreflang, JSON-LD `Person`) are built in `src/entry-server.tsx`, not in components. There is no Helmet.
- `main.tsx` uses `createRoot` (not `hydrateRoot`), so the client replaces the prerendered markup. Render-time code must not touch `window`/`document`/`location` without a `typeof` guard, or the prerender step fails.
- English lives at `/`, so its canonical is `/`. `/en` serves the same page.
- `public/llms.txt` is a hand-written summary for LLMs. Update it when projects, clients, or the bio change. Keep `public/sitemap.xml` in sync with the languages.

## 404 page

- There is no router. `isKnownPath` in `src/i18n/index.ts` knows the real pages (the language roots). For any other path, `main.tsx` renders `<App notFound />`, which lazy-loads `src/sections/NotFound`: a chat-style page with the chatbot and the Bug Squash game.
- The build writes `dist/404.html` with an empty `#root`. Vercel serves that file with a 404 status for every URL that matches no file, and the browser renders the page in the language of the URL. Never add a catch-all rewrite to `index.html` in `vercel.json`: it turns every unknown URL into a soft 404.
- The dev server and `vite preview` fall back to `index.html` instead, so the 404 page also shows there, but with a 200 status.
- The 404 section is never prerendered, so it is the one place where render-time code may read `location`.
- On the 404 page (`<Navbar notFound />`), the navbar hides its section links and keeps the theme toggle and the languages. A language link keeps the missing path and changes only its language prefix (`pathInLanguage`).
- The 404 page has its own background glows. Global styles find the page through `data-page="not-found"` on `<html>`: `main.tsx` sets it, and `scripts/prerender.js` writes it into `dist/404.html` so the glows are right from the first paint. The glows are in `src/styles/_base.scss` and their color is `--not-found-glow-color` in `src/styles/_variables.scss`, with one value per theme.
- The chat bubbles come from `About.module.scss`, so the markup must stay a `section` holding a `ul` with the About `section` and `messages` classes. `Chatbot` renders `<li>` elements for that list.
- The game rules are pure functions in `src/components/BugSquash/game.ts`. Keep React out of that file.
- The game has no end: the pace speeds up without limit, so every game ends when the lives run out (around 150 s even for a perfect bot). Anti-bot rules: events from scripts (`isTrusted` false) are ignored, and a hit sooner than `MIN_REACTION_MS` after a critter appears counts as a miss, so a bot cannot beat the best human. A score sent to a server can still be faked, so a future score API must check it there too.

## High-score API

- Vercel Functions in `api/` (Node.js, Web `Request`/`Response` handlers), with Upstash Redis from the Vercel Marketplace. `api/_shared.ts` is not a route.
- `POST /api/games` stores a game's start time under a single-use ticket. `POST /api/scores` checks the reCAPTCHA token, takes the ticket, and refuses a score above `maxScore(elapsed)` from `game.ts`. `GET /api/scores` returns the top 10.
- The API imports the game rules from `src/components/BugSquash/{game,scores}.ts`, so those files must stay free of React and browser APIs. `maxScore` must stay an upper bound of what the rules allow: update it with any change to the pace or the points.
- Env vars: `KV_REST_API_URL` and `KV_REST_API_TOKEN` (set by the Upstash integration), `GOOGLE_RECAPTCHA_SECRET_KEY` (server only). A deployment without the secret refuses every score.
- `npm run dev` has no functions: the table shows an error. `npm run dev:api` runs the site and the API with `vercel dev`, after loading `.env.local` (from `vercel env pull`) into the shell, because `vercel dev` does not pass `.env.local` to functions by itself. It skips the reCAPTCHA check when the secret is missing, and it writes to the same Redis store as production.
- `tsconfig.api.json` type-checks `api/`.

## Env vars

- Read them with `import.meta.env.REACT_APP_*` and type them in `src/vite-env.d.ts`.
- `envPrefix` is `['VITE_', 'REACT_APP_']`. The `REACT_APP_` prefix is kept so existing Vercel and CI env vars keep working.
- Never reintroduce `define: { 'process.env': env }`: it inlines every env var into the client bundle.

## Gotchas

- `typescript-eslint` supports only TypeScript `<6.1`, so do not upgrade to TS 7 until it adds support.
- Vite 8 minifies CSS with Lightning CSS, which keeps only the last of two duplicate properties. Put vendor-prefixed properties before the unprefixed one (`-webkit-backdrop-filter` and then `backdrop-filter`). If you don't, the standard property is dropped in production builds only. Check `dist/assets/*.css` after a build.
- With React 19, `JSX` is no longer a global namespace. Use `import type { JSX } from 'react'`.
- The chatbot calls `${REACT_APP_CHATBOT_URL}/ask`, guarded by reCAPTCHA v3, which is lazy-loaded when the textarea gets focus.
