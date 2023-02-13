import { useEffect, useRef } from 'react';
import useRequestFrameAnimationLoop from '@/hooks/useRequestFrameAnimationLoop';
import gsap from 'gsap';

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
    let left = 20;
    let inscrease = 0.7;

    const playingPong = () => {
      const container = containerRef.current;
      const paddlePlayer = paddlePlayerRef.current;
      const paddleEnemy = paddleEnemyRef.current;
      const ball = ballRef.current;

      if (!container || !paddlePlayer || !paddleEnemy || !ball) {
        return false;
      }

      gsap.set(ball, { left: `${left}%` });
      left += inscrease;

      const ballBounds = ball.getBoundingClientRect();

      const playerBounds = paddlePlayer.getBoundingClientRect();
      const enemyBounds = paddleEnemy.getBoundingClientRect();

      if (
        playerBounds.top <= ballBounds.top * 1.05 &&
        playerBounds.bottom * 1.05 >= ballBounds.bottom &&
        playerBounds.right - playerBounds.width <= ballBounds.right &&
        playerBounds.left + playerBounds.width >= ballBounds.left
      ) {
        inscrease = -1.2;
      }

      if (
        enemyBounds.top <= ballBounds.top * 1.05 &&
        enemyBounds.bottom * 1.05 >= ballBounds.bottom &&
        enemyBounds.x + enemyBounds.width >= ballBounds.x &&
        enemyBounds.right - enemyBounds.width <= ballBounds.right
      ) {
        inscrease = 1.2;
      }

      return true;
    };

    startLoop(playingPong);
  };

  const onMouseMove = (event: MouseEvent) => {
    const container = containerRef.current;
    const paddlePlayer = paddlePlayerRef.current;
    if (!container || !paddlePlayer) {
      return;
    }

    const rect = container.getBoundingClientRect();

    const top = event.clientY - rect.top;
    const halfPaddle = paddlePlayer.clientHeight / 2 - 1;
    if (top < halfPaddle) {
      gsap.set([paddlePlayerRef.current, paddleEnemyRef.current], { top: halfPaddle });
      return;
    }

    const halfBottomPaddle = rect.height - paddlePlayer.clientHeight / 2 - 8;
    if (top > halfBottomPaddle) {
      gsap.set([paddlePlayerRef.current, paddleEnemyRef.current], { top: halfBottomPaddle });
      return;
    }

    gsap.set([paddlePlayerRef.current, paddleEnemyRef.current], { top });
  };

  return {
    containerRef,
    paddlePlayerRef,
    paddleEnemyRef,
    ballRef
  };
}
