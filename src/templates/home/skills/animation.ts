import useRefElements from '@/hooks/useRefElements';
import useEffectLoaded from '@/hooks/useEffectLoaded';
import gsap from 'gsap';

export default function () {
  const [containersRef, setContainersRef] = useRefElements<HTMLDivElement>();

  useEffectLoaded(() => {
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
    setContainersRef
  };
}
