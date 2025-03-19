
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Settings } from "lucide-react";
import { FAQSectionProps } from "./types";

const FeaturesSection: React.FC<FAQSectionProps> = () => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <Settings className="w-6 h-6 text-cosmos-coral" />
        <h2 className="text-2xl font-serif font-medium">Features & Functionality</h2>
      </div>
      
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="techniques" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            What mental health techniques does Cosmos use?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            Cosmos integrates evidence-based practices from Cognitive Behavioral Therapy (CBT), 
            psychoanalysis, guided meditation, and journaling techniques to help users manage 
            their mental well-being.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="personalized-plans" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            Does Cosmos support personalized therapy plans?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            Yes, Cosmos creates custom therapy plans based on user responses, progress tracking, 
            and AI-driven recommendations tailored to individual needs.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="track-progress" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            Can I track my progress on Cosmos?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            Yes, Cosmos provides a progress tracking dashboard that monitors emotional patterns, 
            therapy exercises completed, and mental well-being trends over time.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="with-therapist" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            Can I use Cosmos if I'm already seeing a therapist?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            Yes, Cosmos can be used alongside traditional therapy. Many users find it helpful to 
            supplement their therapy sessions with structured exercises, mindfulness tools, and 
            journaling features available on the platform.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FeaturesSection;
