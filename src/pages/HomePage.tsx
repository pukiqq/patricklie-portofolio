import Hero from '../components/Hero';
import Skills from '../components/Skills';
import FeaturedProjects from '../components/FeaturedProjects';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </div>
  );
}
