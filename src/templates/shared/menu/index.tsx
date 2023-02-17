import { useState } from 'react';
import useEffectOnlyChanges from '@/hooks/useEffectOnlyChanges';
import Dropdown from '@/components/Dropdown';
import useSections from '@/constants/section';
import * as S from './styles';
import useConst from './const';
import useAnimation from './animation';

export default function Menu() {
  const sections = useSections();
  const { languages } = useConst();
  const { iconLinkRef, menuBackgroundRef, menuItemContainerRef, onChangeVisibility } = useAnimation();
  const [isOpen, setOpen] = useState(false);

  useEffectOnlyChanges(() => {
    onChangeVisibility(isOpen);
  }, [isOpen]);

  return (
    <>
      <S.IconLink ref={iconLinkRef} onClick={() => setOpen(!isOpen)}>
        <S.IconMenu isOpen={isOpen} />
      </S.IconLink>
      <S.Menu>
        <S.MenuItemsContainer ref={menuItemContainerRef}>
          <S.DropdownContainer>
            <Dropdown
              items={languages}
              getText={({ name }) => name}
              getHref={({ href }) => href}
              isCurrent={({ isCurrent }) => isCurrent}
            />
          </S.DropdownContainer>
          {Object.values(sections).map(item => (
            <S.MenuItem key={item.text} href={item.href} onClick={() => setOpen(false)}>
              {item.text}
            </S.MenuItem>
          ))}
        </S.MenuItemsContainer>
        <S.MenuBackground ref={menuBackgroundRef} />
      </S.Menu>
    </>
  );
}
