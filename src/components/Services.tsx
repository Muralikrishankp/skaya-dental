"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, HeartPulse } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "General Dentistry",
    description: "Comprehensive care for the whole family, from routine cleanings to essential preventative treatments.",
    icon: <Shield className="text-gold mb-6" size={32} />,
    image: "https://images.unsplash.com/photo-1598256989800-fea5ce5146ce?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Cosmetic Procedures",
    description: "Transform your confidence with professional whitening, porcelain veneers, and complete smile makeovers.",
    icon: <Sparkles className="text-gold mb-6" size={32} />,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Specialized Care",
    description: "Expert restoration including dental implants, oral surgery, and advanced orthodontic solutions.",
    icon: <HeartPulse className="text-gold mb-6" size={32} />,
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-3 block">Excellence in Care</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Elevate Your Dental Experience</h2>
          <p className="text-slate-600 text-lg leading-relaxed text-balance">
            We believe that every patient deserves a personalized, stress-free approach to oral health. 
            Discover our comprehensive treatments designed around your comfort.
          </p>
        </div>

        {/* Concierge Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              key={service.id} 
              className="group relative rounded-2xl overflow-hidden bg-light shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
            >
              {/* Image Container with Scale Effect */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Container */}
              <div className="p-8 flex-grow flex flex-col relative bg-white">
                <div className="absolute -top-12 left-8 bg-white p-4 rounded-xl shadow-lg z-20">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy mt-4 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                {/* Explore Link */}
                <div className="flex items-center text-gold font-semibold uppercase tracking-wide text-sm mt-auto group-hover:text-navy transition-colors">
                  <span>Explore Treatments</span>
                  <ArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform" size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
