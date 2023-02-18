import styled from 'styled-components';
import { mediaBetween, mediaMaxWidth, mediaMinWidth } from '@/utils/media-query';

export const Contact = styled.section`
  display: flex;
  margin: 20vh 10rem;
  overflow: hidden;

  ${mediaMinWidth('desktop2560')`
    margin-left: 30rem;
    margin-right: 30rem;
  `}

  ${mediaMaxWidth('desktop1024')`
    flex-direction: column-reverse;
    margin: 5rem;
  `}
`;

export const ContainerSocial = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  opacity: 0;
  transform: translateY(10rem);

  ${mediaBetween('mobile', 'desktop1024', 1)`
    flex-direction: row;
    gap: 30rem;
  `}
`;

export const ContainerPong = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;

  ${mediaMaxWidth('desktop1024')`
    margin-bottom: 10rem;
  `}
`;

export const PongBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
`;

export const GetInTouchText = styled.p`
  font-family: 'Gotham HTF';
  font-size: 6rem;
  font-weight: 500;
  margin-bottom: 15rem;
  max-width: 70rem;

  ${mediaMaxWidth('desktop1024')`
    font-size: 5rem;
  `}

  ${mediaMaxWidth('mobile')`
    font-size: 4rem;
    margin-bottom: 8rem;
  `}
`;

export const LinkContainer = styled.div``;

export const EmailText = styled.p`
  font-family: 'Gotham HTF';
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 1.5rem;

  ${mediaMaxWidth('desktop1024')`
    font-size: 4rem;  
  `}
`;

export const EmailValue = styled.a`
  display: block;
  font-family: 'Gotham HTF';
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 0.5rem;

  ${mediaMaxWidth('desktop1024')`
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

  ${mediaMaxWidth('desktop1024')`
    width: 8rem;
    height: 8rem;
  `}

  svg {
    width: 3rem;
    height: 3rem;

    ${mediaMaxWidth('desktop1024')`
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
