import { useEffect, useRef } from 'react';

export default function () {
  const isPausedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  const startLoop = (call: () => boolean) => {
    const keep = isPausedRef.current ? true : call();

    if (keep) {
      animationFrameRef.current = requestAnimationFrame(() => startLoop(call));
    }
  };

  const setStatusLoop = (status: 'pause' | 'resume') => {
    isPausedRef.current = status === 'pause';
  };

  const stopLoop = () => {
    cancelAnimationFrame(animationFrameRef.current || 0);
  };

  useEffect(() => {
    return () => {
      stopLoop();
    };
  }, []);

  return {
    startLoop,
    stopLoop,
    setStatusLoop
  };
}
