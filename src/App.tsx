// Components
import About from './sections/About';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Navbar from './components/Navbar';
import SEOModule from './components/SEOModule';
import Showcase from './sections/Showcase';
import TrustedClients from './sections/TrustedClients';

const App = () => (
  <>
    <SEOModule />
    <Navbar />
    <Hero />
    <TrustedClients />
    <About />
    <Showcase />
    <Contact />
  </>
);

export default App;
