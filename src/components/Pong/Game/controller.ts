import { useEffect, useRef } from 'react';
import useRequestFrameAnimationLoop from '@/hooks/useRequestFrameAnimationLoop';
import PongOptions from '@/components/Pong/props';
import PongModel from './rules';

export default function (options: PongOptions) {
  const pongTableRef = useRef<HTMLDivElement>(null);
  const paddlePlayerRef = useRef<HTMLDivElement>(null);
  const paddleEnemyRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);

  const { startLoop, setStatusLoop } = useRequestFrameAnimationLoop();

  useEffect(() => {
    pongTableRef.current?.addEventListener('mouseenter', onMouseMove);
    pongTableRef.current?.addEventListener('mousemove', onMouseMove);
    pongTableRef.current?.addEventListener('mouseleave', onMouseMove);

    return () => {
      pongTableRef.current?.removeEventListener('mouseenter', onMouseMove);
      pongTableRef.current?.removeEventListener('mousemove', onMouseMove);
      pongTableRef.current?.removeEventListener('mouseleave', onMouseMove);
    };
  }, [options]);

  useEffect(() => {
    setStatusLoop(options.paused ? 'pause' : 'resume');
  }, [options.paused]);

  const onMouseMove = (event: MouseEvent) => {
    const pong = new PongModel({ pongTableRef, paddlePlayerRef, paddleEnemyRef, ballRef });
    pong.onPaddleMove(event);
  };

  const startPlayingPong = () => {
    const pong = new PongModel({ pongTableRef, paddlePlayerRef, paddleEnemyRef, ballRef });

    pong.startingPlaying({
      firstPlay: 'player',
      enemySpeed: 0.4
    });

    const playingPong = () => {
      pong.moveBall();
      pong.moveEnemyPaddle();
      pong.refreshRefs({ pongTableRef, paddlePlayerRef, paddleEnemyRef, ballRef });

      if (pong.hasFinishedGame()) {
        return false;
      }

      if (pong.hasHitPaddle('player')) {
        pong.hittedPaddle('player');
      }

      if (pong.hasHitPaddle('enemy')) {
        pong.hittedPaddle('enemy');
      }

      return true;
    };

    startLoop(playingPong);
  };

  return {
    startPlayingPong,
    pongTableRef,
    paddlePlayerRef,
    paddleEnemyRef,
    ballRef
  };
}
