// Libraries
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEOModule = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const title = `The Web's Door - Adrien Lepoutre`;
  const keywords =
    'frontend,developer,react,website,web,app,mobile,apps,site,sites,front-end,front,programmer';
  const description = t('metas.description');

  const availableLanguages = Array.isArray(i18n.options.supportedLngs)
    ? i18n.options.supportedLngs?.filter((lang) => lang !== 'cimode')
    : [];
  const links = availableLanguages.map((lang) => ({
    lang,
    url: `${process.env.REACT_APP_SITE_URL}/${lang}`,
  }));
  const currentUrl = window.location.origin + window.location.pathname;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <link rel="canonical" href={currentUrl} />
      {links.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
    </Helmet>
  );
};

export default SEOModule;
