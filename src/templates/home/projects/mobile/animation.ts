import { useEffect, useRef } from 'react';
import Draggable from 'gsap/dist/Draggable';
import gsap from 'gsap';

export default function (changeCurrent: () => void) {
  const currentCardRef = useRef<HTMLLIElement>(null);
  const nextCardRef = useRef<HTMLLIElement>(null);
  const nextLabelRef = useRef<HTMLDivElement>(null);
  const linkLabelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bounds = currentCardRef.current!.parentElement;
    if (!bounds) {
      return;
    }

    Draggable.create(currentCardRef.current, {
      type: 'x,y',
      dragResistance: 0.3,
      lockAxis: true,
      onDrag() {
        if (!this.x) {
          return;
        }

        dragTimeline(this.x);
      },
      onDragEnd() {
        if (this.y) {
          gsap.to(currentCardRef.current, { y: 0 });
          return;
        }

        if (Math.abs(this.x) < 20) {
          gsap.to(currentCardRef.current, { x: 0, y: 0 });
          return;
        }

        slideTimeline(this.x);
      }
    });
  }, []);

  const dragTimeline = (x: number) => {
    if (x > 0) {
      gsap.to(linkLabelRef.current, { opacity: x > 20 ? 1 : 0, duration: 0.2 });
    }

    if (x < 0) {
      gsap.to(nextLabelRef.current, { opacity: x < -20 ? 1 : 0, duration: 0.2 });
    }
  };

  const slideTimeline = (x: number) => {
    const tl = gsap.timeline();

    if (x < 0) {
      tl.to(nextLabelRef.current, { opacity: 1 });
    }

    if (x > 0) {
      tl.to(linkLabelRef.current, { opacity: 1 });
    }

    tl.to(currentCardRef.current, { x: `${x > 0 ? 100 : -100}vw` }, '<');

    tl.to(nextCardRef.current, { opacity: 1, scale: 1 });

    tl.call(() => {
      changeCurrent();
    });
  };

  return {
    currentCardRef,
    nextCardRef,
    nextLabelRef,
    linkLabelRef
  };
}
