import { useRef } from 'react';
import gsap from 'gsap';

export default function () {
  const iconLinkRef = useRef<HTMLAnchorElement>(null);
  const menuBackgroundRef = useRef<HTMLDivElement>(null);
  const menuItemContainerRef = useRef<HTMLDivElement>(null);

  const onChangeVisibility = (isOpening: boolean) => {
    const tl = gsap.timeline({
      onStart: () => {
        gsap.set(iconLinkRef.current, { pointerEvents: 'none' });

        if (isOpening) {
          gsap.set(['body', 'html'], { overflow: 'hidden' });
        }
      },
      onComplete: () => {
        gsap.set(iconLinkRef.current, { clearProps: true });

        if (!isOpening) {
          gsap.set(['html', 'body'], { clearProps: true });
        }
      }
    });

    if (isOpening) {
      tl.to(menuBackgroundRef.current, { scale: 60, duration: 0.4 });
      tl.to(menuItemContainerRef.current, { autoAlpha: 1, duration: 0.2 }, 0.2);

      return;
    }

    tl.to(menuItemContainerRef.current, { autoAlpha: 0, duration: 0.2 });
    tl.to(menuBackgroundRef.current, { scale: 0, duration: 0.3 }, 0.1);
  };

  return {
    iconLinkRef,
    menuBackgroundRef,
    menuItemContainerRef,
    onChangeVisibility
  };
}
