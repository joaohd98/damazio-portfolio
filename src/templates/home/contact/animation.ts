import { useRef } from 'react';
import gsap from 'gsap';
import useEffectLoaded from '@/hooks/useEffectLoaded';

export default function () {
  const containerContactRef = useRef<HTMLDivElement>(null);
  const backgroundPongRef = useRef<HTMLDivElement>(null);

  useEffectLoaded(() => {
    gsap.to(containerContactRef.current, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: containerContactRef.current,
        start: 'top 90%'
      }
    });

    gsap.to(backgroundPongRef.current, {
      x: '100%',
      scrollTrigger: {
        trigger: backgroundPongRef.current,
        start: 'top 85%'
      }
    });
  }, []);

  return {
    containerContactRef,
    backgroundPongRef
  };
}
