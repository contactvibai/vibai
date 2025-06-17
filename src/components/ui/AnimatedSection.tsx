import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, Variant } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMotion } from '../../context/MotionContext';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';
  duration?: number;
  triggerOnce?: boolean;
  threshold?: number;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  triggerOnce = true,
  threshold = 0.2,
  id,
}) => {
  const controls = useAnimation();
  const { prefersReducedMotion } = useMotion();
  const [ref, inView] = useInView({ 
    triggerOnce, 
    threshold,
    rootMargin: '-50px 0px'
  });

  // Define direction-based variants
  const getVariants = () => {
    if (prefersReducedMotion) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      };
    }

    const variants: { hidden: Variant; visible: Variant } = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      }
    };

    switch (direction) {
      case 'up':
        variants.hidden = { ...variants.hidden, y: 40 };
        variants.visible = { ...variants.visible, y: 0 };
        break;
      case 'down':
        variants.hidden = { ...variants.hidden, y: -40 };
        variants.visible = { ...variants.visible, y: 0 };
        break;
      case 'left':
        variants.hidden = { ...variants.hidden, x: 40 };
        variants.visible = { ...variants.visible, x: 0 };
        break;
      case 'right':
        variants.hidden = { ...variants.hidden, x: -40 };
        variants.visible = { ...variants.visible, x: 0 };
        break;
      case 'scale':
        variants.hidden = { ...variants.hidden, scale: 0.8 };
        variants.visible = { ...variants.visible, scale: 1 };
        break;
      case 'none':
      default:
        // Just use opacity
        break;
    }

    return variants;
  };

  // Start animation when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      id={id}
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;