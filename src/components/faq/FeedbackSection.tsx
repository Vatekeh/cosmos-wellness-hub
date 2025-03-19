
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageSquare } from "lucide-react";
import { FAQSectionProps } from "./types";

const FeedbackSection: React.FC<FAQSectionProps> = () => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <MessageSquare className="w-6 h-6 text-cosmos-coral" />
        <h2 className="text-2xl font-serif font-medium">Feedback & Requests</h2>
      </div>
      
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="feedback-response" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            Will I receive a response to my feedback?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            For general feedback, we may not respond to each submission individually. However, if you report a bug 
            or issue that requires troubleshooting, our support team may reach out for further details.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="feature-requests" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            How soon are feature requests implemented?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            We evaluate all feature requests and prioritize them based on user demand and feasibility. 
            While we can't guarantee immediate implementation, your suggestions help shape future updates.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="refund-feedback" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            Can I request a refund through the feedback form?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            No, for refund requests, please contact support@cosmosmentalhealth.com.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="stay-updated-feedback" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            How can I stay updated on new features and improvements?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            Follow us on our official channels and subscribe to our newsletter to receive updates on 
            upcoming changes and enhancements.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FeedbackSection;
