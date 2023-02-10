import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import Draggable from 'gsap/dist/Draggable';

export default function GSAPInitilize() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Draggable, ScrollToPlugin);
  }, []);

  return null;
}
