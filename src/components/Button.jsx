import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  href,
  type = 'button',
  ...props 
}) => {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-neon-green to-neon-blue text-dark-bg hover:shadow-neon-mix",
    outline: "bg-transparent border-2 border-neon-green text-neon-green hover:bg-neon-green/10 hover:shadow-neon-green",
    ghost: "bg-transparent text-gray-text hover:text-neon-green hover:bg-dark-accent",
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  const MotionButton = motion.button;
  const MotionLink = motion.a;
  const Component = href ? MotionLink : MotionButton;

  return (
    <Component
      href={href}
      onClick={onClick}
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={buttonClasses}
      {...props}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-green opacity-0 
                     group-hover:opacity-20 transition-opacity duration-300"></span>
      <span className="relative z-10">{children}</span>
    </Component>
  );
};

export default Button;
