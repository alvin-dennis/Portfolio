import { MotionDiv, MotionH2, MotionP } from '@/components/Framer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <MotionH2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-wider text-primary mb-4"
        >
          Let's Connect
          <div className="flex items-center justify-center gap-2 mt-6 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="w-8 h-0.5 bg-primary" />
          </div>
        </MotionH2>
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-foreground mb-12"
        >
          Feel free to connect for collaborations and exciting IoT projects.
        </MotionP>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((social, index) => (
            <MotionDiv
              key={social.label} 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center"
            >
              <Link href={social.href} target="_blank" rel="noopener noreferrer">
                <Button
                  variant={"default"}
                >
                  <social.icon className="w-8 h-8 text-foreground" />
                </Button>
              </Link>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
};
