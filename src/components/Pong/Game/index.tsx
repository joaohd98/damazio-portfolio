import useEffectOnlyChanges from '@/hooks/useEffectOnlyChanges';
import * as S from './styles';
import useController from './controller';
import PongGameProps from './props';

const dots = Array.from(Array(10).keys());

export default function PongGame({ hasInitGame, options, scorePlayer, scoreEnemy, onScore }: PongGameProps) {
  const { pongTableRef, ballRef, paddlePlayerRef, paddleEnemyRef, startPlayingPong } = useController({
    options,
    onScore
  });

  useEffectOnlyChanges(() => {
    if (hasInitGame) {
      startPlayingPong();
    }
  }, [hasInitGame]);

  useEffectOnlyChanges(() => {
    startPlayingPong();
  }, [options.firstPlaying]);

  return (
    <S.PongTable ref={pongTableRef}>
      <S.ScorePlayer>{scorePlayer}</S.ScorePlayer>
      <S.ScoreEnemy>{scoreEnemy}</S.ScoreEnemy>
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
