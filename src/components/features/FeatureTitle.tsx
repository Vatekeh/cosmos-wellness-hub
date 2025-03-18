
import React from 'react';
import { motion } from 'framer-motion';

const FeatureTitle: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md mb-4"
      >
        <span className="text-sm font-medium">Our Features</span>
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6"
      >
        Discover a universe of
        <span className="cosmos-gradient-text block">mental wellness tools</span>
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl mx-auto text-lg text-white/80"
      >
        Cosmos combines ancient wisdom with modern psychology to provide a comprehensive 
        approach to mental health and personal growth.
      </motion.p>
    </div>
  );
};

export default FeatureTitle;
