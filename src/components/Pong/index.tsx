import * as S from './styles';

const dots = Array.from(Array(10).keys());

export default function Pong() {
  return (
    <S.Pong>
      <S.Canvas>
        <S.ScorePlayer>2</S.ScorePlayer>
        <S.ScoreEnemy>5</S.ScoreEnemy>
        <S.Divider>
          {dots.map(dot => (
            <S.DividerDot key={dot} />
          ))}
        </S.Divider>
        <S.PaddlePlayer />
        <S.PaddleEnemy />
        <S.Ball />
      </S.Canvas>
    </S.Pong>
  );
}
