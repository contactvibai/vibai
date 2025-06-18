import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex justify-center">
            <div className="text-9xl font-display font-bold text-gradient">404</div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-dark-600 dark:text-dark-300 mb-8 max-w-xl mx-auto">
            The page you are looking for might be temporarily unavailable. It’s possible that it is currently under maintenance. Please try again later or return to the homepage for more options.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button href="/" size="lg">
              <Home className="mr-2 h-5 w-5" /> Go Home
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
              size="lg"
            >
              <ArrowLeft className="mr-2 h-5 w-5" /> Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;