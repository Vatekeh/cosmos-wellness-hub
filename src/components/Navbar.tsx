
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 backdrop-blur-xl bg-cosmos-midnight/80' : 'py-6 bg-transparent'}`}>
      <div className="cosmos-container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Moon className="w-6 h-6 text-cosmos-coral absolute animate-pulse-slow" />
          </div>
          <span className="text-2xl font-serif font-semibold">Cosmos</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="cosmos-link text-white/90 hover:text-white">Features</a>
          <a href="#benefits" className="cosmos-link text-white/90 hover:text-white">Benefits</a>
          <a href="#testimonials" className="cosmos-link text-white/90 hover:text-white">Testimonials</a>
          <Link to="/pricing" className="cosmos-link text-white/90 hover:text-white">Pricing</Link>
          <a href="#download" className="cosmos-button-primary ml-2">Download App</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-cosmos-midnight z-40 flex flex-col animate-slide-down">
          <div className="py-8 px-4 flex flex-col gap-6 text-center">
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg py-3">Features</a>
            <a href="#benefits" onClick={() => setIsMobileMenuOpen(false)} className="text-lg py-3">Benefits</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-lg py-3">Testimonials</a>
            <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-lg py-3">Pricing</Link>
            <a href="#download" onClick={() => setIsMobileMenuOpen(false)} className="cosmos-button-primary mt-4 w-full flex justify-center">Download App</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
