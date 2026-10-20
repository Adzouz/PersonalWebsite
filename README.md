# The Web's Door

Personal portfolio website of Adrien Lepoutre: [thewebsdoor.com](https://thewebsdoor.com).

A single-page site built with React, TypeScript and Vite, showing a hero section, trusted clients, an "About" Q&A with an AI chatbot, a project showcase and contact links. Available in English, French and Spanish.

## Tech stack

- [React 19](https://react.dev) + [TypeScript 6](https://www.typescriptlang.org)
- [Vite 8](https://vite.dev) (Rolldown-based) with `@vitejs/plugin-react`
- [Sass](https://sass-lang.com) CSS Modules
- [i18next](https://www.i18next.com) / `react-i18next` for translations
- [react-helmet-async](https://github.com/staylor/react-helmet-async) for SEO meta tags
- ESLint 10 (flat config), Prettier, Husky, lint-staged and commitlint

## Requirements

- Node.js **24** (pinned with [Volta](https://volta.sh) in `package.json`)
- npm 11+

## Getting started

```bash
npm install
npm run dev
```

The dev server listens on `0.0.0.0`, so you can also open it from other devices on your network.

### Environment variables

Create a `.env` file at the project root (it is git-ignored):

```dotenv
REACT_APP_SITE_URL=http://localhost:5173
REACT_APP_CHATBOT_URL=http://localhost:5174
REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY=your-recaptcha-key
```

| Variable                              | Purpose                                                         |
| ------------------------------------- | --------------------------------------------------------------- |
| `REACT_APP_SITE_URL`                  | Base URL used for `hreflang` alternate links                    |
| `REACT_APP_CHATBOT_URL`               | Chatbot backend. The site sends `POST {url}/ask` requests to it |
| `REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY` | reCAPTCHA v3 site key protecting the chatbot                    |

Only variables prefixed with `VITE_` or `REACT_APP_` are exposed to the client, through `import.meta.env`. Never put secrets in them.

## Scripts

| Command             | Description                                 |
| ------------------- | ------------------------------------------- |
| `npm run dev`       | Start the Vite dev server                   |
| `npm run build`     | Type-check and build to `dist/`             |
| `npm run preview`   | Serve the production build locally          |
| `npm run typecheck` | Run the TypeScript project build (`tsc -b`) |
| `npm run lint`      | Lint with ESLint                            |
| `npm run format`    | Format everything with Prettier             |

## Project structure

```
public/            Static assets (fonts, images, project screenshots, robots/sitemap)
src/
  components/      Reusable UI (Navbar, Chatbot, ProjectCard, SVG icons/logos…)
  sections/        Page sections rendered in order by App.tsx
  i18n/            i18next setup + translations (en, fr, es)
  styles/          Global Sass (variables, mixins, fonts, base)
  types/           Shared TypeScript types
```

The language is picked from the URL path (`/en`, `/fr`, `/es`) and falls back to English.

## Git hooks

- **pre-commit**: lint-staged runs ESLint and Prettier on staged files
- **commit-msg**: commitlint enforces [Conventional Commits](https://www.conventionalcommits.org)

## Deployment

- **Vercel**: `vercel.json` sets up SPA rewrites to `index.html` and cache headers.
- **CircleCI**: `.circleci/config.yml` builds on every push and copies `dist/` to the EC2 server on `main`.
