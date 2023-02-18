import useAccordionTransition from '@/hooks/useAccordionTransition';
import useStateMultiObj from '@/hooks/useStateMultiObj';
import * as S from './styles';
import useConst from './const';

export default function Skills() {
  const [visible, setVisible] = useStateMultiObj<{ [key: number]: boolean }>({});
  const { setAccordionRef, accordionStyle, accordionVisibility } = useAccordionTransition();
  const { areas } = useConst();

  const changeVisibility = (index: number) => () => {
    const toValue = !visible[index];
    setVisible({ [index]: toValue });

    accordionVisibility(toValue, index, false);
  };

  return (
    <S.Skills>
      {areas.map(({ name, technologies }, index) => (
        <S.Accordion key={name} onClick={changeVisibility(index)}>
          <S.AccordionClickable>
            <S.AccordtionTitle>{name}</S.AccordtionTitle>
            <S.AccordionIcon isVisible={visible[index]} />
          </S.AccordionClickable>
          <S.AccordionList ref={setAccordionRef(index)} style={accordionStyle}>
            {technologies.map(technology => (
              <S.AccordionListText key={technology}>{technology}</S.AccordionListText>
            ))}
          </S.AccordionList>
        </S.Accordion>
      ))}
    </S.Skills>
  );
}
