import styled from 'styled-components';

export const Skills = styled.section`
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin-top: 30rem;
`;

export const Accordion = styled.div`
  width: 35rem;
  border: 0.2rem solid ${({ theme }) => theme.primary};
  height: fit-content;
  border-radius: 1rem;
  padding: 1rem 2rem 0;
`;

export const AccordionClickable = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const AccordtionTitle = styled.p`
  font-family: 'Gotham HTF';
  font-size: 3rem;
  font-weight: 400;
  text-transform: uppercase;
`;

export const AccordionIcon = styled.span<{ isVisible?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border: 0.15rem solid ${({ theme }) => theme.primary};
  border-radius: 100%;
  position: relative;

  :after,
  :before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.primary};
  }

  :before {
    height: 0.15rem;
    width: 60%;
  }

  :after {
    height: ${({ isVisible }) => (isVisible ? 0 : 60)}%;
    width: 0.1rem;
    transition: height 0.25s ease-in;
  }
`;

export const AccordionList = styled.li`
  font-family: 'Gotham HTF';
  font-size: 1.5rem;
  font-weight: 400;
  padding-top: 1rem;
`;

export const AccordionListText = styled.div`
  margin-bottom: 1rem;
`;
