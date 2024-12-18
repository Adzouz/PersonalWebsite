// Libraries
import { Helmet } from 'react-helmet-async';
import { SEOProps } from '../../types';

const SEOModule = ({
  title,
  description,
  keywords,
  lang,
  url,
  alternateUrls,
}: SEOProps) => (
  <Helmet>
    <html lang={lang} />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <link rel="canonical" href={url} />
    {alternateUrls.map(({ lang, url }) => (
      <link key={lang} rel="alternate" hrefLang={lang} href={url} />
    ))}
  </Helmet>
);

export default SEOModule;
