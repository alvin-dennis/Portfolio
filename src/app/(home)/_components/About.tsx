import { MotionDiv } from '@/components/Framer';
import Image from 'next/image';
import { about } from '@/lib/data';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-widest">
            <span className="text-primary">ABOUT</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="w-8 h-0.5 bg-primary" />
          </div>

          <h3 className="text-xl md:text-2xl font-medium text-foreground mb-6">
            Let me introduce myself
          </h3>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <p className="text-foreground leading-relaxed max-w-2xl mx-auto">
            {about.description.split(/(UI\/UX designer|Frontend developer|IoT Innovator|comics|logo design)/g).map((part, i) =>
              ['UI/UX designer', 'Frontend developer', 'IoT Innovator', 'comics', 'logo design'].includes(part) ? (
                <span key={i} className="text-primary">{part}</span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </p>
        </MotionDiv>
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 gap-4 max-w-lg mx-auto"
        >
          {about.works.map((sample) => (
            <MotionDiv
              key={sample.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer border-2 border-primary"
            >
              <Image
                src={sample.image}
                alt={`Work sample ${sample.id}`}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
