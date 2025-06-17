import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  onClick,
  className = '',
  fullWidth = false,
  type = 'button',
  disabled = false,
}) => {
  // Determine classes based on variant
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 disabled:bg-primary-300 disabled:cursor-not-allowed';
      case 'secondary':
        return 'bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700 disabled:bg-accent-300 disabled:cursor-not-allowed';
      case 'outline':
        return 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 active:bg-primary-100 disabled:opacity-50 disabled:cursor-not-allowed';
      case 'ghost':
        return 'text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 active:bg-primary-100 disabled:opacity-50 disabled:cursor-not-allowed';
      default:
        return 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 disabled:bg-primary-300 disabled:cursor-not-allowed';
    }
  };

  // Determine classes based on size
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'text-sm px-3 py-1.5';
      case 'md':
        return 'text-base px-5 py-2.5';
      case 'lg':
        return 'text-lg px-8 py-3.5';
      default:
        return 'text-base px-5 py-2.5';
    }
  };

  const baseClasses = `inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 ${
    fullWidth ? 'w-full' : ''
  } ${getSizeClasses()} ${getVariantClasses()} ${className}`;

  // If href is provided, render as Link or anchor
  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          whileHover={{ scale: disabled ? 1 : 1.02 }}
          whileTap={{ scale: disabled ? 1 : 0.98 }}
        >
          {children}
        </motion.a>
      );
    }
    
    return (
      <motion.div
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
      >
        <Link to={href} className={baseClasses}>
          {children}
        </Link>
      </motion.div>
    );
  }

  // Otherwise render as button
  return (
    <motion.button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;