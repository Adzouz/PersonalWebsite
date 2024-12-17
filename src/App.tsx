// Components
import About from './sections/About';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Map from './sections/Map';
import Navbar from './components/Navbar';
import SEOModule from './components/SEOModule';
import Showcase from './sections/Showcase';
import TrustedClients from './sections/TrustedClients';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const links = [
    {
      lang: 'en',
      url: `${process.env.REACT_APP_SITE_URL}/en`,
    },
    {
      lang: 'fr',
      url: `${process.env.REACT_APP_SITE_URL}/fr`,
    },
  ];

  const currentLink = links.filter((link) => link.lang === lang)[0];

  return (
    <>
      <SEOModule
        title={`The Web's Door - Adrien Lepoutre`}
        keywords={
          'frontend,developer,react,website,web,app,mobile,apps,site,sites,front-end,front,programmer'
        }
        description={t('metas.description')}
        lang={lang}
        url={currentLink.url}
        alternateUrls={links}
      />
      <Navbar />
      <Hero />
      <TrustedClients />
      <About />
      <Showcase />
      <Contact />
      <Map />
    </>
  );
};

export default App;
