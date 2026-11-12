// Components
import About from './sections/About';
import Contact from './sections/Contact';
import CursorGlow from './components/CursorGlow';
import Hero from './sections/Hero';
import Navbar from './components/Navbar';
import Showcase from './sections/Showcase';
import TrustedClients from './sections/TrustedClients';

const App = () => (
  <>
    <CursorGlow />
    <Navbar />
    <Hero />
    <TrustedClients />
    <About />
    <Showcase />
    <Contact />
  </>
);

export default App;
