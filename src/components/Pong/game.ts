import { MutableRefObject } from 'react';
import gsap from 'gsap';

type Constructor = {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  paddlePlayerRef: MutableRefObject<HTMLDivElement | null>;
  paddleEnemyRef: MutableRefObject<HTMLDivElement | null>;
  ballRef: MutableRefObject<HTMLDivElement | null>;
};

type Rules = {
  firstPlay: 'player' | 'enemy';
  current: 'player' | 'enemy';
  left: number;
  top: number;
  inscreaseLeft: number;
  increaseTop: number;
  // 0.4 easy
  // 0.6 medium
  // 0.8 hard
  enemySpeed: 0.4 | 0.6 | 0.8;
};

export default class PongModel {
  container!: HTMLDivElement;

  paddlePlayer!: HTMLDivElement;

  paddleEnemy!: HTMLDivElement;

  ball!: HTMLDivElement;

  containerBounds!: DOMRect;

  playerBounds!: DOMRect;

  enemyBounds!: DOMRect;

  ballBounds!: DOMRect;

  rules?: Rules;

  constructor(constructor: Constructor) {
    this.refreshRefs(constructor);
  }

  refreshRefs = ({ containerRef, paddlePlayerRef, paddleEnemyRef, ballRef }: Constructor) => {
    if (!containerRef.current || !paddlePlayerRef.current || !paddleEnemyRef.current || !ballRef.current) {
      throw new Error('Arguments Invalid');
    }

    this.container = containerRef.current;
    this.paddlePlayer = paddlePlayerRef.current;
    this.paddleEnemy = paddleEnemyRef.current;
    this.ball = ballRef.current;

    this.containerBounds = this.container.getBoundingClientRect();
    this.ballBounds = this.ball.getBoundingClientRect();
    this.playerBounds = this.paddlePlayer.getBoundingClientRect();
    this.enemyBounds = this.paddleEnemy.getBoundingClientRect();
  };

  onPaddleMove = (event: MouseEvent) => {
    const top = event.clientY - this.containerBounds.top;
    const halfPaddle = this.paddlePlayer.clientHeight / 2 - 1;
    if (top < halfPaddle) {
      gsap.set(this.paddlePlayer, { top: halfPaddle });
      return;
    }

    const halfBottomPaddle = this.containerBounds.height - this.paddlePlayer.clientHeight / 2 - 8;
    if (top > halfBottomPaddle) {
      gsap.set(this.paddlePlayer, { top: halfBottomPaddle });
      return;
    }

    gsap.set(this.paddlePlayer, { top });
  };

  startingPlaying(partial: Pick<Rules, 'firstPlay' | 'enemySpeed'>) {
    this.rules = {
      ...partial,
      current: partial.firstPlay,
      left: partial.firstPlay === 'player' ? 60 : 30,
      inscreaseLeft: partial.firstPlay === 'player' ? 1 : -1,
      top: gsap.utils.random(20, 80),
      increaseTop: gsap.utils.random(-1, 1)
    };
  }

  moveBall() {
    if (!this.rules) {
      throw Error('is necessary to call starting playing before');
    }

    this.rules.left += this.rules.inscreaseLeft;
    this.rules.top += this.rules.increaseTop;

    gsap.set(this.ball, { left: `${this.rules.left}%`, top: `${this.rules.top}%` });

    if (this.rules.top <= 5 || this.rules.top >= 95) {
      this.rules.increaseTop *= -1;
    }
  }

  moveEnemyPaddle() {
    if (!this.rules) {
      throw Error('is necessary to call starting playing before');
    }

    gsap.to(this.paddleEnemy, {
      top: `${gsap.utils.random(this.rules.top - 5, this.rules.top + 5)}%`,
      duration: this.rules.enemySpeed,
      onUpdate: () => {
        const newContainerBounds = this.container.getBoundingClientRect();
        const newPaddleEnemyBound = this.paddleEnemy.getBoundingClientRect();

        const topRelative = newContainerBounds.top - newPaddleEnemyBound.top;
        const bottomRelative = newContainerBounds.bottom - newPaddleEnemyBound.bottom;
        const halfPaddle = newPaddleEnemyBound.height / 2 - 1;
        const halfBottomPaddle = newContainerBounds.height - newPaddleEnemyBound.height / 2 - 8;

        if (topRelative >= 0) {
          gsap.set(this.paddleEnemy, { top: halfPaddle });
        }

        if (bottomRelative <= 0) {
          gsap.set(this.paddleEnemy, { top: halfBottomPaddle });
        }
      }
    });
  }

  hasFinishedGame() {
    if (!this.rules) {
      throw Error('is necessary to call starting playing before');
    }

    return this.rules.left <= -10 || this.rules.left >= 110;
  }

  hasHitPaddle(paddle: 'player' | 'enemy') {
    if (!this.rules) {
      throw Error('is necessary to call starting playing before');
    }

    if (this.rules.current !== paddle) {
      return false;
    }

    const eleA = paddle === 'player' ? this.playerBounds : this.enemyBounds;
    const eleB = this.ballBounds;
    if ((eleB.top >= eleA.top && eleB.top <= eleA.bottom) || (eleB.bottom >= eleA.top && eleB.bottom <= eleA.bottom)) {
      return (
        (eleB.left >= eleA.left && eleB.left <= eleA.right) || (eleB.right >= eleA.left && eleB.right <= eleA.right)
      );
    }

    return false;
  }

  hittedPaddle(paddle: 'player' | 'enemy') {
    if (!this.rules) {
      throw Error('is necessary to call starting playing before');
    }

    const isPlayer = paddle === 'player';
    const paddleBound = isPlayer ? this.playerBounds : this.enemyBounds;

    const increaseTop = gsap.utils.mapRange(
      paddleBound.top - 10,
      paddleBound.bottom + 10,
      -2.5,
      2.5,
      this.ballBounds.top + this.ballBounds.height / 2
    );

    this.rules.increaseTop = gsap.utils.clamp(-2.5, 2.5, increaseTop);
    this.rules.current = isPlayer ? 'enemy' : 'player';
    this.rules.inscreaseLeft = isPlayer ? -2 : 2;
  }
}
