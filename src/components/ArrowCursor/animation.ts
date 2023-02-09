import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function (onClick: () => void) {
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

  const onListenMouseMove = (content: HTMLDivElement) => (coors: MouseEvent) => {
    const isInsideContent = content.offsetTop < coors.pageY && content.offsetTop + content.offsetHeight > coors.pageY;

    if (isInsideContent) {
      const tl = gsap.timeline();
      tl.to(arrowRef.current, { left: coors.clientX, top: coors.clientY, duration: 0.05 });
      tl.set(arrowRef.current, { display: 'block' });
      return;
    }

    gsap.set(arrowRef.current, { display: 'none' });
  };

  const onListenClick = (coors: MouseEvent) => {
    const target = coors.target as HTMLAnchorElement;
    if (target.href || target.onclick) {
      return;
    }

    onClick();
  };

  return {
    arrowRef
  };
}
