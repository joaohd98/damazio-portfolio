import { useEffect, useRef } from 'react';

export default function () {
  const animationFrameRef = useRef<number | null>(null);

  const startLoop = (call: () => boolean) => {
    const keep = call();

    if (keep) {
      animationFrameRef.current = requestAnimationFrame(() => startLoop(call));
    }
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
    stopLoop
  };
}
