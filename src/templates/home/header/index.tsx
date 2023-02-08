import { useMemo } from 'react';
import * as S from './styles';
import useConst from './const';
import useAnimation from './animation';

export default function Header() {
  const { setTextsRef, setCursorsRef, setHighlightsRef } = useAnimation();
  const { greetings, job, highlights } = useConst();

  const renderNameJob = useMemo(() => {
    const texts: [string, typeof greetings, typeof S.NameText][] = [
      ['grettings', greetings, S.NameText],
      ['job', job, S.JobText]
    ];

    return texts.map(([key, text, Text], index) => (
      <Text ref={setTextsRef(index)} key={key}>
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
