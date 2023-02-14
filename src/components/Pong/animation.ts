import { useEffect, useRef } from 'react';
import useRequestFrameAnimationLoop from '@/hooks/useRequestFrameAnimationLoop';
import PongModel from './game';

export default function () {
  const containerRef = useRef<HTMLDivElement>(null);
  const paddlePlayerRef = useRef<HTMLDivElement>(null);
  const paddleEnemyRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);

  const { startLoop } = useRequestFrameAnimationLoop();

  useEffect(() => {
    startPlayingPong();

    containerRef.current?.addEventListener('mouseenter', onMouseMove);
    containerRef.current?.addEventListener('mousemove', onMouseMove);
    containerRef.current?.addEventListener('mouseleave', onMouseMove);

    return () => {
      containerRef.current?.removeEventListener('mouseenter', onMouseMove);
      containerRef.current?.removeEventListener('mousemove', onMouseMove);
      containerRef.current?.removeEventListener('mouseleave', onMouseMove);
    };
  }, []);

  const startPlayingPong = () => {
    const pong = new PongModel({ containerRef, paddlePlayerRef, paddleEnemyRef, ballRef });

    pong.startingPlaying({
      actual: 'enemy',
      enemySpeed: 0.6
    });

    const playingPong = () => {
      pong.moveBall();
      pong.moveEnemyPaddle();
      pong.refreshRefs({ containerRef, paddlePlayerRef, paddleEnemyRef, ballRef });

      if (pong.hasFinishedGame()) {
        return false;
      }

      if (pong.hasHitPlayerPaddle()) {
        pong.hittedPlayerPaddle();
      }

      if (pong.hasHitEnemyPaddle()) {
        pong.hittedEnemyPaddle();
      }

      return true;
    };

    startLoop(playingPong);
  };

  const onMouseMove = (event: MouseEvent) => {
    const pong = new PongModel({ containerRef, paddlePlayerRef, paddleEnemyRef, ballRef });
    pong.onPaddleMove(event);
  };

  return {
    containerRef,
    paddlePlayerRef,
    paddleEnemyRef,
    ballRef
  };
}
