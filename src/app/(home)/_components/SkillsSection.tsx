"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const skills = [
    { icon: '🎨', name: 'UI/UX Design', level: 90 },
    { icon: '⚛️', name: 'React', level: 85 },
    { icon: '🔧', name: 'Node.js', level: 75 },
    { icon: '📱', name: 'Mobile Dev', level: 70 },
    { icon: '🐍', name: 'Python', level: 80 },
    { icon: '🎯', name: 'Figma', level: 95 },
    { icon: '💻', name: 'HTML/CSS', level: 90 },
    { icon: '🔌', name: 'IoT', level: 85 },
  ];

  // Orbital rotation animation
  useEffect(() => {
    if (!isInView || isPaused) return;
    
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.3) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, [isInView, isPaused]);

  // Calculate positions in a circle around center with rotation offset
  const getSkillPosition = (index: number, total: number) => {
    const baseAngle = (index * 360) / total - 90;
    const angle = baseAngle + rotation;
    const radius = 180;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return { x, y, angle: baseAngle };
  };

  return (
    <section id="skills" ref={ref} className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-[0.3em] text-foreground">
            SKILLS
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-4" />
          
          <p className="text-muted-foreground mt-8 max-w-xl mx-auto">
            Designing accessible, high-performing digital experiences
            across UI/UX, Frontend, and IoT systems.
          </p>
        </motion.div>

        {/* Orbital Skills Layout */}
        <div 
          className="relative mx-auto w-[400px] h-[400px] md:w-[500px] md:h-[500px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Orbit rings */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute inset-0 m-auto w-[360px] h-[360px] md:w-[400px] md:h-[400px] border border-primary/20 rounded-full"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 0.5, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute inset-0 m-auto w-[280px] h-[280px] md:w-[300px] md:h-[300px] border border-primary/10 rounded-full"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 m-auto w-[200px] h-[200px] md:w-[220px] md:h-[220px] border border-primary/5 rounded-full"
          />

          {/* SVG Lines connecting center to skills */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {skills.map((_, index) => {
              const pos = getSkillPosition(index, skills.length);
              
              return (
                <line
                  key={`line-${index}`}
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${pos.x}px)`}
                  y2={`calc(50% + ${pos.y}px)`}
                  stroke="url(#lineGradient)"
                  strokeWidth={hoveredSkill === index ? 2 : 1}
                  strokeDasharray="4 4"
                  opacity={hoveredSkill === index ? 1 : 0.4}
                  className="transition-opacity duration-300"
                />
              );
            })}
          </svg>

          {/* Central Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="absolute inset-0 m-auto w-24 h-24 md:w-28 md:h-28 z-20"
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="relative w-full h-full rounded-full bg-gradient-primary flex items-center justify-center glow-primary cursor-pointer"
            >
              <span className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">N</span>
              
              {/* Pulse effect */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-primary/30"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Orbiting Skill Icons */}
          {skills.map((skill, index) => {
            const pos = getSkillPosition(index, skills.length);
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                style={{
                  left: `calc(50% + ${pos.x}px)`,
                  top: `calc(50% + ${pos.y}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
                className="absolute z-10 cursor-pointer group"
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Skill Node */}
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.2 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    y: { duration: 2 + index * 0.2, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  {/* Glow behind icon */}
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Icon container */}
                  <div className={`
                    w-14 h-14 md:w-16 md:h-16 rounded-full 
                    bg-card border-2 border-border 
                    flex items-center justify-center
                    transition-all duration-300
                    group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20
                    ${hoveredSkill === index ? 'border-primary shadow-lg shadow-primary/30' : ''}
                  `}>
                    <span className="text-2xl md:text-3xl">{skill.icon}</span>
                  </div>

                  {/* Skill name tooltip */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: hoveredSkill === index ? 1 : 0, y: hoveredSkill === index ? 0 : 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap z-30"
                  >
                    <div className="bg-card border border-border rounded-lg px-3 py-1.5 shadow-lg">
                      <p className="text-xs font-medium text-foreground">{skill.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-16 h-1 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-primary rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-muted-foreground">{skill.level}%</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Ambient glow effect */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
