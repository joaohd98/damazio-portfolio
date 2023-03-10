import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function (setCursorLeft: (b: boolean) => void, setOverLink: (b: boolean) => void) {
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { body } = document;
    const content = arrowRef.current?.parentElement as HTMLDivElement;
    if (!content || !body) {
      return undefined;
    }

    body.addEventListener('mousemove', onListenMouseMove(content));
    body.addEventListener('mouseenter', onListenMouseMove(content));
    body.addEventListener('wheel', onListenMouseMove(content));

    const sections = [...document.querySelectorAll('section, header')];
    sections.forEach(section => {
      if (section.contains(content)) {
        return;
      }

      section.addEventListener('mouseenter', onListenMouseLeave);
    });

    content.addEventListener('mouseenter', onListenMouseMove(content, true));
    content.addEventListener('mouseleave', onListenMouseLeave);

    body.addEventListener('mouseleave', onListenMouseLeave);

    content.addEventListener('click', onListenClick);

    return () => {
      body.removeEventListener('mousemove', onListenMouseMove(content));
      body.removeEventListener('mouseenter', onListenMouseMove(content));
      body.removeEventListener('wheel', onListenMouseMove(content));

      content.removeEventListener('mouseleave', onListenMouseLeave);
      content.removeEventListener('mouseenter', onListenMouseMove(content, true));

      body.removeEventListener('mouseleave', onListenMouseLeave);

      content.removeEventListener('click', onListenClick);
    };
  }, []);

  const onListenMouseMove = (content: HTMLDivElement, isMouseEnter?: boolean) => (event: MouseEvent) => {
    setCursorLeft(isCursorInLeftPosition(event));
    setOverLink(isCursorOverLink(event));

    const isInsideContent = content.offsetTop < event.pageY && content.offsetTop + content.offsetHeight > event.pageY;
    if (isMouseEnter || isInsideContent) {
      const tl = gsap.timeline();
      tl.to(arrowRef.current, { left: event.clientX, top: event.clientY, duration: 0.05 });

      const display = arrowRef.current?.style.display;
      if (!display || display === 'none') {
        tl.set(arrowRef.current, { display: 'block' });
      }

      return;
    }

    gsap.set(arrowRef.current, { display: 'none' });
  };

  const onListenMouseLeave = () => {
    gsap.set(arrowRef.current, { display: 'none' });
  };

  const onListenClick = (event: MouseEvent) => {
    if (isCursorOverLink(event)) {
      return;
    }

    const y = isCursorInLeftPosition(event) ? '-=700' : '+=700';
    gsap.to(window, { scrollTo: { y } });
  };

  const isCursorInLeftPosition = (event: MouseEvent) => {
    return event.clientX < window.innerWidth / 2;
  };

  const isCursorOverLink = (event: MouseEvent) => {
    const target = document.elementFromPoint(event.clientX, event.clientY) as HTMLAnchorElement;

    if (!target) {
      return false;
    }

    if (target.href !== undefined && target.onclick !== undefined) {
      return true;
    }

    const parentTarget = target.parentElement as HTMLAnchorElement;
    return parentTarget && parentTarget.href !== undefined && parentTarget.onclick !== undefined;
  };

  return {
    arrowRef
  };
}
