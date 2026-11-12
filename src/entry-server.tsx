// Build-time entry used by scripts/prerender.js. It renders each language to
// static HTML so crawlers and AI agents that don't run JavaScript can read the
// page, and builds the matching <head> tags.

// Libraries
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import i18n, {
  availableLanguages,
  defaultLanguage,
  languagePath,
} from './i18n';

// Components
import App from './App';

export { availableLanguages, defaultLanguage };

// Fallback keeps the build working where the env var is not set (CI)
const SITE_URL = (
  import.meta.env.REACT_APP_SITE_URL || 'https://thewebsdoor.com'
).replace(/\/$/, '');
const TITLE = `The Web's Door - Adrien Lepoutre`;
const KEYWORDS =
  'frontend,developer,react,website,web,app,mobile,apps,site,sites,front-end,front,programmer';

const pageUrl = (lang: string) => `${SITE_URL}${languagePath(lang)}`;

const escapeAttribute = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const structuredData = (lang: string, url: string, description: string) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "The Web's Door",
      inLanguage: availableLanguages,
      publisher: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${url}#profilepage`,
      url,
      name: TITLE,
      description,
      inLanguage: lang,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      mainEntity: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Adrien Lepoutre',
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/images/me.webp`,
      description,
      jobTitle: 'Fullstack developer',
      worksFor: {
        '@type': 'Organization',
        name: 'Strapi',
        url: 'https://strapi.io',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'SUPINFO',
        url: 'https://www.supinfo.com',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lille',
        addressCountry: 'FR',
      },
      nationality: [
        { '@type': 'Country', name: 'France' },
        { '@type': 'Country', name: 'Canada' },
      ],
      knowsLanguage: ['fr', 'en', 'es'],
      knowsAbout: [
        'Fullstack development',
        'Front-end development',
        'Web development',
        'Mobile app development',
        'React',
        'React Native',
        'TypeScript',
        'JavaScript',
        'Strapi',
      ],
      sameAs: [
        'https://www.linkedin.com/in/adrienlepoutre',
        'https://github.com/Adzouz',
      ],
    },
  ],
});

const renderHead = (lang: string) => {
  const url = pageUrl(lang);
  const description = escapeAttribute(i18n.t('metas.description'));
  // `<` is escaped so the JSON can never close the <script> tag
  const jsonLd = JSON.stringify(
    structuredData(lang, url, i18n.t('metas.description'))
  ).replace(/</g, '\\u003c');

  return [
    `<title>${TITLE}</title>`,
    `<meta property="og:title" content="${escapeAttribute(TITLE)}" />`,
    `<meta name="description" content="${description}" />`,
    `<meta name="keywords" content="${KEYWORDS}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<link rel="canonical" href="${url}" />`,
    ...availableLanguages.map(
      (alternate) =>
        `<link rel="alternate" hreflang="${alternate}" href="${pageUrl(alternate)}" />`
    ),
    `<link rel="alternate" hreflang="x-default" href="${pageUrl(defaultLanguage)}" />`,
    `<link rel="alternate" type="text/plain" title="LLM summary" href="${SITE_URL}/llms.txt" />`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ].join('\n    ');
};

export const render = async (lang: string) => {
  await i18n.changeLanguage(lang);
  return {
    head: renderHead(lang),
    html: renderToString(
      <StrictMode>
        <App />
      </StrictMode>
    ),
  };
};
