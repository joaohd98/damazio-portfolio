import { useRef } from 'react';
import gsap from 'gsap';

export default function () {
  const modalConfirmationRef = useRef<HTMLDivElement>(null);

  const changeVisibility = (isVisible: boolean) => {
    const tl = gsap.timeline();

    if (isVisible) {
      tl.set(modalConfirmationRef.current, { display: 'block' });
      tl.to(modalConfirmationRef.current, { opacity: 1, duration: 0.2 });
      tl.set(['body', 'html'], { overflow: 'hidden' });
    } else {
      tl.to(modalConfirmationRef.current, { opacity: 0, duration: 0.4 });
      tl.set(['body', 'html', modalConfirmationRef.current], { clearProps: 'all' });
    }
  };

  return {
    modalConfirmationRef,
    changeVisibility
  };
}
