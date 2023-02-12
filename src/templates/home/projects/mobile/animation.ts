import { useEffect, useRef, useState } from 'react';
import Draggable from 'gsap/dist/Draggable';
import gsap from 'gsap';
import useStateRef from '@/hooks/useStateRef';

export default function ({
  getLink,
  total,
  openModal,
  ...initialState
}: {
  total: number;
  current: number;
  openModal: () => void;
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

    gsap.set([nextLabelRef.current, linkLabelRef.current], { opacity: 0 });
    gsap.set(currentCardRef.current, { x: 0, rotate: 0 });
    gsap.set(nextCardRef.current, { opacity: 0.5, scale: 0.9 });

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
    tl.to(currentCardRef.current, { x: -40, rotate: '-5deg', duration });
    tl.to(nextLabelRef.current, { opacity: 1, duration }, '<');

    tl.to(currentCardRef.current, { x: 0, rotate: 0, duration });
    tl.to(nextLabelRef.current, { opacity: 0, duration }, '<');

    tl.to(currentCardRef.current, { x: 40, rotate: '5deg', duration });
    tl.to(linkLabelRef.current, { opacity: 1, duration }, '<');

    tl.to(currentCardRef.current, { x: 0, rotate: 0, duration });
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
          gsap.to(currentCardRef.current, { x: 0, rotate: 0 });
          return;
        }

        slideTimeline(this.x);
      }
    });
  };

  const dragTimeline = (x: number) => {
    const duration = 0.2;
    if (x > 0) {
      gsap.to(linkLabelRef.current, { opacity: x > 20 ? 1 : 0, duration });
      gsap.to(currentCardRef.current, { rotate: x > 5 ? '5deg' : 0, duration });
    }

    if (x < 0) {
      gsap.to(nextLabelRef.current, { opacity: x < -20 ? 1 : 0, duration });
      gsap.to(currentCardRef.current, { rotate: x < -5 ? '-5deg' : 0, duration });
    }
  };

  const slideTimeline = (x: number, shouldDisableClick?: boolean) => {
    const tl = gsap.timeline({
      onStart: () => setMakingAnimation(true),
      onComplete: () => {
        const { current, next } = stateRef.current;
        setState({ next, current: next });

        if (isRight && !shouldDisableClick) {
          const win = window.open(getLink(current), '_target');
          if (!win || win.closed || typeof win.closed === 'undefined') {
            openModal();
          }
        }
      }
    });

    const isRight = x > 0;
    if (isRight) {
      tl.to(linkLabelRef.current, { opacity: 1 });
      tl.to(currentCardRef.current, { rotate: '5deg' }, '<');
    } else {
      tl.to(nextLabelRef.current, { opacity: 1 });
      tl.to(currentCardRef.current, { rotate: '-5deg' }, '<');
    }

    tl.to(currentCardRef.current, { x: `${x > 0 ? 100 : -100}vw` }, '<');
    tl.to(nextCardRef.current, { opacity: 1, scale: 1 });
  };

  const onChangeCurrent = (direction: 'left' | 'right') => {
    slideTimeline(direction === 'left' ? -1 : 1, true);
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
