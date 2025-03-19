
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MailOpen } from "lucide-react";
import { FAQSectionProps } from "./types";

const ContactSection: React.FC<FAQSectionProps> = () => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <MailOpen className="w-6 h-6 text-cosmos-coral" />
        <h2 className="text-2xl font-serif font-medium">Contact & Support</h2>
      </div>
      
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="support" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            How can I get support for Cosmos?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            For support inquiries, contact our team at support@cosmosmentalhealth.com or visit 
            our Help Center within the app.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="updates" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            How can I stay updated on Cosmos developments?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            Follow us on our official channels and subscribe to our newsletter to receive updates 
            on new features, mental health research, and upcoming enhancements.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default ContactSection;
