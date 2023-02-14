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
  left: number;
  top: number;
  inscreaseLeft: number;
  increaseTop: number;
  // 1 easy
  // 0.8 medium
  // 0.6 hard
  enemySpeed: 0.6 | 0.8 | 1;
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
      left: partial.firstPlay === 'player' ? 60 : 30,
      inscreaseLeft: partial.firstPlay === 'player' ? 0.2 : -0.2,
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

    if (this.rules.top <= 0 || this.rules.top >= 100) {
      this.rules.increaseTop *= -1;
    }
  }

  moveEnemyPaddle() {
    if (!this.rules) {
      throw Error('is necessary to call starting playing before');
    }

    // const quarterPaddle = this.enemyBounds.height / 4;
    gsap.set(this.paddleEnemy, {
      top: `${this.rules.top}%`
    });

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

    const eleA = paddle === 'player' ? this.playerBounds : this.enemyBounds;
    const eleB = this.ballBounds;
    if ((eleB.top >= eleA.top && eleB.top <= eleA.bottom) || (eleB.bottom >= eleA.top && eleB.bottom <= eleA.bottom)) {
      return (
        (eleB.left >= eleA.left && eleB.left <= eleA.right) || (eleB.right >= eleA.left && eleB.right <= eleA.right)
      );
    }

    return false;
  }

  hittedPlayerPaddle() {
    if (!this.rules) {
      throw Error('is necessary to call starting playing before');
    }

    this.rules.increaseTop = gsap.utils.mapRange(
      this.playerBounds.top,
      this.playerBounds.top + this.playerBounds.height,
      -2.5,
      2.5,
      this.ballBounds.top + this.ballBounds.height / 2
    );

    this.rules.inscreaseLeft = -1.5;
  }

  hittedEnemyPaddle() {
    if (!this.rules) {
      throw Error('is necessary to call starting playing before');
    }

    this.rules.increaseTop = gsap.utils.mapRange(
      this.enemyBounds.top,
      this.enemyBounds.top + this.enemyBounds.height,
      -2.5,
      2.5,
      this.ballBounds.top + this.ballBounds.height / 2
    );

    this.rules.inscreaseLeft = 1.5;
  }
}
