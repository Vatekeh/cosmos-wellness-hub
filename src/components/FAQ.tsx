
import React from 'react';

// FAQ data
const faqItems = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and Apple Pay. All payments are securely processed and your information is never stored on our servers."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period, after which it won't renew."
  },
  {
    question: "Is there a free trial for Premium or Ultimate plans?",
    answer: "Yes, we offer a 14-day free trial for our Premium plan and a 7-day free trial for our Ultimate plan. No credit card required for the trial period."
  },
  {
    question: "What happens to my data if I downgrade my plan?",
    answer: "Your historical data remains intact when downgrading. However, you'll lose access to premium features and analytics associated with the higher tier plan."
  },
  {
    question: "Do you offer discounts for annual subscriptions?",
    answer: "Yes, we offer a 20% discount when you choose annual billing for both Premium and Ultimate plans."
  },
  {
    question: "Is there a family or group plan available?",
    answer: "The Ultimate plan includes family sharing for up to 5 family members. For larger groups or organizations, please contact our support team for custom pricing."
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 relative overflow-hidden">
      <div className="cosmos-container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md mb-4">
            <span className="text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Frequently Asked <span className="cosmos-gradient-text">Questions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/70">
            Find answers to common questions about our pricing plans and services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="glass-panel p-6">
                <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                <p className="text-white/70">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
