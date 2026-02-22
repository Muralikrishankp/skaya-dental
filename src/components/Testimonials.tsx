"use client";

import { useEffect, useState } from 'react';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "The most calming dental experience I've ever had. From the ambiance to the gentle care, Skaya Dental has completely cured my anxiety.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    text: "Incredible attention to detail. Dr. Skaya took the time to explain every step of my implant procedure. The results are flawless.",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    text: "I booked online and was seen exactly on time. The clinic feels more like a wellness spa than a dentist's office. Highly recommend.",
    rating: 5
  },
  {
    id: 4,
    name: "David T.",
    text: "My veneers changed my life. The team here is truly world-class, professional, and entirely focused on patient comfort.",
    rating: 5
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-navy-dark relative overflow-hidden text-white">
      {/* Background Decor */}
      <div className="absolute opacity-10 top-0 left-0 w-full h-full pointer-events-none">
        <Quote size={400} className="absolute -top-20 -left-20 text-white transform -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-3 block">Patient Stories</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Trusted by Our Community</h2>
        </div>

        {/* Carousel Area */}
        <div className="relative max-w-4xl mx-auto min-h-[300px] flex items-center justify-center">
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out flex flex-col items-center text-center ${
                index === activeIndex 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : index < activeIndex 
                    ? 'opacity-0 -translate-x-full scale-95' 
                    : 'opacity-0 translate-x-full scale-95'
              }`}
            >
              <div className="flex gap-1 mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-gold fill-current" size={24} />
                ))}
              </div>
              
              <blockquote className="text-2xl md:text-4xl font-light leading-relaxed mb-8 flex-grow">
                "{review.text}"
              </blockquote>
              
              <div className="mt-auto">
                <p className="font-bold text-lg tracking-wide">{review.name}</p>
                <span className="text-white/60 text-sm uppercase">Verified Patient</span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {reviews.map((_, index) => (
            <button 
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ease-in-out ${
                index === activeIndex ? 'w-10 bg-gold' : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
