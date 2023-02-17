import DropdownProps from '@/components/Dropdown/props';
import { useState } from 'react';
import useAccordionTransition from '@/hooks/useAccordionTransition';
import useEffectOnlyChanges from '@/hooks/useEffectOnlyChanges';
import * as S from './styles';

export default function Dropdown<T>({ items, getHref, getText, isCurrent, className }: DropdownProps<T>) {
  const [isOpen, setOpen] = useState(false);
  const { setAccordionRef, accordionStyle, accordionVisibility } = useAccordionTransition();

  useEffectOnlyChanges(() => {
    accordionVisibility(isOpen);
  }, [isOpen]);

  const current = items.find(item => isCurrent(item));
  const currentName = current ? getText(current) : '';

  return (
    <S.Dropdown className={className} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <S.DropdownTitle>
        {currentName}
        <S.DropdownArrow isOpen={isOpen} />
      </S.DropdownTitle>
      <S.DropdownContainer style={accordionStyle} ref={setAccordionRef()}>
        {items.map(item => {
          const href = getHref(item);
          const text = getText(item);

          return (
            <S.DropdownOption key={text} href={href} isCurrent={isCurrent(item)}>
              {text}
            </S.DropdownOption>
          );
        })}
      </S.DropdownContainer>
    </S.Dropdown>
  );
}
