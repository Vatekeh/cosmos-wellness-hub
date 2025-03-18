
import React from 'react';
import { Moon, Sun, Heart, Brain, CloudRain, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
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
  },
  {
    icon: <Moon className="w-8 h-8 text-cosmos-coral" />,
    title: "Guided Sleep",
    description: "Fall asleep peacefully with our calming sleep stories and gentle soundscapes designed for restful nights."
  },
  {
    icon: <Sun className="w-8 h-8 text-cosmos-coral" />,
    title: "Daily Mindfulness",
    description: "Short, effective mindfulness exercises to help you stay grounded and present throughout your day."
  }
];

const Features: React.FC = () => {
  // Only show first 4 features based on the image design
  const visibleFeatures = features.slice(0, 4);
  
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="bg-cosmos-midnight absolute inset-0 z-0"></div>
      
      {/* Stars background */}
      <div className="cosmos-container relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">
            Discover a universe of
            <span className="cosmos-gradient-text block">mental wellness tools</span>
          </h2>
        </div>
        
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {visibleFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#1A1433]/70 backdrop-blur-sm rounded-3xl p-8 border border-white/5"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#221F26] flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Feature Cards Collage */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-[500px] overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-5xl mx-auto">
              {/* Large center card */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-48 bg-white rounded-xl z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                animate={{ y: [5, -5], transition: { repeat: Infinity, repeatType: 'reverse', duration: 3 } }}
              >
                <div className="absolute top-6 left-6">
                  <Sparkles className="w-6 h-6 text-cosmos-coral" />
                </div>
              </motion.div>
              
              {/* Secondary cards */}
              <motion.div
                className="absolute top-[30%] right-[20%] w-48 h-40 bg-white rounded-xl z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.7 }}
                animate={{ y: [-5, 5], transition: { repeat: Infinity, repeatType: 'reverse', duration: 4 } }}
              >
                <div className="absolute top-6 left-6">
                  <Brain className="w-6 h-6 text-cosmos-coral" />
                </div>
              </motion.div>
              
              <motion.div
                className="absolute bottom-[30%] left-[25%] w-56 h-36 bg-white rounded-xl z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.9 }}
                animate={{ y: [7, -7], transition: { repeat: Infinity, repeatType: 'reverse', duration: 3.5 } }}
              >
                <div className="absolute top-6 left-6">
                  <Moon className="w-6 h-6 text-cosmos-coral" />
                </div>
              </motion.div>
              
              {/* Background cards */}
              <motion.div
                className="absolute top-[15%] left-[10%] w-40 h-32 bg-white rounded-xl opacity-70 z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.7, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 1.1 }}
              />
              
              <motion.div
                className="absolute bottom-[15%] right-[15%] w-44 h-36 bg-white rounded-xl opacity-70 z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.7, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 1.3 }}
              />
              
              {/* Center circle */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-cosmos-coral/40 rounded-full backdrop-blur-xl z-30 flex items-center justify-center"
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
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
