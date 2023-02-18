import { useRef } from 'react';
import useRefElements from '@/hooks/useRefElements';
import gsap from 'gsap';
import useEffectLoaded from '@/hooks/useEffectLoaded';

export default function () {
  const avatarContainerRef = useRef(null);
  const textContainerRef = useRef(null);
  const [jobsWrapperRef, setJobsWrapperRef] = useRefElements<HTMLDivElement>();

  useEffectLoaded(() => {
    avatarAnimation();
    paragraphsAnimation();
    jobsAnimation();
  }, []);

  const avatarAnimation = () => {
    gsap.to(avatarContainerRef.current, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: avatarContainerRef.current,
        start: 'top 90%'
      }
    });
  };

  const paragraphsAnimation = () => {
    const paragraphs = gsap.utils.selector(textContainerRef.current)('p');

    paragraphs.forEach(current => {
      gsap.to(current, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: current,
          start: 'top 90%'
        }
      });
    });
  };

  const jobsAnimation = () => {
    jobsWrapperRef.current.forEach(current => {
      gsap.to(current, {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 0.3,
        scrollTrigger: {
          trigger: current,
          start: 'top 85%'
        }
      });
    });
  };

  return {
    avatarContainerRef,
    textContainerRef,
    setJobsWrapperRef
  };
}
