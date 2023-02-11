import { useEffect, useRef } from 'react';
import Draggable from 'gsap/dist/Draggable';
import gsap from 'gsap';
import useStateRef from '@/hooks/useStateRef';

export default function (initialState: { total: number; current: number; getLink: (index: number) => string }) {
  const [state, setState, stateRef] = useStateRef({
    current: initialState.current,
    next: initialState.current + 1
  });

  const currentCardRef = useRef<HTMLLIElement>(null);
  const nextCardRef = useRef<HTMLLIElement>(null);
  const nextLabelRef = useRef<HTMLDivElement>(null);
  const linkLabelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bounds = currentCardRef.current?.parentElement;
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

  useEffect(() => {
    if (state.next !== state.current) {
      return;
    }

    gsap.set(nextLabelRef.current, { opacity: 0 });
    gsap.set(linkLabelRef.current, { opacity: 0 });

    gsap.set(currentCardRef.current, { x: 0 });
    gsap.set(nextCardRef.current, { opacity: 0.5, scale: 0.9 });

    setState({ next: state.next + 1, current: state.next });
  }, [state]);

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
    const isRight = x > 0;

    if (isRight) {
      tl.to(nextLabelRef.current, { opacity: 1 });
    } else {
      tl.to(linkLabelRef.current, { opacity: 1 });
    }

    tl.to(currentCardRef.current, { x: `${x > 0 ? 100 : -100}vw` }, '<');
    tl.to(nextCardRef.current, { opacity: 1, scale: 1 });

    tl.call(() => {
      setState({ next: stateRef.current.next, current: stateRef.current.next });

      if (isRight) {
        window.open(initialState.getLink(stateRef.current.current), '_blank');
      }
    });
  };

  const onChangeCurrent = (direction: 'left' | 'right') => {
    slideTimeline(direction === 'left' ? -1 : 1);
  };

  return {
    current: state.current,
    next: state.next,
    onChangeCurrent,
    currentCardRef,
    nextCardRef,
    nextLabelRef,
    linkLabelRef
  };
}
