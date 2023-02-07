import { useMemo } from 'react';
import * as S from './styles';
import useConst from './const';
import useAnimation from './animation';

export default function Header() {
  const { setTextsRef, setCursorsRef, setHighlightsRef } = useAnimation();
  const { greetings, job, highlights } = useConst();

  const renderNameJob = useMemo(() => {
    const texts: [typeof greetings, typeof S.NameText][] = [
      [greetings, S.NameText],
      [job, S.JobText]
    ];

    return texts.map(([text, Text], index) => (
      <Text ref={setTextsRef(index)}>
        {text.map(({ value, id }) => (
          <S.LetterSpan key={id} isEmpty={value === ' '}>
            {value}
          </S.LetterSpan>
        ))}
        <S.Cursor ref={setCursorsRef(index)} />
      </Text>
    ));
  }, []);

  return (
    <S.Header>
      {renderNameJob}
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
