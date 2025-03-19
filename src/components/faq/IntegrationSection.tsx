
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Smartphone } from "lucide-react";
import { FAQSectionProps } from "./types";

const IntegrationSection: React.FC<FAQSectionProps> = () => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <Smartphone className="w-6 h-6 text-cosmos-coral" />
        <h2 className="text-2xl font-serif font-medium">Integration & Future Development</h2>
      </div>
      
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="wearable" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            Will Cosmos integrate with wearable devices?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            Future updates aim to integrate wearable health devices to monitor stress levels, 
            sleep patterns, and heart rate variability for deeper mental health insights.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="professional" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            Does Cosmos support professional therapists?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            Cosmos is exploring ways to collaborate with licensed therapists, allowing them to 
            use the platform for patient engagement, progress tracking, and supplemental therapy exercises.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="whats-next" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            What's next for Cosmos?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            Upcoming features include mood-based AI recommendations, interactive therapy exercises, 
            voice-guided mindfulness sessions, and expanded multilingual support.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default IntegrationSection;
