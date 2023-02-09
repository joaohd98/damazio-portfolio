import { useMemo } from 'react';
import * as S from './styles';
import useConst from './const';
import useAnimation from './animation';

export default function Header() {
  const { setTextsRef, setCursorsRef, setHighlightsRef } = useAnimation();
  const { greetings, job, highlights } = useConst();

  const renderNameJob = useMemo(() => {
    const words: [string, typeof greetings, typeof S.NameText][] = [
      ['grettings', greetings, S.NameText],
      ['job', job, S.JobText]
    ];

    return words.map(([key, word, Text], indexWord) => (
      <Text ref={setTextsRef(indexWord)} key={key}>
        {word.map(({ id, letter }) => (
          <S.LetterSpan key={id} isEmpty={letter === ' '}>
            {letter}
          </S.LetterSpan>
        ))}
        <S.Cursor ref={setCursorsRef(indexWord)} />
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
