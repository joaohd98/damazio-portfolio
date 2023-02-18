import Header from '@/templates/home/header';
import Intro from '@/templates/home/intro';
import Skills from '@/templates/home/skills';
import Marquee from '@/templates/home/marquee';
import Projects from '@/templates/home/projects';
import Contact from '@/templates/home/contact';
import Menu from '@/templates/shared/menu';

export default function HomeTemplate() {
  return (
    <main>
      <Menu />
      <Header />
      <Intro skills={<Skills />} />
      <Marquee />
      <Projects />
      <Contact />
    </main>
  );
}
