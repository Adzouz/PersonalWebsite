// Libraries
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  lang: string;
  url: string;
  alternateUrls: { lang: string; url: string }[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  lang,
  url,
  alternateUrls,
}) => {
  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="robots" content="index, follow" />
      <meta content="Adrien Lepoutre" name="author" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta content="386568964690808" property="fb:app_id" />
      <link rel="canonical" href={url} />
      {alternateUrls.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
    </Helmet>
  );
};

export default SEO;
