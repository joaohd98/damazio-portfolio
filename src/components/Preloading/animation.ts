import useRefElements from '@/hooks/useRefElements';
import { useEffect } from 'react';
import gsap from 'gsap';

export default function (size: number) {
  const [rainsRef, setRainsRef] = useRefElements<HTMLDivElement>();

  useEffect(() => {
    animatedRain();
  }, []);

  const animatedRain = (index = 0) => {
    const tl = gsap.timeline();

    const current = rainsRef.current[index];
    const rainsDrop = gsap.utils.selector(current)('span');
    const rainsPaddle = gsap.utils.selector(current)('div');

    tl.to(rainsDrop[0], { opacity: 1, marginTop: 0, duration: 0.8 });
    tl.to(rainsDrop[1], { opacity: 0.4, marginTop: 0, duration: 0.8 }, '<');
    tl.to(
      rainsDrop,
      {
        scaleY: 0,
        duration: 0.4,
        onStart: () => animatedRain(index === size - 1 ? 0 : index + 1)
      },
      '>-0.3'
    );

    tl.set(rainsPaddle, { visibility: 'visible' }, '>-0.3');
    tl.to(rainsPaddle, { width: '50rem', height: '50rem', duration: 2 }, '<');
    tl.to(rainsPaddle, { opacity: 0, duration: 1.5 }, '>-0.5');

    tl.call(() => {
      gsap.set([rainsDrop, rainsPaddle], { clearProps: true });
    });
  };

  return {
    setRainsRef
  };
}
