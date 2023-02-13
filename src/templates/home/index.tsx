import Header from '@/templates/home/header';
import Intro from '@/templates/home/intro';
import Marquee from '@/templates/home/marquee';
import Projects from '@/templates/home/projects';
import Contact from '@/templates/home/contact';

export default function HomeTemplate() {
  return (
    <main>
      <Header />
      <Intro />
      <Marquee />
      <Projects />
      <Contact />
    </main>
  );
}
