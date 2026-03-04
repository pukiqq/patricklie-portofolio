import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import FeaturedProjects from '../components/FeaturedProjects';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <Contact />
    </div>
  );
}
