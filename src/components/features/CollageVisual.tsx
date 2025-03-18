
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CollageVisualProps {
  features: Feature[];
}

const CollageVisual: React.FC<CollageVisualProps> = ({ features }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
      className="mt-20 relative h-[400px] sm:h-[500px] overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-5xl mx-auto">
          {/* Floating cards with parallax effect */}
          {features.map((feature, index) => {
            // Calculate position based on index
            const positions = [
              "top-10 left-10",
              "top-40 right-20",
              "bottom-20 left-1/4",
              "top-1/4 right-10",
              "bottom-10 right-1/4",
              "bottom-1/3 left-10",
            ];
            
            const sizes = [
              "w-64 h-48",
              "w-56 h-56",
              "w-72 h-44",
              "w-60 h-52",
              "w-52 h-60",
              "w-64 h-40",
            ];
            
            return (
              <motion.div
                key={`card-${index}`}
                className={`absolute ${positions[index]} ${sizes[index]} bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.7 + index * 0.15,
                  type: "spring"
                }}
                animate={{
                  y: [-(index % 3) * 10, (index % 3) * 10],
                  rotate: [-(index % 2), (index % 2)],
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-3">{feature.icon}</div>
                  <h4 className="text-lg font-serif font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-white/70">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
          
          {/* Central decorative element */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-cosmos-coral/30 rounded-full backdrop-blur-xl z-10 flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 20px rgba(255,107,107,0.3)",
                "0 0 30px rgba(255,107,107,0.5)",
                "0 0 20px rgba(255,107,107,0.3)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CollageVisual;
