
import React from 'react';
import { PhoneCall } from 'lucide-react';

const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cosmos-gradient opacity-50 z-0"></div>
      
      <div className="cosmos-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-2">
              Crossing the uncanny valley of
              <span className="cosmos-gradient-text block">conversational voice</span>
            </h2>
            <div className="text-white/60 mb-4">February 27, 2025</div>
            <div className="text-white/80 italic mb-8">Cosmos AI Research Team</div>
          </div>

          <div className="prose prose-lg prose-invert max-w-none mb-12">
            <p className="text-lg">
              How do we know when someone truly understands us? It is rarely just our words—it is in the subtleties of voice: 
              the rising excitement, the thoughtful pause, the warm reassurance.
            </p>
            
            <p className="text-lg">
              Voice is our most intimate medium as humans, carrying layers of meaning through countless variations 
              in tone, pitch, rhythm, and emotion.
            </p>
            
            <p className="text-lg">
              Today's digital voice assistants lack essential qualities to make them truly useful. Without unlocking 
              the full power of voice, they cannot hope to effectively collaborate with us. A personal assistant who 
              speaks only in a neutral tone has difficulty finding a permanent place in our daily lives after the initial 
              novelty wears off.
            </p>
            
            <p className="text-lg">
              Over time this emotional flatness becomes more than just disappointing—it becomes exhausting.
            </p>

            <h3 className="text-2xl font-serif font-semibold mt-10 mb-4">Achieving voice presence</h3>
            
            <p className="text-lg">
              At Cosmos, our goal is to achieve "voice presence"—the magical quality that makes spoken interactions 
              feel real, understood, and valued. We are creating conversational partners that do not just process requests; 
              they engage in genuine dialogue that builds confidence and trust over time. In doing so, we hope to realize 
              the untapped potential of voice as the ultimate interface for instruction and understanding.
            </p>

            <h3 className="text-2xl font-serif font-semibold mt-10 mb-4">Key components</h3>
            
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg">
                <span className="font-medium">Emotional intelligence:</span> reading and responding to emotional contexts.
              </li>
              <li className="text-lg">
                <span className="font-medium">Conversational dynamics:</span> natural timing, pauses, interruptions and emphasis.
              </li>
              <li className="text-lg">
                <span className="font-medium">Contextual awareness:</span> adjusting tone and style to match the situation.
              </li>
              <li className="text-lg">
                <span className="font-medium">Consistent personality:</span> maintaining a coherent, reliable and appropriate presence.
              </li>
            </ul>

            <h3 className="text-2xl font-serif font-semibold mt-10 mb-4">We're not there yet</h3>
            
            <p className="text-lg">
              Building a digital companion with voice presence is not easy, but we are making steady progress on multiple fronts, 
              including personality, memory, expressivity and appropriateness. This demo is a showcase of some of our work in 
              conversational speech generation. The companions shown here have been optimized for friendliness and expressivity 
              to illustrate the potential of our approach.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl mt-12">
            <h3 className="text-2xl font-serif font-semibold text-center mb-10">Conversational voice demo</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#e8ecd9] rounded-2xl p-10 flex flex-col items-center justify-center min-h-[300px] text-cosmos-midnight">
                <PhoneCall className="w-10 h-10 text-[#6d794d] mb-4" />
                <div className="text-xl font-medium text-[#6d794d]">Maya</div>
              </div>
              
              <div className="bg-[#e8ecd9] rounded-2xl p-10 flex flex-col items-center justify-center min-h-[300px] text-cosmos-midnight">
                <PhoneCall className="w-10 h-10 text-[#6d794d] mb-4" />
                <div className="text-xl font-medium text-[#6d794d]">Miles</div>
              </div>
            </div>
            
            <div className="text-center mt-8 text-lg">Press to start a conversation</div>
            
            <div className="mt-8 text-sm text-white/60 space-y-2">
              <p>1. Microphone permission is required. 2. Conversations are recorded for quality review but not used for ML training and are deleted within 30 days. 3. By using this demo, you are agreeing to our Terms of Use and Privacy Policy. 4. We recommend using Chrome (Audio quality may be degraded in iOS/Safari 17.3).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
