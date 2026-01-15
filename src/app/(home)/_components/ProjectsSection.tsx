"use client"

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'HOME FOR YOU',
      description: 'Real estate platform with modern UI',
      tags: ['Web Design', 'UI/UX'],
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      mockupBg: 'from-orange-600/30 to-red-600/30',
    },
    {
      id: 2,
      title: 'Dashboard Pro',
      description: 'Analytics dashboard application',
      tags: ['Dashboard', 'React'],
      gradient: 'from-blue-500 via-purple-500 to-pink-500',
      mockupBg: 'from-blue-600/30 to-purple-600/30',
    },
    {
      id: 3,
      title: 'Portfolio Site',
      description: 'Creative personal portfolio',
      tags: ['Portfolio', 'Design'],
      gradient: 'from-green-500 via-teal-500 to-cyan-500',
      mockupBg: 'from-green-600/30 to-teal-600/30',
    },
    {
      id: 4,
      title: 'E-Commerce App',
      description: 'Modern shopping experience',
      tags: ['E-Commerce', 'Mobile'],
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      mockupBg: 'from-yellow-600/30 to-orange-600/30',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getSlideStyle = (index: number) => {
    const diff = index - currentIndex;
    const normalizedDiff = ((diff % projects.length) + projects.length) % projects.length;
    
    if (normalizedDiff === 0) {
      return { x: 0, scale: 1, z: 30, opacity: 1, rotateY: 0 };
    } else if (normalizedDiff === 1 || normalizedDiff === -projects.length + 1) {
      return { x: 280, scale: 0.8, z: 10, opacity: 0.7, rotateY: -15 };
    } else if (normalizedDiff === projects.length - 1 || normalizedDiff === -1) {
      return { x: -280, scale: 0.8, z: 10, opacity: 0.7, rotateY: 15 };
    }
    return { x: 0, scale: 0.6, z: -10, opacity: 0, rotateY: 0 };
  };

  return (
    <section id="projects" ref={ref} className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-[0.3em] text-foreground">
            PROJECTS
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-4" />
        </motion.div>

        {/* 3D Slider */}
        <div className="relative h-[400px] md:h-[450px] perspective-1000">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-secondary/80 backdrop-blur-sm border border-border flex items-center justify-center hover:border-primary transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-secondary/80 backdrop-blur-sm border border-border flex items-center justify-center hover:border-primary transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </motion.button>

          {/* Slides Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {projects.map((project, index) => {
              const style = getSlideStyle(index);
              const isActive = index === currentIndex;
              
              return (
                <motion.div
                  key={project.id}
                  animate={{
                    x: style.x,
                    scale: style.scale,
                    opacity: style.opacity,
                    rotateY: style.rotateY,
                    zIndex: style.z,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30,
                    mass: 1
                  }}
                  className="absolute w-[280px] md:w-[320px]"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div 
                    whileHover={isActive ? { y: -10 } : {}}
                    className={`relative bg-secondary rounded-2xl p-3 shadow-2xl ${isActive ? 'glow-primary' : ''}`}
                  >
                    {/* Gradient Border */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-20`} />
                    
                    {/* Device Frame */}
                    <div className="relative bg-card rounded-xl overflow-hidden">
                      {/* Screen Content */}
                      <div className={`aspect-[4/3] flex items-center justify-center relative bg-gradient-to-br ${project.mockupBg}`}>
                        {/* Mockup UI Elements */}
                        <div className="absolute inset-4">
                          {/* Header bar */}
                          <div className="h-6 bg-foreground/10 rounded-lg mb-3 flex items-center px-2 gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500/60" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                            <div className="w-2 h-2 rounded-full bg-green-500/60" />
                          </div>
                          
                          {/* Content */}
                          <div className="space-y-2">
                            <div className="h-8 bg-foreground/10 rounded-lg w-3/4" />
                            <div className="h-4 bg-foreground/5 rounded w-full" />
                            <div className="h-4 bg-foreground/5 rounded w-2/3" />
                            <div className="grid grid-cols-2 gap-2 mt-4">
                              <div className="h-12 bg-primary/20 rounded-lg" />
                              <div className="h-12 bg-primary/10 rounded-lg" />
                            </div>
                          </div>
                        </div>
                        
                        {/* Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
                      </div>
                      
                      {/* Project Info */}
                      <div className="p-4 bg-card">
                        <h3 className="font-heading text-lg font-bold text-foreground mb-1">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 text-xs bg-secondary rounded-full text-muted-foreground border border-border">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* View Project Button - Only on active */}
                    {isActive && (
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-primary rounded-full text-primary-foreground text-sm font-medium flex items-center gap-2 shadow-lg"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary w-6' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Project Tags */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {['Web Design', 'UI/UX', 'Dashboard', 'React', 'Portfolio', 'Mobile'].map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-1.5 text-sm border border-primary/30 rounded-full text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all cursor-pointer"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
