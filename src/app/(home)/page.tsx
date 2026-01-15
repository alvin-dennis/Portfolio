import Hero from '@/app/(home)/_components/Hero';
import About from '@/app/(home)/_components/About';
import Projects from '@/app/(home)/_components/Projects';
import Skills from '@/app/(home)/_components/Skills';
import Education from '@/app/(home)/_components/Education';
import Experience from '@/app/(home)/_components/Experience';
import Contact from '@/app/(home)/_components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Experience />
      <Contact />
    </div>
  );
};
