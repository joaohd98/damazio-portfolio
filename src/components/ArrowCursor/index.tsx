import { useState } from 'react';
import * as S from './styles';
import useAnimation from './animation';

export default function ArrowCursor() {
  const [isCursorLeft, setCursorLeft] = useState(false);
  const [isOverLink, setOverLink] = useState(false);

  const { arrowRef } = useAnimation(setCursorLeft, setOverLink);

  return (
    <S.ArrowCursor ref={arrowRef}>
      <S.Arrow isLeft={isCursorLeft} isOverLink={isOverLink}>
        <S.ArrowIcon isOverLink={isOverLink} />
      </S.Arrow>
    </S.ArrowCursor>
  );
}
