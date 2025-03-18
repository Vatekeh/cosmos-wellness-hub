
import React from 'react';
import { Moon, Sun, Heart, Brain, CloudRain, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Moon className="w-8 h-8 text-cosmos-coral" />,
    title: "Guided Sleep",
    description: "Fall asleep peacefully with our calming sleep stories and gentle soundscapes designed for restful nights."
  },
  {
    icon: <Sun className="w-8 h-8 text-cosmos-coral" />,
    title: "Daily Mindfulness",
    description: "Short, effective mindfulness exercises to help you stay grounded and present throughout your day."
  },
  {
    icon: <Heart className="w-8 h-8 text-cosmos-coral" />,
    title: "Mood Tracking",
    description: "Understand your emotional patterns with our intuitive mood tracking and personalized insights."
  },
  {
    icon: <Brain className="w-8 h-8 text-cosmos-coral" />,
    title: "Cognitive Exercises",
    description: "Strengthen your mental resilience with science-backed cognitive behavioral exercises."
  },
  {
    icon: <CloudRain className="w-8 h-8 text-cosmos-coral" />,
    title: "Ambient Sounds",
    description: "Immerse yourself in peaceful environments with our library of ambient soundscapes."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-cosmos-coral" />,
    title: "Personalized Growth",
    description: "Receive tailored recommendations that evolve with your progress and mental health journey."
  }
];

// Create floating shapes for visual interest
const FloatingShape = ({ className, delay = 0, duration = 20 }: { className: string, delay?: number, duration?: number }) => {
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

const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cosmos-gradient opacity-50 z-0"></div>
      
      {/* Decorative elements */}
      <FloatingShape 
        className="w-64 h-64 rounded-full bg-cosmos-purple/20 blur-3xl top-20 -left-20 z-0" 
        duration={15}
      />
      <FloatingShape 
        className="w-96 h-96 rounded-full bg-cosmos-coral/10 blur-3xl bottom-20 -right-32 z-0" 
        delay={2}
        duration={18}
      />
      <FloatingShape 
        className="w-48 h-48 rounded-full bg-cosmos-lightCoral/10 blur-3xl top-1/2 left-1/4 z-0" 
        delay={1}
        duration={12}
      />
      
      <div className="cosmos-container relative z-10">
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
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
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-serif font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Collage-style visual element inspired by 21stCenturyDev's image */}
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
                    transition={{
                      repeat: Infinity,
                      repeatType: 'reverse',
                      duration: 8 + index,
                      ease: 'easeInOut',
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
      </div>
    </section>
  );
};

export default Features;
