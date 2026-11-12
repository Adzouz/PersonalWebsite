// Libraries
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n';
import './styles/index.scss';

// Components
import App from './App';

// The build prerenders the page into #root for crawlers. createRoot replaces
// that markup rather than hydrating it, because some components (theme,
// scroll animations) depend on browser-only state.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
