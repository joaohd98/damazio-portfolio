import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function (setCursorLeft: (b: boolean) => void, setOverLink: (b: boolean) => void) {
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = document.querySelector<HTMLBodyElement>('body');
    const content = arrowRef.current?.parentElement as HTMLDivElement;
    if (!content || !body) {
      return undefined;
    }

    body.addEventListener('mousemove', onListenMouseMove(content));
    body.addEventListener('mouseenter', onListenMouseMove(content));
    body.addEventListener('mouseleave', onListenMouseMove(content));
    body.addEventListener('wheel', onListenMouseMove(content));
    content.addEventListener('click', onListenClick);

    return () => {
      body.removeEventListener('mousemove', onListenMouseMove(content));
      body.removeEventListener('mouseenter', onListenMouseMove(content));
      body.removeEventListener('mouseleave', onListenMouseMove(content));
      body.removeEventListener('wheel', onListenMouseMove(content));
      content.removeEventListener('click', onListenClick);
    };
  }, []);

  const onListenMouseMove = (content: HTMLDivElement) => (event: MouseEvent) => {
    const target = event.target as HTMLAnchorElement;

    setCursorLeft(event.clientX < window.innerWidth / 2);
    setOverLink(target.href !== undefined && target.onclick !== undefined);

    const isInsideContent = content.offsetTop < event.pageY && content.offsetTop + content.offsetHeight > event.pageY;
    if (isInsideContent) {
      const tl = gsap.timeline();
      tl.to(arrowRef.current, { left: event.clientX, top: event.clientY, duration: 0.05 });
      tl.set(arrowRef.current, { display: 'block' });
      return;
    }

    gsap.set(arrowRef.current, { display: 'none' });
  };

  const onListenClick = (event: MouseEvent) => {
    const target = event.target as HTMLAnchorElement;
    if (target.href || target.onclick) {
      return;
    }

    const isPointingToLeft = event.clientX < window.innerWidth / 2;
    const y = isPointingToLeft ? '-=700' : '+=700';
    gsap.to(window, { scrollTo: { y } });
  };

  return {
    arrowRef
  };
}
