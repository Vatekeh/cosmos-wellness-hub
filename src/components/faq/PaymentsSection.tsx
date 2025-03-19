
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CreditCard } from "lucide-react";
import { FAQSectionProps } from "./types";

const PaymentsSection: React.FC<FAQSectionProps> = () => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <CreditCard className="w-6 h-6 text-cosmos-coral" />
        <h2 className="text-2xl font-serif font-medium">Payments & Refunds</h2>
      </div>
      
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="cost" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            How much does Cosmos cost?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            Cosmos offers a free basic version, but premium plans are available with additional 
            features such as personalized therapy insights, advanced tracking tools, and exclusive 
            guided therapy exercises. Pricing varies based on the selected plan.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="payment-methods" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            What payment methods does Cosmos accept?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            Cosmos accepts major credit cards, PayPal, and other secure online payment methods. 
            Payment options may vary by region.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="cancel" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            Can I cancel my subscription?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            Yes, you can cancel your subscription at any time. Your subscription will remain active 
            until the end of the current billing cycle, and you will not be charged for the next cycle.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="refunds" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            Does Cosmos offer refunds?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            Refunds are generally not provided after a subscription charge has been processed. 
            However, if you experience technical issues or have concerns, please contact our 
            support team at support@cosmosmentalhealth.com, and we will review refund requests 
            on a case-by-case basis.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="switch-plans" className="border-b border-white/10">
          <AccordionTrigger className="text-lg font-medium py-4">
            Can I switch between plans?
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            Yes, you can upgrade or downgrade your subscription plan at any time. Changes to your 
            plan will take effect at the beginning of the next billing cycle.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default PaymentsSection;
