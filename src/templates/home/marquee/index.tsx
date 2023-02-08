import { Fragment, useMemo } from 'react';
import * as S from './styles';
import useAnimation from './animation';
import useConst from './const';

export default function Marquee() {
  const { words } = useConst();
  const { marqueeRef } = useAnimation();

  const content = useMemo(
    () =>
      words.map(word => (
        <Fragment key={word}>
          {word}
          <S.MarqueeDivider />
        </Fragment>
      )),
    []
  );

  return (
    <S.Marquee>
      <S.Container ref={marqueeRef}>
        {[0, 1, 2].map(id => (
          <S.MarqueeItem key={id}>
            <S.MarqueeText>{content}</S.MarqueeText>
          </S.MarqueeItem>
        ))}
      </S.Container>
    </S.Marquee>
  );
}
