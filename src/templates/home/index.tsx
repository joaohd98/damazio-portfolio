import Header from '@/templates/home/header';
import Intro from '@/templates/home/intro';
import Marquee from '@/templates/home/marquee';
import Projects from '@/templates/home/projects';
import Contact from '@/templates/home/contact';
import Menu from '@/templates/shared/menu';
import Preloading from '@/components/Preloading';

export default function HomeTemplate() {
  return (
    <main>
      <Menu />
      <Header />
      <Intro />
      <Marquee />
      <Projects />
      <Contact />
      <Preloading />
    </main>
  );
}
