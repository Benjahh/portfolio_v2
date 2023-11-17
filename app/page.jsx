import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import SocialLinks from '@/components/SocialLinks';
import ProjectCard from '@/components/ProjectCard';
import { ProjectProvider } from '@/utils/ProjectContext';

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full relative  bg-background">
      <Hero />
      <ProjectProvider>
        <Projects />
        <ProjectCard />
      </ProjectProvider>
      <SocialLinks />
    </main>
  );
}
