import Header from '@/templates/home/header';
import Intro from '@/templates/home/intro';
import Marquee from '@/templates/home/marquee';
import Projects from '@/templates/home/projects';
import Contact from '@/templates/home/contact';
import Menu from '@/templates/shared/menu';

export default function HomeTemplate() {
  return (
    <main>
      <Menu />
      <Header />
      <Intro />
      <Marquee />
      <Projects />
      <Contact />
    </main>
  );
}
