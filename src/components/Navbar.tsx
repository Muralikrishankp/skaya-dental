"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import clsx from "clsx";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-[#1C1C1C]/10 py-3 shadow-sm" 
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        
        {/* Brand */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10 overflow-hidden rounded-full shadow-sm group-hover:scale-105 transition-transform duration-300">
            <Image src="/logo.png" alt="Skaya Dental Logo" fill className="object-cover" />
          </div>
          <span className="font-heading font-bold text-xl md:text-2xl tracking-widest uppercase text-[#1C1C1C]">
            Skaya
          </span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-12 font-body text-sm font-light tracking-wide text-[#4A4A4A]">
          {["Treatments", "Our Clinic", "Patient Stories"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`} 
              className="relative overflow-hidden group hover:text-[#1C1C1C] transition-colors"
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#1C1C1C] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <button className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#1C1C1C]/20 text-[#1C1C1C] font-medium text-xs tracking-widest uppercase hover:bg-[#1C1C1C] hover:text-white transition-all duration-300">
          Book Visit
          <Plus size={14} />
        </button>
      </div>
    </motion.header>
  );
}
