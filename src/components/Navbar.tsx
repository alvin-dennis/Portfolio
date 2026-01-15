"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { navItems } from "@/lib/data";
import { MotionDiv, MotionHeader, MotionLink, MotionSpan } from "./Framer";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.toLowerCase());
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveSection(section);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.1, duration: 0.4 },
    }),
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.08, duration: 0.3 },
    }),
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  };

  return (
    <MotionHeader
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "py-3"
          : "py-5"
        }`}
    >

      <div className="relative max-w-6xl mx-auto px-6 flex items-center justify-between">
        <MotionLink
          href="/"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <div className="relative w-11 h-11 rounded-full bg-primary flex items-center justify-center">
            <Image 
              src="/logo.png"
              alt="Logo"
              width={44}
              height={44}
              className="rounded-full"
            />
          </div>
        </MotionLink>

        <div className="hidden md:flex items-center gap-1 bg-secondary/50 backdrop-blur-sm rounded-full px-2 py-1.5 border border-border/50">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <MotionLink
                key={item}
                href={`#${item.toLowerCase()}`}
                custom={index}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                className="relative px-4 py-2 text-sm"
              >
                {isActive && (
                  <MotionSpan
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
                <span
                  className={`relative z-10 ${isActive
                      ? "text-primary-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {item}
                </span>
              </MotionLink>
            );
          })}
        </div>

        <Button
          variant={"default"}
          asChild
          className="hidden md:flex relative overflow-hidden group"
        >
          <MotionLink
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative">Hire Me</span>
            <MotionSpan
              className="relative ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </MotionSpan>
          </MotionLink>
        </Button>

        <Button
          size="icon"
          variant="default"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <MotionDiv
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5" />
              </MotionDiv>
            ) : (
              <MotionDiv
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5" />
              </MotionDiv>
            )}
          </AnimatePresence>
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50"
          >
            <div className="flex flex-col items-center gap-2 py-8 px-6">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <MotionLink
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    custom={index}
                    variants={mobileLinkVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className={`w-full text-center py-3 text-lg border-b border-border/30 ${isActive
                        ? "text-primary font-medium"
                        : "text-muted-foreground"
                      }`}
                  >
                    {item}
                    {isActive && (
                      <MotionSpan
                        layoutId="mobileActiveNav"
                        className="inline-block ml-2 w-2 h-2 rounded-full bg-primary"
                      />
                    )}
                  </MotionLink>
                );
              })}
              <Button
                variant={"default"}
                asChild
                className="mt-4"
              >
                <MotionLink
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hire Me →
                </MotionLink>
              </Button>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </MotionHeader>
  );
};

