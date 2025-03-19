
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GeneralQuestionsSection from "@/components/faq/GeneralQuestionsSection";
import FeaturesSection from "@/components/faq/FeaturesSection";
import PrivacySection from "@/components/faq/PrivacySection";
import PaymentsSection from "@/components/faq/PaymentsSection";
import FeedbackSection from "@/components/faq/FeedbackSection";
import IntegrationSection from "@/components/faq/IntegrationSection";
import ContactSection from "@/components/faq/ContactSection";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-cosmos-midnight text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-12">
          Frequently Asked Questions
        </h1>
        
        <div className="space-y-16">
          <GeneralQuestionsSection />
          <FeaturesSection />
          <PrivacySection />
          <PaymentsSection />
          <FeedbackSection />
          <IntegrationSection />
          <ContactSection />
          
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
