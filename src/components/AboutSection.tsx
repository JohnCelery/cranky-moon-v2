"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">About Cranky Moon</h2>
          <p className="text-lg mb-4">
            I'm Matt, the crafter behind Cranky Moon. I create whimsical cross-stitch
            patterns inspired by the night sky and my love for the handmade. Each pattern is crafted with care and a dash of cosmic magic.
          </p>
          <p className="text-lg">
            Join me as I share my latest creations, tutorials, and celestial musings on the blog.
          </p>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/products/moon-stars.png"
            alt="Moon and stars cross stitch pattern"
            width={400}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
