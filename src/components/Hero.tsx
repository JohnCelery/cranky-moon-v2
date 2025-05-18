'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import StarField from './StarField'

export default function Hero() {
  const reduce = useReducedMotion()

  const cloudVariants = {
    animate: (speed: number) => ({
      x: ['-10%', '110%'],
      transition: {
        x: {
          repeat: Infinity,
          ease: 'linear',
          duration: speed,
        },
      },
    }),
  }

  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden bg-white text-black dark:bg-[#0d0c22] dark:text-white">
      <StarField />
      <div className="relative z-10 flex flex-col items-center gap-6 md:flex-row md:gap-8">
        <Image src="/moon.svg" alt="Cranky moon" width={256} height={256} className="h-40 w-40 md:h-56 md:w-56" priority />
        <p className="text-xl text-center font-light md:text-left">Whimsical goods & celestial musings.</p>
      </div>
      {!reduce && (
        <>
          <motion.div
            className="absolute -top-20 left-1/2 h-32 w-60 -translate-x-1/2 rounded-full bg-white/40 blur-md"
            variants={cloudVariants}
            custom={40}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-10 left-1/3 h-40 w-72 rounded-full bg-white/30 blur-md"
            variants={cloudVariants}
            custom={60}
            animate="animate"
          />
          <motion.div
            className="absolute top-1/4 right-0 h-24 w-48 rounded-full bg-white/50 blur-md"
            variants={cloudVariants}
            custom={50}
            animate="animate"
          />
        </>
      )}
    </main>
  )
}
