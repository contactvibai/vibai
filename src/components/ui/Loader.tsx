import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-dark-950 z-50">
      <div className="flex flex-col items-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
          className="text-primary-500 mb-4"
        >
          <Zap size={48} />
        </motion.div>
        
        <div className="h-1 w-48 bg-dark-200 dark:bg-dark-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
          />
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-dark-600 dark:text-dark-300 font-medium"
        >
          Loading amazing content...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;