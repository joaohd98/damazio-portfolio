import { forwardRef, useImperativeHandle } from 'react';
import * as S from './styles';
import useController from './controller';
import PongGameProps, { PongGameRef } from './props';

const dots = Array.from(Array(10).keys());

const PongGame = forwardRef<PongGameRef, PongGameProps>(({ options, onScore }, ref) => {
  const { pongTableRef, ballRef, paddlePlayerRef, paddleEnemyRef, startPlayingPong } = useController({
    options,
    onScore
  });

  useImperativeHandle(
    ref,
    () => ({
      startPlayingPong
    }),
    [options]
  );

  return (
    <S.PongTable ref={pongTableRef}>
      <S.ScorePlayer>{options.scorePlayer}</S.ScorePlayer>
      <S.ScoreEnemy>{options.scoreEnemy}</S.ScoreEnemy>
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
});

export default PongGame;
