
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Lock } from "lucide-react";
import { FAQSectionProps } from "./types";

const PrivacySection: React.FC<FAQSectionProps> = () => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <Lock className="w-6 h-6 text-cosmos-coral" />
        <h2 className="text-2xl font-serif font-medium">Accessibility & Privacy</h2>
      </div>
      
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="free-to-use" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            Is Cosmos free to use?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            Cosmos offers a free basic version (with ads) with essential mental health features. 
            Premium plans unlock additional therapy modules, advanced insights, and personalized 
            AI recommendations.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="privacy" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            How does Cosmos protect my privacy?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            Cosmos prioritizes user privacy by using end-to-end encryption for all interactions 
            and strictly adhering to data protection regulations. User data is never shared 
            without explicit consent.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="anonymously" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            Can I use Cosmos anonymously?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            Yes, Cosmos allows users to engage with therapy tools without providing personal 
            details, ensuring a private and secure experience.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default PrivacySection;
