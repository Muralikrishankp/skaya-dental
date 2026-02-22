"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex flex-col justify-center items-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

      {/* Centered Content over Video */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 flex flex-col items-center text-center">
        {/* Massive Editorial Typography */}
        <div className="w-full flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sm uppercase tracking-[0.3em] font-medium text-white/80 mb-6"
          >
            The Art of Architecture
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-light text-6xl sm:text-7xl md:text-[7rem] lg:text-[8rem] leading-[0.9] text-white tracking-tight"
          >
            Dental <br />
            <span className="italic relative inline-block mt-2">
              Perfection.
              <span className="absolute -bottom-4 left-0 w-full h-[1px] bg-white/30" />
            </span>
          </motion.h1>
        </div>

        {/* Action Button & Subtext */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-col items-center text-center max-w-lg"
        >
          <p className="text-white/90 font-light text-lg lg:text-xl text-balance mb-10 leading-relaxed">
            Experience the intersection of advanced implantology and bespoke aesthetics.
          </p>
          
          <button className="group relative flex items-center justify-center w-32 h-32 rounded-full border border-white/20 bg-black/20 backdrop-blur-md hover:bg-white hover:text-black transition-colors duration-500 overflow-hidden">
            <span className="absolute inset-0 w-full h-full bg-white transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
            <span className="relative z-10 font-medium text-sm tracking-widest uppercase flex flex-col items-center gap-2">
              Explore
              <Plus size={16} className="transform group-hover:rotate-90 transition-transform duration-500" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
