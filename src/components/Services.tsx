"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

const services = [
  {
    id: 1,
    title: "Cosmetic Design",
    description: "Porcelain veneers and complete smile makeovers crafted to absolute perfection.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
    align: "left"
  },
  {
    id: 2,
    title: "Surgical Implants",
    description: "Precision restorative foundations using advanced 3D anatomical scanning.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    align: "right"
  },
  {
    id: 3,
    title: "Orthodontic Aligners",
    description: "Invisible and seamless structural correction for a balanced aesthetic.",
    image: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?q=80&w=800&auto=format&fit=crop",
    align: "left"
  },
];

export default function Services() {
  return (
    <section id="treatments" className="py-32 bg-[#F0EAE1] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="mb-32 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-heading font-light text-[#1C1C1C] tracking-tight mb-8"
          >
            Capabilities designed <br className="hidden md:block"/> for <span className="italic text-[#C5A880]">excellence.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#4A4A4A] text-xl max-w-md font-light leading-relaxed"
          >
            We don't just fix teeth; we architect smiles. Discover our suite of high-end treatments tailored to your unique anatomical structure.
          </motion.p>
        </div>

        {/* Floating Editorial Showcase */}
        <div className="space-y-32 md:space-y-48">
          {services.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={clsx(
                "flex flex-col md:flex-row gap-12 md:gap-24 items-center",
                item.align === "right" ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Image Block */}
              <div className="w-full md:w-1/2 relative group overflow-hidden">
                <div className="aspect-[4/5] w-full max-w-md mx-auto relative overflow-hidden bg-[#1C1C1C]/5">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src={item.image} 
                    alt={item.title}
                    className="object-cover w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Text Block */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-[#8C8C8C] text-sm tracking-[0.2em] uppercase mb-4 font-semibold">
                  0{item.id}
                </span>
                <h3 className="text-4xl md:text-5xl font-heading font-medium text-[#1C1C1C] mb-6">
                  {item.title}
                </h3>
                <p className="text-[#4A4A4A] text-lg font-light max-w-sm mb-12">
                  {item.description}
                </p>
                
                <a href="#book" className="group inline-flex items-center gap-3 text-[#1C1C1C] font-medium tracking-wide uppercase text-sm">
                  <span className="relative overflow-hidden">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">Learn More</span>
                    <span className="absolute inset-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-[#C5A880]">Learn More</span>
                  </span>
                  <ArrowUpRight size={16} className="text-[#C5A880] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
