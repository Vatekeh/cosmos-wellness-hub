
import React from 'react';
import { motion } from 'framer-motion';

interface FloatingShapeProps {
  className: string;
  delay?: number;
  duration?: number;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ className, delay = 0, duration = 20 }) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: ['-10%', '10%'],
        x: ['-5%', '5%'],
      }}
      transition={{
        repeat: Infinity,
        repeatType: 'reverse',
        duration,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
};

export default FloatingShape;
