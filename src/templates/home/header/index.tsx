import * as S from './styles';
import useConst from './const';
import useAnimation from './animation';

export default function Header() {
  const { setNameLettersRef, setJobLettersRef, setHighlightsRef, cursorRef } = useAnimation();
  const { name, job, highlights } = useConst();

  return (
    <S.Header>
      <S.TextContainer>
        <S.NameText>
          {name.map(({ value, id }) => (
            <S.LetterSpan key={id} ref={setNameLettersRef(id)}>
              {value}
            </S.LetterSpan>
          ))}
        </S.NameText>
        <S.JobText>
          {job.map(({ value, id }) => (
            <S.LetterSpan key={id} ref={setJobLettersRef(id)}>
              {value}
            </S.LetterSpan>
          ))}
        </S.JobText>
        <S.Cursor ref={cursorRef} />
      </S.TextContainer>
      <S.HightlightsRow>
        {highlights.map((highlight, index) => (
          <S.HightlightText key={highlight} ref={setHighlightsRef(index)}>
            {highlight}
          </S.HightlightText>
        ))}
      </S.HightlightsRow>
    </S.Header>
  );
}
