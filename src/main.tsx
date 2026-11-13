// Libraries
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import i18n, { isKnownPath } from './i18n';
import './styles/index.scss';

// Components
import App from './App';

const notFound = !isKnownPath(location.pathname);

// A single 404.html answers unknown URLs in every language, so the document
// language cannot be set at build time for that page.
document.documentElement.lang = i18n.language;

// Global styles tell the 404 page apart with this attribute (see _base.scss).
// 404.html already has it. The dev server and `vite preview` answer unknown
// URLs with index.html, which does not.
if (notFound) document.documentElement.dataset.page = 'not-found';

// The build prerenders the page into #root for crawlers. createRoot replaces
// that markup rather than hydrating it, because some components (theme,
// scroll animations) depend on browser-only state.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App notFound={notFound} />
  </StrictMode>
);
