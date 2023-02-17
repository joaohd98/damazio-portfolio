import { CSSProperties } from 'react';
import gsap from 'gsap';
import useRefElements from '@/hooks/useRefElements';

export default function useAccordionTransition() {
  const [accordionRefs, setAccordionRef] = useRefElements<HTMLElement>();

  const accordionStyle: CSSProperties = {
    maxHeight: 0,
    overflow: 'hidden'
  };

  const accordionVisibility = (toValue: boolean, index = 0, shouldHideOthers = true) => {
    const current = accordionRefs.current[index];
    if (!current) {
      return;
    }

    const duration = 0.25;

    const maxHeight = current.scrollHeight;
    const tl = gsap.timeline();

    if (!toValue) {
      tl.set(current, { maxHeight: 0 });
      tl.set(current, { maxHeight });
    }

    if (shouldHideOthers) {
      const hideAccordions = accordionRefs.current.filter((_, accordionIndex) => accordionIndex !== index);

      if (hideAccordions.length) {
        tl.to(hideAccordions, { maxHeight: 0, duration });
      }
    }

    tl.to(current, { maxHeight: toValue ? maxHeight : 0, duration }, '<');

    if (toValue) {
      tl.set(current, { maxHeight: 'max-content' });
    }
  };

  return {
    accordionRefs,
    setAccordionRef,
    accordionVisibility,
    accordionStyle
  };
}
