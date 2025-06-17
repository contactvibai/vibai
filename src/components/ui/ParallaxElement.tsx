import React, { useRef, useEffect } from 'react';
import { useMotion } from '../../context/MotionContext';

interface ParallaxElementProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // 0 = no movement, 1 = moves with scroll, -1 = moves opposite to scroll
  direction?: 'vertical' | 'horizontal' | 'both';
}

const ParallaxElement: React.FC<ParallaxElementProps> = ({ 
  children, 
  className = '',
  speed = 0.2,
  direction = 'vertical'
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { prefersReducedMotion } = useMotion();

  useEffect(() => {
    if (prefersReducedMotion || !elementRef.current) return;

    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const scrollPosition = window.scrollY;
      const elementPosition = elementRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      
      // Check if element is in viewport (with some margin)
      if (
        elementPosition + elementRef.current.offsetHeight > scrollPosition - windowHeight &&
        elementPosition < scrollPosition + windowHeight * 2
      ) {
        let translateY = 0;
        let translateX = 0;
        
        // Calculate translation based on element position in viewport
        const relativePos = scrollPosition + windowHeight - elementPosition;
        
        if (direction === 'vertical' || direction === 'both') {
          translateY = relativePos * speed;
        }
        
        if (direction === 'horizontal' || direction === 'both') {
          // For horizontal, use a different calculation based on how far the element is from center
          const elementCenterY = elementPosition + elementRef.current.offsetHeight / 2;
          const viewportCenterY = scrollPosition + windowHeight / 2;
          const distanceFromCenter = elementCenterY - viewportCenterY;
          
          translateX = distanceFromCenter * speed * 0.1;
        }
        
        // Apply the transformation with requestAnimationFrame for performance
        requestAnimationFrame(() => {
          if (elementRef.current) {
            elementRef.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial calculation
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction, prefersReducedMotion]);

  return (
    <div 
      ref={elementRef} 
      className={`parallax ${className}`}
    >
      {children}
    </div>
  );
};

export default ParallaxElement;