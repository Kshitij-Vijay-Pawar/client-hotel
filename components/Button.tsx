import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-300 font-medium';

  const variants = {
    primary: 'bg-[#C6A769] text-[#1E1B18] hover:bg-[#B8985A] hover:shadow-lg hover:shadow-[#C6A769]/20',
    secondary: 'bg-[#EFE7DA] text-[#1E1B18] hover:bg-[#E5DCC9] hover:shadow-md',
    outline: 'border-2 border-[#C6A769] text-[#C6A769] hover:bg-[#C6A769] hover:text-[#1E1B18] hover:shadow-md',
    ghost: 'text-[#1E1B18] hover:bg-[#EFE7DA]'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
