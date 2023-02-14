import styled from 'styled-components';
import { mediaMaxWidth } from '@/utils/media-query';

export const Contact = styled.section`
  display: flex;
  min-width: 100vw;
  min-height: 100vh;

  ${mediaMaxWidth('mobile')`
    min-width: auto;
    min-height: auto;
    flex-direction: column-reverse;
    margin-bottom: 10rem;
  `}
`;

export const ContainerSocial = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-right: 20rem;

  ${mediaMaxWidth('mobile')`
    padding-right: 7.5rem;
    padding-left: 7.5rem;
  `}
`;

export const WrapperSocial = styled.div`
  padding-left: 15rem;

  ${mediaMaxWidth('mobile')`
    padding-left: 0;
  `}
`;

export const ContainerPong = styled.div`
  flex: 1;

  ${mediaMaxWidth('mobile')`
  `}
`;

export const GetInTouchText = styled.p`
  font-family: 'Gotham HTF';
  font-size: 6rem;
  font-weight: 500;
  margin-bottom: 15rem;

  ${mediaMaxWidth('mobile')`
    font-size: 4rem;
    margin-bottom: 8rem;
  `}
`;

export const EmailText = styled.p`
  font-family: 'Gotham HTF';
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
`;

export const EmailValue = styled.a`
  display: block;
  font-family: 'Gotham HTF';
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 0.5rem;

  ${mediaMaxWidth('mobile')`
    font-size: 2.5rem;
    margin-bottom: 1rem;
  `}
`;

export const SocialMediaRow = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 10rem;

  ${mediaMaxWidth('mobile')`
    gap: 5rem;
    margin-top: 8rem;
  `}
`;

export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  width: 6rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.background};
  transition: background-color 0.4s linear;

  svg {
    width: 3rem;
    height: 3rem;

    ${mediaMaxWidth('mobile')`
      width: 5rem;
      height: 5rem;
    `}
  }

  path {
    fill: ${({ theme }) => theme.primary};
    transition: fill 0.4s linear;
  }

  :hover {
    background-color: ${({ theme }) => theme.primary};

    path {
      fill: ${({ theme }) => theme.background};
    }
  }
`;
