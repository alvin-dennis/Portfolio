"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  // You can place this above your component or in a separate file and import it
  const workSamples = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1581092333211-5a45e9b6b6d5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1537432376769-00a9c9a7a4e3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
  ];


  return (
    <section id="about" ref={ref} className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-widest">
            <span className="text-gradient">A</span>
            <span className="text-foreground">BOUT</span>
            <span className="inline-block w-3 h-3 rounded-full bg-primary ml-2 animate-pulse" />
          </h2>
          
          <div className="flex items-center justify-center gap-2 mt-6 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="w-8 h-0.5 bg-primary" />
          </div>
          
          <h3 className="text-xl md:text-2xl font-medium text-foreground mb-6">
            Let me to Introduce myself
          </h3>
        </motion.div>

        {/* Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I'm a multidisciplinary creator specializing in{' '}
            <span className="text-primary">UI/UX designer, Frontend developer, and IoT Innovator</span>.
            I blend artistic flair with technical expertise and express ideas through motion and copy, blending
            creativity with technology.
          </p>
        </motion.div>

        {/* Work samples grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-3 gap-4 max-w-lg mx-auto"
        >
          {workSamples.map((sample) => (
            <motion.div
              key={sample.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer border border-border"
            >
              <img 
                src={sample.image} 
                alt="Work sample" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
