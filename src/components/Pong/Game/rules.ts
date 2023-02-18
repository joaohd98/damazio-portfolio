import { MutableRefObject } from 'react';
import gsap from 'gsap';
import { viewportsBase } from '@/styles/viewport-base';

type Constructor = {
  pongTableRef: MutableRefObject<HTMLDivElement | null>;
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
  dificulty: 'easy' | 'normal' | 'hard';
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

  refreshRefs = ({ pongTableRef, paddlePlayerRef, paddleEnemyRef, ballRef }: Constructor) => {
    if (!pongTableRef.current || !paddlePlayerRef.current || !paddleEnemyRef.current || !ballRef.current) {
      throw new Error('Arguments Invalid');
    }

    this.container = pongTableRef.current;
    this.paddlePlayer = paddlePlayerRef.current;
    this.paddleEnemy = paddleEnemyRef.current;
    this.ball = ballRef.current;

    this.containerBounds = this.container.getBoundingClientRect();
    this.ballBounds = this.ball.getBoundingClientRect();
    this.playerBounds = this.paddlePlayer.getBoundingClientRect();
    this.enemyBounds = this.paddleEnemy.getBoundingClientRect();
  };

  onPaddleMove = (clientY: number) => {
    const top = clientY - this.containerBounds.top;
    const halfPaddle = this.paddlePlayer.clientHeight / 2 - 1;
    if (top < halfPaddle) {
      gsap.set(this.paddlePlayer, { top: halfPaddle });
      return;
    }

    const halfBottomPaddle = this.containerBounds.height - this.paddlePlayer.clientHeight / 2;
    if (top > halfBottomPaddle) {
      gsap.set(this.paddlePlayer, { top: halfBottomPaddle });
      return;
    }

    gsap.set(this.paddlePlayer, { top });
  };

  startingPlaying(partial: Pick<Rules, 'firstPlay' | 'dificulty'>) {
    this.rules = {
      ...partial,
      current: partial.firstPlay,
      left: partial.firstPlay === 'player' ? 60 : 30,
      inscreaseLeft: partial.firstPlay === 'player' ? 0.8 : -0.8,
      top: gsap.utils.random(40, 60),
      increaseTop: gsap.utils.random(-1, 1)
    };
  }

  moveBall() {
    if (!this.rules) {
      throw Error('is necessary to call starting playing before');
    }

    this.rules.left += this.rules.inscreaseLeft;

    const top = this.rules.top + this.rules.increaseTop;
    this.rules.top = gsap.utils.clamp(0, 100, top);

    gsap.set(this.ball, { left: `${this.rules.left}%`, top: `${this.rules.top}%`, opacity: 1 });

    if (this.rules.top <= 1 || this.rules.top >= 99) {
      this.rules.increaseTop *= -1;
    }
  }

  moveEnemyPaddle() {
    if (!this.rules) {
      throw Error('is necessary to call starting playing before');
    }

    const halfTopPaddle = this.enemyBounds.height / 2;
    const halfBottomPaddle = this.containerBounds.height - halfTopPaddle;
    const halfBall = this.ballBounds.height / 2;

    const paddleTopRelative = this.enemyBounds.top - this.containerBounds.top + halfTopPaddle;
    const ballTopRelative = this.ballBounds.top - this.containerBounds.top + halfBall;

    const distance = paddleTopRelative - ballTopRelative;

    const enemySpeed = {
      easy: 5,
      normal: 5.5,
      hard: 6
    }[this.rules.dificulty];

    let increase = 0;

    if (distance < -halfTopPaddle) {
      increase = gsap.utils.random(enemySpeed - 0.3, enemySpeed + 0.3);
    }

    if (distance > halfTopPaddle) {
      increase = -gsap.utils.random(enemySpeed - 0.3, enemySpeed + 0.3);
    }

    gsap.set(this.paddleEnemy, {
      top: gsap.utils.clamp(halfTopPaddle, halfBottomPaddle, paddleTopRelative + increase)
    });
  }

  matchWinner() {
    if (!this.rules) {
      throw Error('is necessary to call starting playing before');
    }

    if (this.rules.left <= -10) {
      return 'player';
    }

    if (this.rules.left >= 110) {
      return 'enemy';
    }

    return undefined;
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
    this.rules.increaseTop = gsap.utils.clamp(-3, 3, increaseTop);
    this.rules.current = isPlayer ? 'enemy' : 'player';

    const increaseLeft = window.innerWidth > viewportsBase.mobile.width ? 2 : 1.5;
    this.rules.inscreaseLeft = isPlayer ? -increaseLeft : increaseLeft;
  }
}
