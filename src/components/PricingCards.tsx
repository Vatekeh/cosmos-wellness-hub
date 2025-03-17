
import React from 'react';
import { Check, X, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Begin your mental wellness journey",
    features: [
      { included: true, name: "Basic guided meditations" },
      { included: true, name: "Mood tracking" },
      { included: true, name: "3 cognitive exercises" },
      { included: false, name: "Personalized recommendations" },
      { included: false, name: "Advanced analytics" },
      { included: false, name: "Professional guidance" }
    ],
    buttonText: "Get Started Free",
    popular: false
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "monthly",
    description: "Enhanced features for deeper wellness",
    features: [
      { included: true, name: "All Free features" },
      { included: true, name: "Unlimited guided meditations" },
      { included: true, name: "Advanced mood analytics" },
      { included: true, name: "Personalized recommendations" },
      { included: true, name: "Sleep stories and sounds" },
      { included: false, name: "Professional guidance" }
    ],
    buttonText: "Start Premium",
    popular: true
  },
  {
    name: "Ultimate",
    price: "$19.99",
    period: "monthly",
    description: "Complete mental wellness experience",
    features: [
      { included: true, name: "All Premium features" },
      { included: true, name: "Professional guidance" },
      { included: true, name: "Monthly therapy sessions" },
      { included: true, name: "Priority support" },
      { included: true, name: "Exclusive wellness content" },
      { included: true, name: "Family account sharing" }
    ],
    buttonText: "Start Ultimate",
    popular: false
  }
];

const PricingCards: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-cosmos-gradient opacity-30 z-0"></div>
      
      <div className="cosmos-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="flex">
              <Card className={`
                glass-panel border-white/10 backdrop-blur-lg w-full flex flex-col transition-all duration-300 hover:translate-y-[-5px] text-white
                ${plan.popular ? 'border-cosmos-coral shadow-lg shadow-cosmos-coral/20 relative overflow-hidden' : ''}
              `}>
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-cosmos-coral text-white text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                      <Star className="h-3 w-3" /> Popular
                    </div>
                  </div>
                )}
                <CardHeader className="pb-0">
                  <CardTitle className="text-2xl font-serif text-white">{plan.name}</CardTitle>
                  <div className="flex items-end mt-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period && <span className="text-white/70 ml-1">/{plan.period}</span>}
                  </div>
                  <CardDescription className="text-white/70 mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="py-6 flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-cosmos-coral mr-2 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-white/40 mr-2 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "text-white/90" : "text-white/40"}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-cosmos-coral hover:bg-cosmos-coral/90' : 'bg-white/10 hover:bg-white/20'}`}
                  >
                    {plan.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
