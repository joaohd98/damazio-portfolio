import { useEffect, useRef } from 'react';
// import gsap from 'gsap';

export default function () {
  const pinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // setTimeout(() => {
    //   const { innerWidth } = window;
    //   gsap.to(pinRef.current, {
    //     xPercent: -100,
    //     x: () => innerWidth,
    //     ease: 'none',
    //     scrollTrigger: {
    //       trigger: pinRef.current,
    //       start: 'top top',
    //       end: () => innerWidth * 3,
    //       scrub: true,
    //       pin: true,
    //       invalidateOnRefresh: true,
    //       anticipatePin: 1
    //     }
    //   });
    // }, 500);
    // pinRef.current?.addEventListener('wheel', onWheel);
    // pinRef.current?.addEventListener('scroll', event => {
    //   console.log(event);
    // });
    // return () => {
    //   pinRef.current?.removeEventListener('wheel', onWheel);
    // };
  }, []);

  // const onWheel = (wheel: WheelEvent) => {
  //   // wheel.preventDefault();
  //   console.log(wheel.deltaX);
  //
  //   const scroll = document.querySelector('html');
  //   if (!scroll || wheel.deltaY !== 0) {
  //     return;
  //   }
  //
  //
  //   scroll.scrollLeft += wheel.deltaY;
  // };

  return {
    pinRef
  };
}
