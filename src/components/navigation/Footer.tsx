import React from 'react';
// import { Link } from 'react-router-dom'; // Old import
import { Link } from 'react-router-dom'; // Keep for standard links
import { HashLink } from 'react-router-hash-link'; // 1. Import HashLink
import { motion } from 'framer-motion';
import logoImage from '../../assets/logo.png';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = [
    { title: 'Company', links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/about#careers' },
      { name: 'Contact', href: '/contact' },
    ]},
    { title: 'Programs', links: [
      { name: 'VCAP - Career Assurance', href: '/services' },
      { name: 'Vstart Internship', href: '/services#internship' },
      { name: 'For Companies', href: '/services#companies' },
      { name: 'Our Projects', href: '/projects' },
    ]},
    { title: 'Resources', links: [
      { name: 'Blog', href: '/blog' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ]},
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-white dark:bg-dark-950 border-t border-dark-200 dark:border-dark-800 pt-16 pb-6 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and company info */}
          <div>
            <Link to="/" className="inline-flex items-center mb-4">
            <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
           <img 
            src={logoImage} 
            alt="Vibai Innovixs Logo" 
            className="mr-2"
            style={{ width: '200px', height: 'auto' }}
          />
</motion.div>
            </Link>
            {/* Social links */}
            <div className="flex space-x-4 mt-4">
              {['Github', 'Linkedin', 'Twitter', 'Instagram'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-dark-100 dark:bg-dark-800 rounded-full text-dark-600 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {social === 'Github' && <Github size={18} />}
                  {social === 'Linkedin' && <Linkedin size={18} />}
                  {social === 'Twitter' && <Twitter size={18} />}
                  {social === 'Instagram' && <Instagram size={18} />}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Footer links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-display font-semibold text-dark-900 dark:text-white mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    {/* 2. Conditionally render HashLink or Link */}
                    {link.href.includes('#') ? (
                      <HashLink
                        smooth
                        to={link.href}
                        className="text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        {link.name}
                      </HashLink>
                    ) : (
                      <Link 
                        to={link.href}
                        className="text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-dark-200 dark:border-dark-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-500 dark:text-dark-400 text-sm mb-4 md:mb-0">
            © {currentYear} Vibai Innovixs. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-dark-500 dark:text-dark-400 text-sm hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
              Privacy
            </Link>
            <Link to="/terms" className="text-dark-500 dark:text-dark-400 text-sm hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
              Terms
            </Link>
            <Link to="/cookies" className="text-dark-500 dark:text-dark-400 text-sm hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;