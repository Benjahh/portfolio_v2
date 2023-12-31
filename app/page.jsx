import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import SocialLinks from '@/components/SocialLinks';
import ProjectCard from '@/components/ProjectCard';
import { ProjectStateProvider } from '@/components/ProjectStateProvider';
import BottomBar from '@/components/BottomBar';

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full relative overflow-hidden bg-background">
      <Hero />
      <SocialLinks />
      <BottomBar />
      <ProjectStateProvider>
        <Projects />
        <ProjectCard />
      </ProjectStateProvider>
    </main>
  );
}
