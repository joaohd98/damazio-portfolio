import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import Draggable from 'gsap/dist/Draggable';

export default function GSAPInitilize() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Draggable, ScrollToPlugin);

    let previousHeight = document.body.scrollHeight;
    const checkChangeHeight = () => {
      const currentHeight = document.body.scrollHeight;
      if (previousHeight !== currentHeight) {
        ScrollTrigger.refresh();
        previousHeight = currentHeight;
      }

      window.requestAnimationFrame(checkChangeHeight);
    };

    checkChangeHeight();
  }, []);

  return null;
}
