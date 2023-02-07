import useRefElements from '@/hooks/useRefElements';
import { useEffect } from 'react';
import gsap from 'gsap';

export default function () {
  const [textsRef, setTextsRef] = useRefElements<HTMLHeadingElement>();
  const [cursorsRef, setCursorsRef] = useRefElements<HTMLHeadingElement>();
  const [highlightsRef, setHighlightsRef] = useRefElements<HTMLSpanElement>();

  useEffect(() => {
    const tl = gsap.timeline();

    textsRef.current.forEach((currentText, index) => {
      const currentCursor = cursorsRef.current[index];
      const previousCursor = cursorsRef.current[index - 1];

      if (previousCursor) {
        tl.set(previousCursor, { display: 'none' });
      }

      tl.set(currentCursor, { display: 'block', delay: 0.2 * index });

      const letters = gsap.utils.selector(currentText)('span');
      letters.forEach(current => {
        tl.set(current, { display: 'inline-block', autoAlpha: 1, delay: 0.2 });
        tl.set(currentCursor, { left: '102%' });
      });
    });

    tl.call(() => {
      const currentCursor = cursorsRef.current.pop();
      if (!currentCursor) {
        return;
      }

      const tlCursor = gsap.timeline({ repeat: -1, duration: 1 });

      tlCursor.set(currentCursor, { display: 'none' }, 0);
      tlCursor.set(currentCursor, { display: 'block' }, 0.5);
    });

    tl.to(highlightsRef.current, { autoAlpha: 1, y: 0, stagger: 0.2 });
  }, []);

  return {
    setTextsRef,
    setCursorsRef,
    setHighlightsRef
  };
}
