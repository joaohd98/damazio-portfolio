import ArrowCursorProps from '@/components/ArrowCursor/props';
import * as S from './styles';
import useAnimation from './animation';

export default function ArrowCursor({ onClick }: ArrowCursorProps) {
  const { arrowRef } = useAnimation(onClick);

  return (
    <S.ArrowCursor ref={arrowRef}>
      <S.ArrowButton />
    </S.ArrowCursor>
  );
}
