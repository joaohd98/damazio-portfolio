import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function (quantity: number) {
  const pinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const end = ((quantity - 1) * 100) / 2;
    gsap.to(pinRef.current, {
      xPercent: 0,
      x: `${-end}%`,
      ease: 'none',
      scrollTrigger: {
        trigger: pinRef.current,
        start: 'top top',
        end: `${end}%`,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });
  }, []);

  return {
    pinRef
  };
}
