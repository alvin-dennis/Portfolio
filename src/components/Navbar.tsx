"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Active section detection
      const sections = navItems.map(item => item.toLowerCase());
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.1, duration: 0.4 }
    })
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }
    },
    visible: { 
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }
    }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.08, duration: 0.3 }
    }),
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-background/80 backdrop-blur-xl border-b border-primary/10' 
          : 'py-5 bg-transparent'
      }`}
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -50, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-10 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
        />
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          />
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between relative">
        {/* Logo with Abstract Shape */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          {/* Abstract shapes around logo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-3 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-primary rounded-full" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-primary/60 rounded-full" />
            <div className="absolute top-1/2 left-0 w-1 h-1 bg-primary/40 rounded-full" />
          </motion.div>
          
          <div className="relative w-11 h-11 rounded-full bg-gradient-primary flex items-center justify-center glow-primary">
            <span className="font-heading font-bold text-primary-foreground text-lg">N</span>
          </div>
          
          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/30"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.a>

        {/* Desktop Nav Links with Active Indicator */}
        <div className="hidden md:flex items-center gap-1 bg-secondary/50 backdrop-blur-sm rounded-full px-2 py-1.5 border border-border/50">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                custom={index}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                className="relative px-4 py-2 text-sm transition-colors duration-300"
              >
                {/* Active Background */}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-gradient-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <span className={`relative z-10 ${isActive ? 'text-primary-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}>
                  {item}
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* CTA Button with Abstract Elements */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium relative overflow-hidden group"
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
          />
          <span className="relative">Hire Me</span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="relative"
          >
            →
          </motion.span>
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden relative w-11 h-11 rounded-full border border-border bg-secondary/50 backdrop-blur-sm flex items-center justify-center hover:border-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5 text-foreground" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5 text-foreground" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border/50"
          >
            <div className="flex flex-col items-center gap-2 py-8 px-6">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    custom={index}
                    variants={mobileLinkVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className={`w-full text-center py-3 text-lg transition-colors duration-300 border-b border-border/30 ${
                      isActive ? 'text-primary font-medium' : 'text-muted-foreground'
                    }`}
                  >
                    {item}
                    {isActive && (
                      <motion.span
                        layoutId="mobileActiveNav"
                        className="inline-block ml-2 w-2 h-2 rounded-full bg-primary"
                      />
                    )}
                  </motion.a>
                );
              })}
              
              {/* Mobile CTA */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-8 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium"
              >
                Hire Me →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
