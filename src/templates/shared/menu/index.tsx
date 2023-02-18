import { useState } from 'react';
import useEffectOnlyChanges from '@/hooks/useEffectOnlyChanges';
import Dropdown from '@/components/Dropdown';
import useSections from '@/constants/section';
import gsap from 'gsap';
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

  const onPressMenu = (y: string) => {
    gsap.to(window, { duration: 0, scrollTo: { y, offsetY: 50 } });
    setOpen(false);
  };

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
            <S.MenuItem key={item.text} onClick={() => onPressMenu(item.href)}>
              {item.text}
            </S.MenuItem>
          ))}
        </S.MenuItemsContainer>
        <S.MenuBackground ref={menuBackgroundRef} />
      </S.Menu>
    </>
  );
}
