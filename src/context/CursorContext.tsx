import React, { createContext, useContext, useState, useCallback } from 'react';
import { useMotion } from './MotionContext';

interface CursorContextType {
  cursorPosition: { x: number; y: number };
  isCursorActive: boolean;
  updateCursorPosition: (x: number, y: number) => void;
  toggleCursorActive: (isActive: boolean) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const useCursor = (): CursorContextType => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isCursorActive, setIsCursorActive] = useState(false);
  const { prefersReducedMotion } = useMotion();

  const updateCursorPosition = useCallback((x: number, y: number) => {
    if (!prefersReducedMotion) {
      setCursorPosition({ x, y });
    }
  }, [prefersReducedMotion]);

  const toggleCursorActive = useCallback((isActive: boolean) => {
    if (!prefersReducedMotion) {
      setIsCursorActive(isActive);
    }
  }, [prefersReducedMotion]);

  // Render the custom cursor
  const CustomCursor = () => {
    if (prefersReducedMotion) return null;
    
    return (
      <div 
        className={`custom-cursor ${isCursorActive ? 'custom-cursor-active' : ''}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
    );
  };

  return (
    <CursorContext.Provider value={{ 
      cursorPosition, 
      isCursorActive, 
      updateCursorPosition, 
      toggleCursorActive 
    }}>
      <CustomCursor />
      {children}
    </CursorContext.Provider>
  );
};