import styled from 'styled-components';
import { mediaMaxWidth } from '@/utils/media-query';
import SectionText from '@/components/SectionText';

export const Skills = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 10rem;

  ${mediaMaxWidth('mobile')`
    margin-bottom: 5rem;
  `}
`;

export const Title = styled(SectionText)`
  opacity: 0;
`;

export const AccordionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;

  ${mediaMaxWidth('mobile')`
    gap: 3rem;
    margin-left: 0;
    margin-right: 0;
    flex-direction: column;
  `}
`;

export const Accordion = styled.div`
  width: 35rem;
  height: fit-content;
  border-radius: 1rem;
  padding: 1rem 2rem 0;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.background};
  border: 0.2rem solid ${({ theme }) => theme.primary};
  opacity: 0;
  transform: translateY(5rem);

  ${mediaMaxWidth('mobile')`
    padding: 1.5rem 2.5rem 0;
    width: 100%;
  `}
`;

export const AccordionClickable = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const AccordtionTitle = styled.p`
  font-family: 'Gotham HTF';
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: uppercase;
`;

export const AccordionIcon = styled.span<{ isVisible?: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border: 0.15rem solid ${({ theme }) => theme.primary};
  border-radius: 100%;

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

export const AccordionList = styled.ul`
  padding-top: 1rem;
`;

export const AccordionListText = styled.li<{ isVisible?: boolean }>`
  position: relative;
  font-family: 'Gotham HTF';
  font-size: 1.5rem;
  font-weight: 400;
  padding-left: 2rem;
  padding-bottom: 2rem;

  ${mediaMaxWidth('mobile')`
    font-size: 2rem;
    padding-left: 2.5rem;
    padding-bottom: 2.5rem;
  `}

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
    background-color: ${({ theme }) => theme.background};
    border: 0.1rem solid ${({ theme }) => theme.primary};
    z-index: 1;

    ${mediaMaxWidth('mobile')`
      border-width: 1px;
    `}
  }

  :not(:last-child) {
    :after {
      left: 0.58rem;
      height: calc(100% + 1rem);
      width: 0.05rem;
      background-color: ${({ theme }) => theme.primary};

      ${mediaMaxWidth('mobile')`
        width: 1px;
      `}
    }
  }
`;
