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
    <meta name="robots" content="index, follow" />
    <meta content="Adrien Lepoutre" name="author" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content="https://thewebsdoor.com/images/facebook.webp"
    />
    <meta content="386568964690808" property="fb:app_id" />
    <link rel="canonical" href={url} />
    {alternateUrls.map(({ lang, url }) => (
      <link key={lang} rel="alternate" hrefLang={lang} href={url} />
    ))}
  </Helmet>
);

export default SEOModule;
