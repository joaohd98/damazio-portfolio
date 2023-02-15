import { useEffect, useRef } from 'react';
import useRequestFrameAnimationLoop from '@/hooks/useRequestFrameAnimationLoop';
import PongModel from './rules';
import PongGameProps from './props';

export default function ({ options, onScore }: Pick<PongGameProps, 'options' | 'onScore'>) {
  const pongTableRef = useRef<HTMLDivElement>(null);
  const paddlePlayerRef = useRef<HTMLDivElement>(null);
  const paddleEnemyRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);

  const { startLoop, setStatusLoop } = useRequestFrameAnimationLoop();

  useEffect(() => {
    pongTableRef.current?.addEventListener('mouseenter', onMouseMove);
    pongTableRef.current?.addEventListener('mousemove', onMouseMove);
    pongTableRef.current?.addEventListener('mouseleave', onMouseMove);
    pongTableRef.current?.addEventListener('touchstart', onTouchMove);
    pongTableRef.current?.addEventListener('touchmove', onTouchMove);

    return () => {
      pongTableRef.current?.removeEventListener('mouseenter', onMouseMove);
      pongTableRef.current?.removeEventListener('mousemove', onMouseMove);
      pongTableRef.current?.removeEventListener('mouseleave', onMouseMove);
      pongTableRef.current?.removeEventListener('touchstart', onTouchMove);
      pongTableRef.current?.removeEventListener('touchmove', onTouchMove);
    };
  }, [options]);

  useEffect(() => {
    setStatusLoop(options.paused ? 'pause' : 'resume');
  }, [options.paused]);

  const onTouchMove = (event: globalThis.TouchEvent) => {
    event.preventDefault();
    onMouseMove({ clientY: event.touches[0].clientY });
  };

  const onMouseMove = (event: { clientY: number }) => {
    if (!options.hasStartedPlayed || !options.dificulty || !!options.winner) {
      return;
    }

    const pong = new PongModel({ pongTableRef, paddlePlayerRef, paddleEnemyRef, ballRef });
    pong.onPaddleMove(event.clientY);
  };

  const startPlayingPong = () => {
    const pong = new PongModel({ pongTableRef, paddlePlayerRef, paddleEnemyRef, ballRef });

    pong.startingPlaying({
      firstPlay: options.firstPlaying,
      dificulty: options.dificulty!
    });

    const playingPong = () => {
      pong.moveBall();
      pong.moveEnemyPaddle();
      pong.refreshRefs({ pongTableRef, paddlePlayerRef, paddleEnemyRef, ballRef });

      const matchWinner = pong.matchWinner();
      if (matchWinner) {
        onScore(matchWinner);
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
