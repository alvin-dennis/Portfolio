import Navbar from '@/components/Navbar';
import HeroSection from '@/app/(home)/_components/HeroSection';
import AboutSection from '@/app/(home)/_components/AboutSection';
import ProjectsSection from '@/app/(home)/_components/ProjectsSection';
import SkillsSection from '@/app/(home)/_components/SkillsSection';
import EducationSection from '@/app/(home)/_components/EducationSection';
import WorkExperienceSection from '@/app/(home)/_components/WorkExperienceSection';
import ContactSection from '@/app/(home)/_components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <WorkExperienceSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground text-sm">
          © 2024 Arafa N. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
