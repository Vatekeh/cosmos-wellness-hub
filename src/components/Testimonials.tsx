
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="cosmos-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Discover how Cosmos has transformed the lives of our community members.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Cosmos Testimonial */}
          <Card className="bg-cosmos-deep-space/60 border-cosmos-stardust backdrop-blur-lg">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 rounded-full bg-cosmos-nebula mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl">Cosmos</h3>
                  <p className="text-cosmos-stardust">Software Engineer</p>
                </div>
              </div>
              <p className="text-white/90 italic">
                "Since I started using this app, my sleep patterns have improved dramatically. 
                The guided meditations help me unwind after stressful workdays, and the journal 
                feature lets me track my progress over time. It's become an essential part of my 
                mental wellness routine."
              </p>
            </CardContent>
          </Card>
          
          {/* Wanda Testimonial */}
          <Card className="bg-cosmos-deep-space/60 border-cosmos-stardust backdrop-blur-lg">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 rounded-full bg-cosmos-aurora mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl">Wanda</h3>
                  <p className="text-cosmos-stardust">Healthcare Professional</p>
                </div>
              </div>
              <p className="text-white/90 italic">
                "As someone who works in healthcare, I recommend this app to my patients dealing 
                with anxiety. The breathing exercises are particularly effective during high-stress 
                moments. I've seen firsthand how consistent use leads to meaningful improvements in 
                mental wellbeing."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
