import { useEffect, useState } from 'react';
import PongOptions from '@/components/Pong/props';
import * as S from './styles';
import useController from './controller';

const dots = Array.from(Array(10).keys());

type Props = {
  hasInitGame: boolean;
  options: PongOptions;
};

export default function PongGame({ hasInitGame, options }: Props) {
  const [score] = useState({ player: 0, enemy: 0 });

  const { pongTableRef, ballRef, paddlePlayerRef, paddleEnemyRef, startPlayingPong } = useController(options);

  useEffect(() => {
    if (hasInitGame) {
      startPlayingPong();
    }
  }, [hasInitGame]);

  return (
    <S.PongTable ref={pongTableRef}>
      <S.ScorePlayer>{score.player}</S.ScorePlayer>
      <S.ScoreEnemy>{score.enemy}</S.ScoreEnemy>
      <S.Divider>
        {dots.map(dot => (
          <S.DividerDot key={dot} />
        ))}
      </S.Divider>
      <S.PaddlePlayer ref={paddlePlayerRef} />
      <S.PaddleEnemy ref={paddleEnemyRef} />
      <S.Ball ref={ballRef} />
    </S.PongTable>
  );
}
