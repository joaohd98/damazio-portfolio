import * as S from './styles';
import useAnimation from './animation';
import drops from './drops';

export default function Preloading() {
  const { setRainsRef } = useAnimation(drops.length);

  return (
    <S.Preloading>
      <S.RainZone>
        {drops.map((deg, index) => (
          <S.RainContainer key={deg} deg={deg} ref={setRainsRef(index)}>
            <S.RainPuddle />
            <S.RainDrop />
            <S.RainDropReflection />
          </S.RainContainer>
        ))}
      </S.RainZone>
      <S.IndicatorText>46%</S.IndicatorText>
    </S.Preloading>
  );
}
