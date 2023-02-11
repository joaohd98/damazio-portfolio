import { useEffect, useRef, useState } from 'react';
import Draggable from 'gsap/dist/Draggable';
import gsap from 'gsap';
import useStateRef from '@/hooks/useStateRef';

export default function ({
  getLink,
  total,
  ...initialState
}: {
  total: number;
  current: number;
  getLink: (index: number) => string;
}) {
  const [state, setState, stateRef] = useStateRef({
    current: initialState.current,
    next: initialState.current + 1
  });

  const [isMakingAnimation, setMakingAnimation] = useState(true);

  const currentCardRef = useRef<HTMLLIElement>(null);
  const nextCardRef = useRef<HTMLLIElement>(null);
  const nextLabelRef = useRef<HTMLDivElement>(null);
  const linkLabelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initDraggable();
    initScrollTrigger();
  }, []);

  useEffect(() => {
    if (state.next !== state.current) {
      return;
    }

    gsap.set([nextLabelRef.current, linkLabelRef.current, currentCardRef.current, nextCardRef.current], {
      clearProps: 'all'
    });

    const next = state.current > total - 2 ? 0 : state.current + 1;
    setState({ next, current: state.current });
    setMakingAnimation(false);
  }, [state]);

  const initScrollTrigger = () => {
    const tl = gsap.timeline({
      onComplete: () => setMakingAnimation(false),
      scrollTrigger: {
        trigger: currentCardRef.current,
        start: 'top 80%'
      }
    });

    const duration = 0.3;
    tl.to(currentCardRef.current, { x: -20, duration });
    tl.to(nextLabelRef.current, { opacity: 1, duration }, '<');

    tl.to(currentCardRef.current, { x: 0, duration });
    tl.to(nextLabelRef.current, { opacity: 0, duration }, '<');

    tl.to(currentCardRef.current, { x: 20, duration });
    tl.to(linkLabelRef.current, { opacity: 1, duration }, '<');

    tl.to(currentCardRef.current, { x: 0, duration });
    tl.to(linkLabelRef.current, { opacity: 0, duration }, '<');
  };

  const initDraggable = () => {
    const bounds = currentCardRef.current?.parentElement;
    if (!bounds) {
      return;
    }

    Draggable.create(currentCardRef.current, {
      type: 'x',
      dragResistance: 0.3,
      onDrag() {
        if (!this.x) {
          return;
        }

        dragTimeline(this.x);
      },
      onDragEnd() {
        if (Math.abs(this.x) < 20) {
          gsap.to(currentCardRef.current, { x: 0 });
          return;
        }

        slideTimeline(this.x);
      }
    });
  };

  const dragTimeline = (x: number) => {
    if (x > 0) {
      gsap.to(linkLabelRef.current, { opacity: x > 20 ? 1 : 0, duration: 0.2 });
    }

    if (x < 0) {
      gsap.to(nextLabelRef.current, { opacity: x < -20 ? 1 : 0, duration: 0.2 });
    }
  };

  const slideTimeline = (x: number) => {
    const tl = gsap.timeline({
      onStart: () => setMakingAnimation(true),
      onComplete: () => {
        const { current, next } = stateRef.current;
        setState({ next, current: next });

        if (isRight) {
          window.open(getLink(current), '_target');
        }
      }
    });

    const isRight = x > 0;
    if (isRight) {
      tl.to(linkLabelRef.current, { opacity: 1 });
    } else {
      tl.to(nextLabelRef.current, { opacity: 1 });
    }

    tl.to(currentCardRef.current, { x: `${x > 0 ? 100 : -100}vw` }, '<');
    tl.to(nextCardRef.current, { opacity: 1, scale: 1 });
  };

  const onChangeCurrent = (direction: 'left' | 'right') => {
    slideTimeline(direction === 'left' ? -1 : 1);
  };

  return {
    current: state.current,
    next: state.next,
    isMakingAnimation,
    onChangeCurrent,
    currentCardRef,
    nextCardRef,
    nextLabelRef,
    linkLabelRef
  };
}
