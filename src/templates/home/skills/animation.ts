import useRefElements from '@/hooks/useRefElements';
import useEffectLoaded from '@/hooks/useEffectLoaded';
import gsap from 'gsap';
import { useRef } from 'react';

export default function () {
  const titleRef = useRef(null);
  const [containersRef, setContainersRef] = useRefElements<HTMLDivElement>();

  useEffectLoaded(() => {
    gsap.to(titleRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 90%'
      }
    });

    containersRef.current.forEach(current => {
      gsap.to(current, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: current,
          start: 'top 90%'
        }
      });
    });
  }, []);

  return {
    titleRef,
    setContainersRef
  };
}
