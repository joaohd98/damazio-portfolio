import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function () {
  const containerContactRef = useRef<HTMLDivElement>(null);
  const backgroundPongRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(containerContactRef.current, {
      opacity: 1,
      paddingTop: 0,
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
