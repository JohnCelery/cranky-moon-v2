"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      {/* background pattern */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="Craft pattern background"
          fill
          className="object-cover"
          priority
        />
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70" />
      </div>
      <div className="relative z-10 p-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Whimsical Goods & Celestial Musings
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Handmade cross-stitch patterns & creative crafts
        </motion.p>
        <motion.a
          href="#patterns"
          className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-semibold"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Explore Patterns
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
