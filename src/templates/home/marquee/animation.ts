import { useRef } from 'react';
import gsap from 'gsap';
import useRequestAnimationFrameLoop from '@/hooks/useRequestFrameAnimationLoop';
import { viewportsBase } from '@/styles/viewport-base';
import useEffectLoaded from '@/hooks/useEffectLoaded';

export default () => {
  const { startLoop } = useRequestAnimationFrameLoop();
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffectLoaded(() => {
    let position = 0;

    startLoop(() => {
      const width = getWidth();
      gsap.to(marqueeRef.current, { x: `-${position}`, duration: 0 });

      position += gsap.utils.mapRange(
        viewportsBase.mobile.width,
        viewportsBase.desktop2560.width,
        5,
        15,
        window.innerWidth
      );

      if (position >= width) {
        position = 0;
      }

      return true;
    });
  }, []);

  const getWidth = () => {
    const { current } = marqueeRef;
    if (!current) {
      return 0;
    }

    return current.children[0].getBoundingClientRect().width;
  };

  return {
    marqueeRef
  };
};
