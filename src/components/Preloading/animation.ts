import useRefElements from '@/hooks/useRefElements';
import { useRef } from 'react';
import gsap from 'gsap';

export default function (size: number) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rainsRef, setRainsRef] = useRefElements<HTMLDivElement>();
  const tlRain = useRef(gsap.timeline());

  const changeVisibility = (isVisible: boolean) => {
    const tl = gsap.timeline();

    if (isVisible) {
      tl.call(() => rainAnimated());
      tl.set(containerRef.current, { display: 'flex' });
      tl.to(containerRef.current, { opacity: 1 });
      tl.set('html', { overflow: 'hidden' });
      return;
    }

    tl.to(containerRef.current, { opacity: 0 });
    tl.set(containerRef.current, { display: 'none' });
    tl.set('html', { clearProps: true });

    tlRain.current.progress(100);
    tlRain.current.kill();
  };

  const rainAnimated = (index = 0) => {
    tlRain.current = gsap.timeline();

    const current = rainsRef.current[index];
    const rainsDrop = gsap.utils.selector(current)('span');
    const rainsPaddle = gsap.utils.selector(current)('div');

    tlRain.current.to(rainsDrop[0], { opacity: 1, marginTop: 0, duration: 0.8 });
    tlRain.current.to(rainsDrop[1], { opacity: 0.4, marginTop: 0, duration: 0.8 }, '<');
    tlRain.current.to(
      rainsDrop,
      {
        scaleY: 0,
        duration: 0.4,
        onStart: () => rainAnimated(index === size - 1 ? 0 : index + 1)
      },
      '>-0.3'
    );

    tlRain.current.set(rainsPaddle, { visibility: 'visible' }, '>-0.3');
    tlRain.current.to(rainsPaddle, { width: '40rem', height: '40rem', duration: 2 }, '<');
    tlRain.current.to(rainsPaddle, { opacity: 0, duration: 1.5 }, '>-0.5');

    tlRain.current.call(() => {
      gsap.set([rainsDrop, rainsPaddle], { clearProps: true });
    });
  };

  return {
    changeVisibility,
    containerRef,
    setRainsRef
  };
}
