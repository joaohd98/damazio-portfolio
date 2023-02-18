import styled from 'styled-components';

export const Skills = styled.section`
  display: flex;
  justify-content: space-between;
  margin-left: 10rem;
  margin-right: 10rem;
`;

export const Accordion = styled.div`
  width: 35rem;
  height: fit-content;
  border-radius: 1rem;
  padding: 1rem 2rem 0;
  color: ${({ theme }) => theme.backgroundMenu};
  background-color: ${({ theme }) => theme.primary};
  border-left: 1.4rem solid rgba(0, 0, 0, 0.12);
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
  border: 0.15rem solid ${({ theme }) => theme.backgroundMenu};
  border-radius: 100%;
  position: relative;

  :after,
  :before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.backgroundMenu};
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

export const AccordionList = styled.ul`
  padding-top: 1rem;
`;

export const AccordionListText = styled.li`
  position: relative;
  font-family: 'Gotham HTF';
  font-size: 1.5rem;
  font-weight: 400;
  padding-left: 2rem;
  padding-bottom: 2rem;

  :first-child {
    margin-top: 1rem;
  }

  :before,
  :after {
    content: '';
    position: absolute;
    top: 0.2rem;
  }

  :before {
    left: 0;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.primary};
    border: 0.1rem solid ${({ theme }) => theme.backgroundMenu};
    z-index: 1;
  }

  :not(:last-child) {
    :after {
      left: 0.59rem;
      height: 100%;
      width: 0.05rem;
      background-color: ${({ theme }) => theme.backgroundMenu};
    }
  }
`;
