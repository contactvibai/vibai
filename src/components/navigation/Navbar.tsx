import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useMotion } from '../../context/MotionContext';
import logoImage from '../../assets/logo.png'; // A standard import for images
// Adjust the path to where you saved your PNG file
import { Sun, Moon, Zap, SlidersHorizontal } from 'lucide-react';

interface NavbarProps {
  isMobile: boolean;
  closeMobileMenu?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMobile, closeMobileMenu }) => {
  const { theme, toggleTheme } = useTheme();
  const { prefersReducedMotion, toggleReducedMotion } = useMotion();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Programs' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const variants = {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.3,
        },
      },
    },
    item: {
      hidden: { y: -20, opacity: 0 },
      show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    },
  };

  const getLinkClasses = ({ isActive }: { isActive: boolean }) => {
    return `relative px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
      isActive
        ? 'text-primary-500 dark:text-primary-400'
        : 'text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-300'
    } ${isMobile ? 'text-2xl py-4' : ''}`;
  };

  // For mobile navigation with full-screen menu
  if (isMobile) {
    return (
      <motion.nav
        className="flex flex-col items-center justify-center h-full w-full"
        variants={variants.container}
        initial="hidden"
        animate="show"
      >
        <div className="flex items-center justify-center mb-12">
          <motion.div 
            variants={variants.item}
            className="flex items-center"
          >
             <img 
              src={logoImage} 
              alt="Vibai Innovixs Logo" 
              className="mr-2" 
              style={{ width: '32px', height: 'auto' }} // Set a width and let height adjust automatically
            />
            <span className="font-display font-bold text-4xl text-gradient">Vibai Innovixs</span>
          </motion.div>
        </div>
        
        <motion.ul
          className="flex flex-col space-y-6 items-center"
          variants={variants.container}
          initial="hidden"
          animate="show"
        >
          {navLinks.map((link) => (
            <motion.li key={link.path} variants={variants.item}>
              <NavLink 
                to={link.path}
                className={getLinkClasses}
                onClick={closeMobileMenu}
              >
                {link.label}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>
        
        <motion.div 
          className="flex space-x-4 mt-12 items-center"
          variants={variants.item}
        >
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-dark-800 hover:bg-dark-700 transition-colors"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <Moon size={24} className="text-white" /> : <Sun size={24} className="text-white" />}
          </button>
          
          <button
            onClick={toggleReducedMotion}
            className={`p-3 rounded-full ${
              prefersReducedMotion ? 'bg-accent-500 hover:bg-accent-600' : 'bg-dark-800 hover:bg-dark-700'
            } transition-colors`}
            aria-label={prefersReducedMotion ? 'Enable animations' : 'Reduce animations'}
          >
            <SlidersHorizontal size={24} className="text-white" />
          </button>
        </motion.div>
      </motion.nav>
    );
  }

  // For desktop navigation
  return (
    <div className="hidden md:flex justify-between items-center py-4">
      <NavLink to="/" className="flex items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {/* <div className="bg-[#1b1c1d] p-2 rounded-lg flex items-center justify-center mr-2"> */}
           <img 
            src={logoImage} 
            alt="Vibai Innovixs Logo" 
            className="mr-2"
            style={{ width: '50px', height: 'auto' }} // Set a width and let height adjust automatically
          />
          {/* </div> */}
          {/* <Zap size={28} className="text-primary-500 mr-2" />/ */}
        </motion.div>
        <span className="font-display font-bold text-2xl text-gradient">Vibai Innovixs</span>
      </NavLink>
      
      <nav>
        <ul className="flex space-x-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink 
                to={link.path} 
                className={getLinkClasses}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 w-full bg-primary-500 dark:bg-primary-400"
                        layoutId="navbar-indicator"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="flex space-x-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="p-2 rounded-full bg-dark-100 dark:bg-dark-800 hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors text-dark-700 dark:text-dark-300"
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleReducedMotion}
          className={`p-2 rounded-full ${
            prefersReducedMotion 
              ? 'bg-accent-500 hover:bg-accent-600 text-white' 
              : 'bg-dark-100 dark:bg-dark-800 hover:bg-dark-200 dark:hover:bg-dark-700 text-dark-700 dark:text-dark-300'
          } transition-colors`}
          aria-label={prefersReducedMotion ? 'Enable animations' : 'Reduce animations'}
        >
          <SlidersHorizontal size={20} />
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;