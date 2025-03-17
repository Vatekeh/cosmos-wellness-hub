
import React from 'react';
import { Moon, Instagram, Twitter, Facebook, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-cosmos-gradient z-0"></div>
      
      <div className="cosmos-container relative z-10">
        {/* Top section with navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo column */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <Moon className="w-6 h-6 text-cosmos-coral" />
              </div>
              <span className="text-2xl font-serif font-semibold">Cosmos</span>
            </a>
            <p className="text-white/70 mb-6">
              Your personal mental wellness companion, guiding you through the cosmos of your mind.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Navigation columns */}
          <div>
            <h3 className="text-lg font-semibold mb-4">App</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a></li>
              <li><a href="#benefits" className="text-white/70 hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@cosmosapp.com" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@cosmosapp.com</span>
                </a>
              </li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Feedback</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Cosmos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
