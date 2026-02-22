"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { id: 1, name: "Sarah J.", text: "The most calming dental experience I've ever had. Completely cured my anxiety.", rating: 5 },
  { id: 2, name: "Michael C.", text: "Incredible attention to detail. The 3D scan and implants were flawless.", rating: 5 },
  { id: 3, name: "Elena R.", text: "The clinic feels more like a wellness spa than a dentist's office. Highly recommend.", rating: 5 },
  { id: 4, name: "David T.", text: "My veneers changed my life. World-class team.", rating: 5 },
  { id: 5, name: "Jessica W.", text: "Absolutely stunning results. They truly care about aesthetics.", rating: 5 },
  { id: 6, name: "Robert K.", text: "Zero pain, perfect communication. The best in the city.", rating: 5 },
];

export default function Testimonials() {
  return (
    <section id="patient-stories" className="py-32 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-heading font-medium text-[#1C1C1C] tracking-tight mb-4">
          Proof in the <span className="italic text-[#C5A880]">results.</span>
        </h2>
        <p className="text-[#4A4A4A] font-light text-xl">Hundreds of flawless records.</p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <motion.div
          className="flex whitespace-nowrap gap-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Adjust speed
          }}
        >
          {/* Double array to create seamless loop */}
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="bg-white flex-none w-[350px] md:w-[450px] p-8 rounded-[2rem] border border-[#1C1C1C]/5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-[#C5A880] fill-[#C5A880]" size={20} />
                ))}
              </div>
              <p className="text-xl md:text-2xl font-light text-[#1C1C1C] text-wrap leading-relaxed mb-8">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1C1C1C] flex items-center justify-center font-body text-sm font-bold text-white uppercase tracking-widest">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-[#1C1C1C]">{review.name}</h4>
                  <p className="text-xs text-[#8C8C8C] uppercase tracking-[0.2em] font-medium mt-1">Verified Client</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient fades on the edges for the marquee */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

