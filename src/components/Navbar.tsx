"use client";

import { useState, useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <div className={`font-bold text-2xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-navy' : 'text-white'}`}>
              <span className="flex items-center gap-2">
                {/* Placeholder for the Mandala Tooth Logo */}
                <div className="w-8 h-8 rounded-full bg-current opacity-20" />
                Skaya Dental
              </span>
            </div>
          </div>

          {/* Nav Links (Desktop) */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className={`font-medium transition-colors hover:text-gold ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}>Services</a>
            <a href="#about" className={`font-medium transition-colors hover:text-gold ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}>About Us</a>
            <a href="#reviews" className={`font-medium transition-colors hover:text-gold ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}>Reviews</a>
            
            {/* CTAs */}
            <div className="flex items-center gap-4 ml-4">
              <a href="tel:+1234567890" className={`flex items-center gap-2 font-semibold transition-colors hover:text-gold ${isScrolled ? 'text-navy' : 'text-white'}`}>
                <Phone size={18} />
                <span>(555) 123-4567</span>
              </a>
              <button className="bg-gold hover:bg-yellow-500 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
                <Calendar size={18} />
                Book Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
