import useRefElements from '@/hooks/useRefElements';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function () {
  const [nameLettersRef, setNameLettersRef] = useRefElements<HTMLSpanElement>();
  const [jobLettersRef, setJobLettersRef] = useRefElements<HTMLSpanElement>();
  const [highlightsRef, setHighlightsRef] = useRefElements<HTMLSpanElement>();
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const tlCursor = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      ease: 'none',
      paused: true
    });

    setTimeout(() => {
      const letters = [...nameLettersRef.current, ...jobLettersRef.current];
      letters.forEach(current => {
        if (!current) {
          return;
        }

        const { height, width } = current.getBoundingClientRect();
        const y = current.offsetTop;
        const x = current.offsetLeft + width + window.innerWidth * 0.02;

        tl.set(cursorRef.current, { height });

        tl.set(cursorRef.current, { x, y, delay: 0.15 });

        tl.set(current, { autoAlpha: 1 });
      });

      tl.to(highlightsRef.current, { autoAlpha: 1, y: 0, stagger: 0.3 });

      tlCursor.set(cursorRef.current, {
        opacity: 0
      });

      tlCursor.set(cursorRef.current, {
        opacity: 1,
        delay: 0.5
      });

      tl.add(tlCursor);
    }, 100);
  }, []);

  return {
    setNameLettersRef,
    setJobLettersRef,
    setHighlightsRef,
    cursorRef
  };
}
