import useAccordionTransition from '@/hooks/useAccordionTransition';
import useStateMultiObj from '@/hooks/useStateMultiObj';
import * as S from './styles';
import useConst from './const';
import useAnimation from './animation';

export default function Skills() {
  const [visible, setVisible] = useStateMultiObj<{ [key: number]: boolean }>({});
  const { setAccordionRef, accordionStyle, accordionVisibility } = useAccordionTransition();
  const { areas } = useConst();
  const { setContainersRef } = useAnimation();

  const changeVisibility = (index: number) => () => {
    const toValue = !visible[index];
    setVisible({ [index]: toValue });

    accordionVisibility(toValue, index, false);
  };

  return (
    <S.Skills>
      {areas.map(({ name, technologies }, index) => {
        const isVisible = visible[index];

        return (
          <S.Accordion key={name} ref={setContainersRef(index)}>
            <S.AccordionClickable onClick={changeVisibility(index)}>
              <S.AccordtionTitle>{name}</S.AccordtionTitle>
              <S.AccordionIcon isVisible={isVisible} />
            </S.AccordionClickable>
            <S.AccordionList ref={setAccordionRef(index)} style={accordionStyle}>
              {technologies.map(technology => (
                <S.AccordionListText key={technology} isVisible={isVisible}>
                  {technology}
                </S.AccordionListText>
              ))}
            </S.AccordionList>
          </S.Accordion>
        );
      })}
    </S.Skills>
  );
}
