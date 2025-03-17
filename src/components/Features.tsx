
import React, { useEffect } from 'react';
import { Moon, Brain, Heart, Users, HeadsetIcon, Trophy, Sparkles } from 'lucide-react';

// Define the feature categories and their items
const featureCategories = [
  {
    icon: <Moon className="w-12 h-12 text-cosmos-coral" />,
    title: "Personalized Mindfulness",
    description: "Tailored meditation and mindfulness practices personalized to your needs.",
    items: [
      "AI-curated daily meditations",
      "Tailored breathing exercises",
      "Adaptive mindfulness reminders"
    ]
  },
  {
    icon: <Brain className="w-12 h-12 text-cosmos-coral" />,
    title: "Cognitive Behavioral Insights",
    description: "Evidence-based approaches to understand and improve your mental patterns.",
    items: [
      "Personalized strategies based on CBT",
      "Interactive exercises for anxiety and stress",
      "Thought journaling for clarity"
    ]
  },
  {
    icon: <Heart className="w-12 h-12 text-cosmos-coral" />,
    title: "Mood & Emotion Tracking",
    description: "Understand your emotional patterns with intuitive tracking tools.",
    items: [
      "Easy-to-use mood tracking tools",
      "Emotional trend analysis and insights",
      "Personalized wellness reports"
    ]
  },
  {
    icon: <Users className="w-12 h-12 text-cosmos-coral" />,
    title: "Community Support",
    description: "Connect with others on similar wellness journeys.",
    items: [
      "Interactive forums and support groups",
      "Connect with peers on similar journeys",
      "Share experiences and receive encouragement"
    ]
  },
  {
    icon: <HeadsetIcon className="w-12 h-12 text-cosmos-coral" />,
    title: "Professional Guidance",
    description: "Access expert help when you need it most.",
    items: [
      "Access to licensed mental health professionals",
      "Virtual therapy sessions and coaching",
      "Confidential, secure, HIPAA-compliant support"
    ]
  },
  {
    icon: <Trophy className="w-12 h-12 text-cosmos-coral" />,
    title: "Progress & Achievement",
    description: "Visualize your growth and celebrate your wellness milestones.",
    items: [
      "Track your mental wellness milestones",
      "Celebrate achievements visually",
      "Receive personalized encouragement"
    ]
  },
  {
    icon: <Sparkles className="w-12 h-12 text-cosmos-coral" />,
    title: "Holistic Wellness Integration",
    description: "A comprehensive approach that addresses all aspects of your wellbeing.",
    items: [
      "Integration of meditation, sleep, and emotional health",
      "Customized recommendations for your lifestyle",
      "Balance mind, body, and spirit connections"
    ]
  }
];

const Features: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scale-up');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cosmos-gradient opacity-50 z-0"></div>
      
      <div className="cosmos-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md mb-4">
            <span className="text-sm font-medium">Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">
            Discover a universe of
            <span className="cosmos-gradient-text block">mental wellness tools</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/80 mb-8">
            Cosmos combines ancient wisdom with modern psychology to provide a comprehensive 
            approach to mental health and personal growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCategories.map((category, index) => (
            <div 
              key={index}
              className="feature-card opacity-0 glass-panel p-8 flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold">{category.title}</h3>
              </div>
              
              <p className="text-white/70 mb-4">{category.description}</p>
              
              <ul className="space-y-2 text-white/80 mt-auto">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <span className="text-cosmos-coral text-lg leading-tight">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
