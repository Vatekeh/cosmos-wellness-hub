
import React from 'react';
import { PhoneCall, MessageCircle, Brain, Book } from 'lucide-react';

const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cosmos-gradient opacity-50 z-0"></div>
      
      <div className="cosmos-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-2">
              The science of
              <span className="cosmos-gradient-text block">conversational AI journaling</span>
            </h2>
            <div className="text-white/60 mb-4">March 15, 2025</div>
            <div className="text-white/80 italic mb-8">Cosmos AI Research Team</div>
          </div>

          <div className="prose prose-lg prose-invert max-w-none mb-12">
            <p className="text-lg">
              Research shows that journaling is one of the most effective methods for processing emotions, 
              reducing stress, and improving mental clarity. However, maintaining a consistent journaling 
              practice has traditionally been challenging for many people.
            </p>
            
            <p className="text-lg">
              At Cosmos, we've developed a revolutionary conversational AI journaling system that combines 
              the benefits of traditional journaling with the engagement of a responsive AI companion that 
              understands your emotional patterns and personal growth journey.
            </p>
            
            <p className="text-lg">
              Our AI doesn't just passively record your thoughts—it actively engages with you, asking 
              meaningful questions, suggesting connections between entries, and guiding you toward insights 
              that might otherwise remain hidden.
            </p>

            <h3 className="text-2xl font-serif font-semibold mt-10 mb-4">The multi-modal journaling approach</h3>
            
            <p className="text-lg">
              Unlike traditional one-size-fits-all journals, Cosmos offers specialized journaling modes 
              designed to target different aspects of mental wellness:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg">
                <span className="font-medium">Gratitude Journal:</span> Research shows expressing gratitude can increase happiness by up to 25%.
              </li>
              <li className="text-lg">
                <span className="font-medium">Dream Journal:</span> Analyzing dream patterns creates deeper self-awareness and taps into subconscious processing.
              </li>
              <li className="text-lg">
                <span className="font-medium">Mindfulness Journal:</span> Records insights gained during meditation and encourages continued practice.
              </li>
              <li className="text-lg">
                <span className="font-medium">Relationship Journal:</span> Helps track social connections and emotional bonds, supporting relational health.
              </li>
            </ul>

            <h3 className="text-2xl font-serif font-semibold mt-10 mb-4">AI-powered insights</h3>
            
            <p className="text-lg">
              Our proprietary natural language processing system identifies emotional patterns and thematic connections 
              across your journal entries. These insights help you recognize recurring themes, track emotional growth, 
              and identify potential areas for personal development.
            </p>
            
            <p className="text-lg">
              All of your data is completely private and secure. Your journal entries are encrypted and only accessible 
              to you. The AI analysis happens locally on your device when possible, ensuring your most intimate thoughts 
              remain completely confidential.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl mt-12">
            <h3 className="text-2xl font-serif font-semibold text-center mb-10">Experience our AI journaling system</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#e8ecd9] rounded-2xl p-6 flex flex-col items-center justify-center text-cosmos-midnight">
                <MessageCircle className="w-10 h-10 text-[#6d794d] mb-4" />
                <div className="text-xl font-medium text-[#6d794d] mb-2">AI Companion</div>
                <p className="text-sm text-center text-[#6d794d]/80">Have meaningful conversations with your personal AI wellness guide</p>
              </div>
              
              <div className="bg-[#e8ecd9] rounded-2xl p-6 flex flex-col items-center justify-center text-cosmos-midnight">
                <Book className="w-10 h-10 text-[#6d794d] mb-4" />
                <div className="text-xl font-medium text-[#6d794d] mb-2">Multi-Mode Journals</div>
                <p className="text-sm text-center text-[#6d794d]/80">Specialized journals for different aspects of your wellness journey</p>
              </div>
              
              <div className="bg-[#e8ecd9] rounded-2xl p-6 flex flex-col items-center justify-center text-cosmos-midnight">
                <Brain className="w-10 h-10 text-[#6d794d] mb-4" />
                <div className="text-xl font-medium text-[#6d794d] mb-2">Emotional Insights</div>
                <p className="text-sm text-center text-[#6d794d]/80">AI-powered analysis of your emotional patterns and growth</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a href="/dashboard" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cosmos-coral text-white font-medium hover:bg-cosmos-coral/90 transition-colors">
                Try the demo
                <PhoneCall className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
