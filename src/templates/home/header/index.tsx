import * as S from './styles';
import useConst from './const';

export default function Header() {
  const t = useConst();

  return (
    <S.Header>
      <S.NameText>{t.name}</S.NameText>
      <S.JobText>{t.job}</S.JobText>
      <S.HightlightsRow>
        {t.highlights.map((highlight) => (
          <S.HightlightText key={highlight}>
            {highlight}
          </S.HightlightText>
        ))}
      </S.HightlightsRow>
    </S.Header>
  );
}
