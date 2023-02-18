import { useRef, useState } from 'react';
import Draggable from 'gsap/dist/Draggable';
import gsap from 'gsap';
import useStateRef from '@/hooks/useStateRef';
import useEffectLoaded from '@/hooks/useEffectLoaded';

export default function ({ initialPosition, size }: { initialPosition: number; size: number }) {
  const [state, setState, stateRef] = useStateRef({
    current: initialPosition,
    next: initialPosition + 1,
    previous: size - 1
  });

  const [isMakingAnimation, setMakingAnimation] = useState(true);

  const currentCardRef = useRef<HTMLLIElement>(null);
  const nextCardRef = useRef<HTMLLIElement>(null);
  const previousCardRef = useRef<HTMLLIElement>(null);
  const nextLabelRef = useRef<HTMLDivElement>(null);
  const previousLabelRef = useRef<HTMLDivElement>(null);
  const anchorTryRef = useRef<HTMLAnchorElement>(null);

  useEffectLoaded(() => {
    initDraggable();
    initScrollTrigger();
  }, []);

  useEffectLoaded(() => {
    if (state.next !== state.current && state.previous !== state.current) {
      return;
    }

    reverseTimeline(
      gsap.timeline({
        onComplete: () => {
          const next = state.current >= size - 1 ? 0 : state.current + 1;
          const previous = state.current <= 2 ? size - 1 : state.current - 1;
          setState({ current: state.current, next, previous });

          setMakingAnimation(false);
        }
      })
    );
  }, [state]);

  const initScrollTrigger = () => {
    const tl = gsap.timeline({
      onComplete: () => setMakingAnimation(false),
      scrollTrigger: {
        trigger: currentCardRef.current,
        start: 'top 80%'
      }
    });

    const duration = 0.4;

    tl.to(currentCardRef.current, { x: 75, rotate: '5deg', duration });
    tl.to(nextLabelRef.current, { opacity: 1, duration }, '<');
    tl.to(nextCardRef.current, { x: '-65vw', opacity: 1, duration }, '<');
    reverseTimeline(tl, duration);

    tl.to(currentCardRef.current, { x: -75, rotate: '-5deg', duration });
    tl.to(previousLabelRef.current, { opacity: 1, duration }, '<');
    tl.to(previousCardRef.current, { x: '65vw', opacity: 1, duration }, '<');
    reverseTimeline(tl, duration);
  };

  const initDraggable = () => {
    const bounds = currentCardRef.current?.parentElement;
    if (!bounds) {
      return;
    }

    const percentage = (x: number) => gsap.utils.mapRange(0, window.innerWidth, 0, 1, Math.abs(x));

    Draggable.create(currentCardRef.current, {
      type: 'x',
      zIndexBoost: false,
      dragResistance: 0.3,
      onDrag() {
        if (!this.x) {
          return;
        }

        slideTimeline(this.x, { progress: percentage(this.x) });
      },
      onDragEnd() {
        if (Math.abs(this.x) < 30) {
          reverseTimeline(
            gsap.timeline({
              onComplete: () => setMakingAnimation(false)
            }),
            0.4
          );

          return;
        }

        slideTimeline(this.x, { isFinished: true });
      }
    });
  };

  const slideTimeline = (x: number, { progress, isFinished }: { progress?: number; isFinished?: boolean }) => {
    const isRight = x > 0;
    const tl = gsap.timeline({
      paused: !isFinished,
      onStart: () => {
        setMakingAnimation(true);
      },
      onComplete: () => {
        if (!isFinished) {
          return;
        }

        const { next, previous } = stateRef.current;
        setState({ ...stateRef.current, ...(isRight ? { next, current: next } : { previous, current: previous }) });
      }
    });

    tl.to(anchorTryRef.current, { opacity: 0, duration: 0.2 });

    if (isRight) {
      tl.to(previousLabelRef.current, { opacity: 0 }, '<');
      tl.to(nextLabelRef.current, { opacity: 1 }, '<');
      tl.to(currentCardRef.current, { rotate: '5deg' }, '<');
    } else {
      tl.to(nextLabelRef.current, { opacity: 0 }, '<');
      tl.to(previousLabelRef.current, { opacity: 1 }, '<');
      tl.to(currentCardRef.current, { rotate: '-5deg' }, '<');
    }

    const actualCard = isRight ? nextCardRef.current : previousCardRef.current;

    if (progress !== undefined) {
      const xValue = (1 - progress) * (isRight ? -100 : 100);
      tl.to(actualCard, { x: `${xValue}vw` }, '<');
      tl.progress(progress);

      return;
    }

    if (isFinished) {
      tl.to(currentCardRef.current, { x: `${isRight ? 100 : -100}vw` }, '<');
      tl.to(actualCard, { x: 0 }, '<');
      tl.to(actualCard, { opacity: 1, scale: 1 });
    }
  };

  const reverseTimeline = (tl = gsap.timeline(), duration = 0) => {
    tl.to(currentCardRef.current, { x: 0, rotate: 0, duration });
    tl.to([nextLabelRef.current, previousLabelRef.current], { opacity: 0, duration }, '<');
    tl.to(nextCardRef.current, { x: '-100vw', opacity: 0.5, scale: 0.9, duration }, '<');
    tl.to(previousCardRef.current, { x: '100vw', opacity: 0.5, scale: 0.9, duration }, '<');
    tl.to(anchorTryRef.current, { opacity: 1, duration }, '<');
  };

  return {
    ...state,
    isMakingAnimation,
    currentCardRef,
    nextCardRef,
    previousCardRef,
    anchorTryRef,
    nextLabelRef,
    previousLabelRef
  };
}
