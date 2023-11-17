import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import SocialLinks from '@/components/SocialLinks';

export default function Home() {
  return (
    <main className="flex min-h-screen relative  bg-background">
      <Hero />
      <Projects />
      <SocialLinks />
    </main>
  );
}
