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
    body.addEventListener('wheel', onListenMouseMove(content));

    body.addEventListener('mouseleave', onListenMouseLeave);
    content.addEventListener('click', onListenClick);

    return () => {
      body.removeEventListener('mousemove', onListenMouseMove(content));
      body.removeEventListener('mouseenter', onListenMouseMove(content));
      body.removeEventListener('wheel', onListenMouseMove(content));

      body.removeEventListener('mouseleave', onListenMouseLeave);
      content.removeEventListener('click', onListenClick);
    };
  }, []);

  const onListenMouseMove = (content: HTMLDivElement) => (event: MouseEvent) => {
    setCursorLeft(isCursorInLeftPosition(event));
    setOverLink(isCursorOverLink(event));

    const isInsideContent = content.offsetTop < event.pageY && content.offsetTop + content.offsetHeight > event.pageY;
    if (isInsideContent) {
      const tl = gsap.timeline();
      tl.to(arrowRef.current, { left: event.clientX, top: event.clientY, duration: 0.05 });

      if (arrowRef.current?.style.display === 'none') {
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

    return target && target.href !== undefined && target.onclick !== undefined;
  };

  return {
    arrowRef
  };
}
