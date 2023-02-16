import * as S from './styles';
import useConst from './const';

export default function Menu() {
  const { items } = useConst();

  return (
    <S.Menu>
      <S.MenuLogo>JD</S.MenuLogo>
      {items.map(item => (
        <S.MenuItem>{item.text}</S.MenuItem>
      ))}
    </S.Menu>
  );
}
