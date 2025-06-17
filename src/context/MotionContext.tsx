import React, { createContext, useContext, useState, useCallback } from 'react';

interface MotionContextType {
  prefersReducedMotion: boolean;
  toggleReducedMotion: () => void;
}

const MotionContext = createContext<MotionContextType | undefined>(undefined);

export const useMotion = (): MotionContextType => {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error('useMotion must be used within a MotionProvider');
  }
  return context;
};

export const MotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Check if user has system preference for reduced motion
  const getInitialPreference = () => {
    const savedPreference = localStorage.getItem('reducedMotion');
    if (savedPreference !== null) {
      return savedPreference === 'true';
    }
    
    // Check system preference
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(getInitialPreference);

  const toggleReducedMotion = useCallback(() => {
    setPrefersReducedMotion((prev) => {
      const newValue = !prev;
      localStorage.setItem('reducedMotion', String(newValue));
      return newValue;
    });
  }, []);

  // Listen for system preference changes
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't explicitly set a preference
      if (localStorage.getItem('reducedMotion') === null) {
        setPrefersReducedMotion(e.matches);
      }
    };

    // Add listener for modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      }
    };
  }, []);

  return (
    <MotionContext.Provider value={{ prefersReducedMotion, toggleReducedMotion }}>
      {children}
    </MotionContext.Provider>
  );
};