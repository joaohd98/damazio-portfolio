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
    let actual: 'player' | 'enemy' = 'player';
    let left = 60;
    let top = 50;
    let inscreaseLeft = 0.7;
    let increaseTop = -0.1;

    const playingPong = () => {
      const container = containerRef.current;
      const paddlePlayer = paddlePlayerRef.current;
      const paddleEnemy = paddleEnemyRef.current;
      const ball = ballRef.current;

      if (!container || !paddlePlayer || !paddleEnemy || !ball) {
        return false;
      }

      const ballBounds = ball.getBoundingClientRect();
      const playerBounds = paddlePlayer.getBoundingClientRect();
      const enemyBounds = paddleEnemy.getBoundingClientRect();

      left += inscreaseLeft;
      top += increaseTop;

      gsap.set(ball, { left: `${left}%`, top: `${top}%` });

      if (top <= 0 || top >= 100) {
        increaseTop *= -1;
      }

      if (
        playerBounds.top <= ballBounds.top &&
        playerBounds.bottom >= ballBounds.bottom &&
        playerBounds.right - playerBounds.width - 5 <= ballBounds.right &&
        playerBounds.left + playerBounds.width + 5 >= ballBounds.left &&
        actual === 'player'
      ) {
        increaseTop = gsap.utils.mapRange(
          playerBounds.top,
          playerBounds.top + playerBounds.height,
          -2.5,
          2.5,
          ballBounds.top + ballBounds.height / 2
        );

        inscreaseLeft = -1.5;
        actual = 'enemy';
      }

      if (
        enemyBounds.top <= ballBounds.top &&
        enemyBounds.bottom >= ballBounds.bottom &&
        enemyBounds.x + enemyBounds.width >= ballBounds.x &&
        enemyBounds.right - enemyBounds.width <= ballBounds.right &&
        actual === 'enemy'
      ) {
        increaseTop = gsap.utils.mapRange(
          enemyBounds.top,
          enemyBounds.top + enemyBounds.height,
          -2.5,
          2.5,
          ballBounds.top + ballBounds.height / 2
        );

        inscreaseLeft = 1.5;
        actual = 'player';
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
