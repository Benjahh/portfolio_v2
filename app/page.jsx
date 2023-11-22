import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import SocialLinks from '@/components/SocialLinks';
import ProjectCard from '@/components/ProjectCard';
import { ProjectHoveringProvider } from '@/components/ProjectHoveringProvider';

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full relative overflow-hidden bg-background">
      <Hero />
      <ProjectHoveringProvider>
        <Projects />
        <ProjectCard />
      </ProjectHoveringProvider>
      <SocialLinks />
    </main>
  );
}
