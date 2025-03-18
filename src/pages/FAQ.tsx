import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Settings, Lock, CreditCard, Smartphone, MailOpen, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-cosmos-midnight text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-12">
          Frequently Asked Questions
        </h1>
        
        <div className="space-y-16">
          {/* General Questions Section */}
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
          
          {/* Features & Functionality Section */}
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
          
          {/* Accessibility & Privacy Section */}
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
          
          {/* Payments & Refunds Section */}
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
          
          {/* Feedback & Requests Section */}
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
          
          {/* Integration & Future Development Section */}
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
          
          {/* Contact & Support Section */}
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
          
          <p className="text-center text-white/70 mt-10">
            For any additional questions, reach out to us at{" "}
            <a href="mailto:contact@cosmosmentalhealth.com" className="text-cosmos-coral underline hover:text-cosmos-coral/80 transition-colors">
              contact@cosmosmentalhealth.com
            </a>
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;
