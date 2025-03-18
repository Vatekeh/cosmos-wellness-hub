
import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: 0.2 + index * 0.1,
        type: "spring",
        stiffness: 50
      }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="feature-card glass-panel p-8 flex flex-col items-center text-center"
    >
      <motion.div 
        whileHover={{ 
          rotate: [0, -10, 10, -5, 5, 0],
          transition: { duration: 0.5 }
        }}
        className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 mb-6"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-serif font-semibold mb-3">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
