import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useCursor } from './context/CursorContext';

// Components
import Loader from './components/ui/Loader';
import Layout from './components/Layout';

// Lazy loaded pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
// const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

function App() {
  const location = useLocation();
  const { updateCursorPosition, toggleCursorActive } = useCursor();

   const isMobile = useIsMobile();
  // Handle cursor movement 
  useEffect(() => {
      if (isMobile) {
      return;
    }
    const handleMouseMove = (e: MouseEvent) => {
      updateCursorPosition(e.clientX, e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('link-hover-effect');
        
      if (isLink) {
        toggleCursorActive(true);
      }
    };

    const handleMouseOut = () => {
      toggleCursorActive(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [updateCursorPosition, toggleCursorActive]);

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            } />
            <Route path="about" element={
              <Suspense fallback={<Loader />}>
                <About />
              </Suspense>
            } />
            <Route path="services" element={
              <Suspense fallback={<Loader />}>
                <Services />
              </Suspense>
            } />
           {/* <Route path="portfolio" element={
              <Suspense fallback={<Loader />}>
                <Portfolio />
              </Suspense>
            } /> */}
            <Route path="contact" element={
              <Suspense fallback={<Loader />}>
                <Contact />
              </Suspense>
            } />
            <Route path="*" element={
              <Suspense fallback={<Loader />}>
                <NotFound />
              </Suspense>
            } />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;