
import React, { useEffect } from 'react';
import StarField from '../components/StarField';
import Navbar from '../components/Navbar';
import PricingCards from '../components/PricingCards';
import FAQ from '../components/FAQ';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Pricing: React.FC = () => {
  useEffect(() => {
    // Smooth scroll handling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const target = document.querySelector(href);
        if (!target) return;
        
        window.scrollTo({
          top: (target as HTMLElement).offsetTop,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Star Field */}
      <StarField />
      
      {/* Page Content */}
      <Navbar />
      <main>
        <section className="pt-32 pb-16 relative">
          <div className="cosmos-container text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md mb-4">
              <span className="text-sm font-medium">Pricing Plans</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6">
              Choose your <span className="cosmos-gradient-text">cosmic journey</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-white/80 mb-8">
              Find the perfect plan to support your mental wellness and personal growth with Cosmos.
            </p>
          </div>
        </section>
        
        <PricingCards />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
