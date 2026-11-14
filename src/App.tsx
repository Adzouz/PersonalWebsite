// Libraries
import { lazy, Suspense } from 'react';

// Components
import About from './sections/About';
import Contact from './sections/Contact';
import CursorGlow from './components/CursorGlow';
import Hero from './sections/Hero';
import Navbar from './components/Navbar';
import Showcase from './sections/Showcase';
import TrustedClients from './sections/TrustedClients';

// Loaded on demand, so the home page does not carry the 404 page and its game.
// It is never prerendered: it only renders in the browser.
const NotFound = lazy(() => import('./sections/NotFound'));

interface AppProps {
  // Set when the URL is not one of the site's pages (see `isKnownPath`)
  notFound?: boolean;
}

const App = ({ notFound = false }: AppProps) => (
  <>
    <CursorGlow />
    <Navbar notFound={notFound} />
    {notFound ? (
      <Suspense>
        <NotFound />
      </Suspense>
    ) : (
      <>
        <Hero />
        <TrustedClients />
        <About />
        <Showcase />
        <Contact />
      </>
    )}
  </>
);

export default App;
