"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import * as THREE from "three";

// The Interactive 3D Blob Component
function FluidShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 128, 128]} scale={1.8}>
      <MeshDistortMaterial
        color="#E3C69A"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.1}
        metalness={0.8}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </Sphere>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex flex-col justify-end pb-24 overflow-hidden bg-[#FAFAFA]">
      {/* 3D WebGL Background */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-multiply">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={1} color="#C5A880" />
          <Environment preset="studio" />
          <FluidShape />
        </Canvas>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-auto flex flex-col md:flex-row justify-between items-end">
        {/* Massive Editorial Typography */}
        <div className="flex-1">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sm uppercase tracking-[0.3em] font-semibold text-[#8C8C8C] mb-4 ml-1"
          >
            The Art of Architecture
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-light text-6xl sm:text-7xl md:text-[6rem] lg:text-[8rem] leading-[0.9] text-[#1C1C1C] tracking-tight"
          >
            Dental <br />
            <span className="italic relative inline-block">
              Perfection.
              <span className="absolute -bottom-4 left-0 w-full h-[1px] bg-[#1C1C1C]/20" />
            </span>
          </motion.h1>
        </div>

        {/* Action Button & Subtext */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-0 flex flex-col items-end text-right max-w-sm"
        >
          <p className="text-[#4A4A4A] font-light text-lg lg:text-xl text-balance mb-8">
            Experience the intersection of advanced implantology and bespoke aesthetics.
          </p>
          
          <button className="group relative flex items-center justify-center w-32 h-32 rounded-full border border-[#1C1C1C]/10 bg-white/50 backdrop-blur-md hover:bg-[#1C1C1C] hover:text-white transition-colors duration-500 overflow-hidden">
            <span className="absolute inset-0 w-full h-full bg-[#1C1C1C] transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
            <span className="relative z-10 font-medium text-sm tracking-widest uppercase flex flex-col items-center gap-2">
              Explore
              <Plus size={16} className="transform group-hover:rotate-90 transition-transform duration-500" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Decorative vertical lines down the sides indicating structured space */}
    </section>
  );
}
