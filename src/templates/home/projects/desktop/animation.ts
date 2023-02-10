import { useEffect, useRef } from 'react';
import gsap, { Back } from 'gsap';
import useRefElements from '@/hooks/useRefElements';

export default function (quantity: number) {
  const [cardsRef, setCardsRef] = useRefElements<HTMLDivElement>();
  const pinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = getTimeline();
    initSrollTrigger(tl);
  }, []);

  const getTimeline = () => {
    const tl = gsap.timeline({ paused: true });
    tl.to(cardsRef.current, { opacity: 1, marginLeft: 0, ease: Back.easeOut, stagger: 0.5 });

    return tl;
  };

  const initSrollTrigger = (tl: gsap.core.Timeline) => {
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
        onUpdate: self => {
          tl.progress(gsap.utils.mapRange(0, 1.05, 0, 1, self.progress));
        },
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });
  };

  return {
    pinRef,
    setCardsRef
  };
}
