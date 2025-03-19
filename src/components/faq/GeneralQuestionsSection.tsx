
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { FAQSectionProps } from "./types";

const GeneralQuestionsSection: React.FC<FAQSectionProps> = () => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <HelpCircle className="w-6 h-6 text-cosmos-coral" />
        <h2 className="text-2xl font-serif font-medium">General Questions</h2>
      </div>
      
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="what-is-cosmos" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">What is Cosmos?</AccordionTrigger>
          <AccordionContent className="text-white/80">
            Cosmos is a mental health web application designed to provide AI-driven therapy support, 
            integrating Cognitive Behavioral Therapy (CBT) and psychoanalytic methods to offer 
            personalized mental health solutions.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="who-is-cosmos-for" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">Who is Cosmos for?</AccordionTrigger>
          <AccordionContent className="text-white/80">
            Cosmos is for individuals seeking accessible mental health support, including those looking 
            for self-guided therapy, emotional regulation techniques, and structured therapy exercises.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="how-different" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            How does Cosmos differ from traditional therapy?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            Cosmos provides on-demand, AI-powered mental health guidance, allowing users to engage in 
            structured therapy exercises anytime, anywhere. While it does not replace human therapists, 
            it serves as a complementary tool for mental well-being.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="replace-therapist" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            Can Cosmos replace a licensed therapist?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            No, Cosmos is not a replacement for a licensed therapist. While it offers guided therapy 
            exercises and AI-driven insights, it does not provide medical diagnoses or crisis intervention. 
            If you are experiencing a mental health emergency, please seek professional help or contact 
            emergency services.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default GeneralQuestionsSection;
