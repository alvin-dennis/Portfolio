import Image from 'next/image';
import { MotionDiv } from '@/components/Framer';
import { education } from '@/lib/data';

export default function Education() {
  return (
    <section id="education" className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-[0.3em] text-primary">
            EDUCATION
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="w-8 h-0.5 bg-primary" />
          </div>
        </MotionDiv>
        <div className="flex flex-col gap-6 items-center">
          {education.map((edu) => (
            <MotionDiv
              key={edu.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-6 bg-card border border-border rounded-xl p-6 max-w-md mx-auto hover:border-primary/50 transition-colors"
            >
              <MotionDiv
                whileHover={{ rotate: [0, -10, 10, 0] }}
                className="w-16 h-16 rounded-lg flex items-center justify-center bg-primary"
              >
                <Image
                  src={edu.icon}
                  alt={`${edu.institution} Icon`}
                  width={50}
                  height={50}
                  className="w-12 h-12 object-contain"
                />
              </MotionDiv>
              <div>
                <h3 className="text-xl font-semibold text-foreground">{edu.institution}</h3>
                <p className="text-muted-foreground">{edu.degree}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
