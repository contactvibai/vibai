import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './navigation/Navbar';
import Footer from './navigation/Footer';
import { useMotion } from '../context/MotionContext';
import { Menu, X } from 'lucide-react';

const Layout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { prefersReducedMotion } = useMotion();
  const location = useLocation();

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Dynamic background */}
      <div className="animated-bg">
        <div className="bg-grid bg-grid-fade fixed inset-0 -z-10" />
        {!prefersReducedMotion && (
          <>
            <div className="dot w-64 h-64 top-1/4 left-1/4 blur-[100px]" />
            <div className="dot w-72 h-72 bottom-1/4 right-1/4 blur-[120px]" />
          </>
        )}
      </div>

      {/* Mobile menu button */}
      <button 
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/80 dark:bg-dark-900/80 text-dark-900 dark:text-white backdrop-blur-sm md:hidden shadow-md"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile navigation overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-dark-950/95 z-40 flex flex-col md:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ 
              type: 'spring', 
              stiffness: 300, 
              damping: 30,
              duration: 0.3
            }}
          >
            <Navbar isMobile={true} closeMobileMenu={() => setMobileMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main navigation (desktop) */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-white/70 dark:bg-dark-950/80 transition-all duration-300 shadow-sm">
        <div className="container mx-auto px-4">
          <Navbar isMobile={false} />
        </div>
      </header>

      {/* Main content with page transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 25,
              duration: 0.5
            }}
            className="flex-grow"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;