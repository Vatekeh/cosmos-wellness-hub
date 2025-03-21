
import React, { useEffect } from 'react';
import StarField from '../components/StarField';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import ResearchSection from '../components/ResearchSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index: React.FC = () => {
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
        <Hero />
        <Features />
        <Benefits />
        <ResearchSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
