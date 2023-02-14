import * as S from './styles';
import useAnimation from './animation';

const dots = Array.from(Array(10).keys());

export default function Pong() {
  const { containerRef, paddlePlayerRef, paddleEnemyRef, ballRef } = useAnimation();

  return (
    <S.Pong>
      <S.Container ref={containerRef}>
        <S.ScorePlayer>2</S.ScorePlayer>
        <S.ScoreEnemy>5</S.ScoreEnemy>
        <S.Divider>
          {dots.map(dot => (
            <S.DividerDot key={dot} />
          ))}
        </S.Divider>
        <S.PaddlePlayer ref={paddlePlayerRef} />
        <S.PaddleEnemy ref={paddleEnemyRef} />
        <S.Ball ref={ballRef} />
      </S.Container>
    </S.Pong>
  );
}
