export interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  lang: string;
  url: string;
  alternateUrls: { lang: string; url: string }[];
}
