import gsap from 'gsap';
import ScrollButtonProps from './props';
import * as S from './styles';

export default function ScrollButton({ target, className }: ScrollButtonProps) {
  const onClick = () => {
    gsap.to(window, { scrollTo: target, duration: 0.4 });
  };

  return (
    <S.ScrollButton className={className} onClick={onClick}>
      <S.ArrowIcon />
    </S.ScrollButton>
  );
}
