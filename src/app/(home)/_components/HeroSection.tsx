"use client"

import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent" />
      
      {/* Angular geometric decoration */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute left-0 top-1/4 w-32 h-64"
      >
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-2 h-32 bg-gradient-primary transform -rotate-12" />
          <div className="absolute top-24 left-4 w-20 h-2 bg-gradient-primary transform rotate-45" />
          <div className="absolute bottom-0 left-2 w-2 h-24 bg-gradient-primary transform rotate-12" />
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-heading text-6xl md:text-8xl font-bold tracking-wider"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gradient"
          >
            ARAFA
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-foreground ml-4"
          >
            N
          </motion.span>
        </motion.h1>
      </div>

      {/* Decorative corner element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute top-20 right-10"
      >
        <div className="w-16 h-16 border-t-2 border-r-2 border-primary/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
