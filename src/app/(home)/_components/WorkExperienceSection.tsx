"use client"

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const WorkExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      id: 1,
      role: 'UI/UX Design Intern',
      company: 'TheNextLeap',
      location: 'Remote',
      duration: '2023 - Present',
      description: 'Designed user interfaces and experiences for web applications. Collaborated with cross-functional teams to deliver pixel-perfect designs.',
      achievements: ['15+ UI Designs', '40% UX Improvement', 'Design Sprints'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 2,
      role: 'Content Creation Lead',
      company: 'Freelance',
      location: 'Remote',
      duration: '2022 - 2023',
      description: 'Created and coordinated content across multiple platforms. Developed creative strategies for brand engagement.',
      achievements: ['10+ Projects', '200% Growth', 'Team Building'],
      gradient: 'from-blue-500 to-purple-500',
    },
  ];

  return (
    <section ref={ref} className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-[0.3em] text-foreground">
            EXPERIENCE
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top hidden md:block"
          />
          
          {/* Mobile Timeline Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-6 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top md:hidden"
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Timeline Node */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                  className={`absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10`}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.gradient} flex items-center justify-center shadow-lg shadow-primary/30`}>
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  {/* Pulse Effect */}
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.gradient} -z-10`}
                  />
                </motion.div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-40px)] ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right pl-20 md:pl-0' : 'md:pl-8 md:text-left pl-20 md:pl-0'
                }`}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group relative"
                  >
                    {/* Gradient Border Effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${exp.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`} />
                    
                    <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-transparent transition-colors">
                      {/* Duration Badge */}
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.2 }}
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${exp.gradient} text-white text-xs font-medium mb-4`}
                      >
                        <Calendar className="w-3 h-3" />
                        {exp.duration}
                      </motion.div>

                      {/* Role & Company */}
                      <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                      <p className={`font-medium bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent mb-2`}>
                        {exp.company}
                      </p>

                      {/* Location */}
                      <span className={`inline-flex items-center gap-1 text-sm text-muted-foreground mb-4 ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}>
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        {exp.achievements.map((achievement, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 1 + i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className={`px-3 py-1.5 text-xs font-medium rounded-full border border-primary/30 bg-primary/10 text-primary`}
                          >
                            ✦ {achievement}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-40px)]" />
              </motion.div>
            ))}
          </div>

          {/* Timeline End Node */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="absolute left-6 md:left-1/2 transform -translate-x-1/2 bottom-0"
          >
            <div className="w-4 h-4 rounded-full bg-primary/50 border-2 border-primary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
