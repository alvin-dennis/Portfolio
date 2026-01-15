import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MotionDiv } from '@/components/Framer';
import { experiences } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-[0.3em] text-primary">
            EXPERIENCE
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="w-8 h-0.5 bg-primary" />
          </div>
        </MotionDiv>
        <div className="relative">
          <MotionDiv
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top hidden md:block"
          />
          <MotionDiv
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-6 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top md:hidden"
          />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <MotionDiv
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
              >
                <MotionDiv
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                  className={`absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10`}
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.gradient} flex items-center justify-center shadow-lg shadow-primary/30`}
                  >
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <MotionDiv
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.gradient} -z-10`}
                  />
                </MotionDiv>

                <div
                  className={`w-full md:w-[calc(50%-40px)] ${index % 2 === 0
                      ? 'md:pr-8 md:text-right pl-20 md:pl-0'
                      : 'md:pl-8 md:text-left pl-20 md:pl-0'
                    }`}
                >
                  <MotionDiv whileHover={{ y: -5, scale: 1.02 }} className="group relative">
                    <Card className="relative overflow-hidden rounded-2xl border border-border p-6 hover:border-transparent transition-colors">
                      <CardHeader className="p-0 mb-4">
                        <MotionDiv
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 + index * 0.2 }}
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${exp.gradient} text-white text-xs font-medium`}
                        >
                          <Calendar className="w-3 h-3" />
                          {exp.duration}
                        </MotionDiv>
                        <CardTitle className="text-xl font-bold text-foreground mb-1">
                          {exp.role}
                        </CardTitle>
                        <p
                          className={`font-medium bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent mb-2`}
                        >
                          {exp.company}
                        </p>
                        <span
                          className={`inline-flex items-center gap-1 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                        >
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </CardHeader>

                      <CardContent className="p-0">
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {exp.description}
                        </p>
                        <div
                          className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                            }`}
                        >
                          {exp.achievements.map((achievement, i) => (
                            <MotionDiv
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 1 + i * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge
                                variant="outline"
                                className="px-3 py-1.5 text-xs font-medium rounded-full border border-primary/30 bg-primary/10 text-primary"
                              >
                                ✦ {achievement}
                              </Badge>
                            </MotionDiv>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </MotionDiv>
                </div>
                <div className="hidden md:block md:w-[calc(50%-40px)]" />
              </MotionDiv>
            ))}
          </div>
          <MotionDiv
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="absolute left-6 md:left-1/2 transform -translate-x-1/2 bottom-0"
          >
            <div className="w-4 h-4 rounded-full bg-primary/50 border-2 border-primary" />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};