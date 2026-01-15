"use client"

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MotionDiv } from '@/components/Framer';
import { projects } from '@/lib/data';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
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
    <section id="projects" className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-[0.3em] text-primary">
            PROJECTS
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="w-8 h-0.5 bg-primary" />
          </div>
        </MotionDiv>

        <div className="relative h-[400px] md:h-[450px] perspective-1000">
          <MotionDiv
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-40"
          >
            <Button
              size="icon"
              variant="default"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </Button>
          </MotionDiv>
          <MotionDiv
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-40"
          >
            <Button
              size="icon"
              variant="default"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </Button>
          </MotionDiv>
          <div className="relative w-full h-full flex items-center justify-center">
            {projects.map((project, index) => {
              const style = getSlideStyle(index);
              const isActive = index === currentIndex;

              return (
                <MotionDiv
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
                    mass: 1,
                  }}
                  className="absolute w-[280px] md:w-[320px]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <MotionDiv whileHover={isActive ? { y: -10 } : {}}>
                    <Card className="relative overflow-hidden rounded-2xl bg-secondary shadow-2xl border-border">
                      <CardHeader className="relative p-0">
                        <div
                          className={`relative aspect-[4/3] flex items-center justify-center bg-gradient-to-br ${project.mockupBg}`}
                        >
                          <div className="absolute inset-4 space-y-2">
                            <div className="h-8 bg-foreground/10 rounded-lg w-3/4" />
                            <div className="h-4 bg-foreground/5 rounded w-full" />
                            <div className="h-4 bg-foreground/5 rounded w-2/3" />
                            <div className="grid grid-cols-2 gap-2 mt-4">
                              <div className="h-12 bg-primary/20 rounded-lg" />
                              <div className="h-12 bg-primary/10 rounded-lg" />
                            </div>
                          </div>
                          {isActive && (
                            <MotionDiv
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10"
                            >
                              <Button className="rounded-full flex items-center gap-2 shadow-lg">
                                <span>View Project</span>
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            </MotionDiv>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <CardTitle className="text-lg font-bold mb-1">
                          {project.title}
                        </CardTitle>

                        <CardDescription className="text-sm mb-3">
                          {project.description}
                        </CardDescription>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant={"outline"}
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </MotionDiv>
                </MotionDiv>
              );
            })}
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => {
              const isActive = index === currentIndex;
              return (
                <MotionDiv
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  className="flex items-center"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full p-0 transition-all ${isActive
                      ? "w-6 bg-primary hover:bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                  />
                </MotionDiv>
              );
            })}
          </div>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {['Web Design', 'UI/UX', 'Dashboard', 'React', 'Portfolio', 'Mobile'].map((tag, index) => (
            <MotionDiv
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="cursor-pointer"
            >
              <Badge
                variant="outline"
                className="text-sm"
              >
                {tag}
              </Badge>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
};
