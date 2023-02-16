import { useState } from 'react';
import useEffectOnlyChanges from '@/hooks/useEffectOnlyChanges';
import * as S from './styles';
import useConst from './const';
import useAnimation from './animation';

export default function Menu() {
  const { items } = useConst();
  const { iconLinkRef, menuBackgroundRef, menuItemContainerRef, onChangeVisibility } = useAnimation();
  const [isOpen, setOpen] = useState(false);

  useEffectOnlyChanges(() => {
    onChangeVisibility(isOpen);
  }, [isOpen]);

  return (
    <S.Menu>
      <S.IconLink ref={iconLinkRef} onClick={() => setOpen(!isOpen)}>
        <S.IconMenu isOpen={isOpen} />
      </S.IconLink>
      <S.MenuItemsContainer ref={menuItemContainerRef}>
        {items.map(item => (
          <S.MenuItem key={item.text}>{item.text}</S.MenuItem>
        ))}
      </S.MenuItemsContainer>
      <S.MenuBackground ref={menuBackgroundRef} />
    </S.Menu>
  );
}
