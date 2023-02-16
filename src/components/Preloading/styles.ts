import styled from 'styled-components';
import { mediaMaxWidth } from '@/utils/media-query';

export const Preloading = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
`;

export const IndicatorText = styled.p`
  font-size: 12rem;
  font-weight: 400;
  font-family: Roboto;
  color: transparent;
  -webkit-text-stroke: 0.2rem ${({ theme }) => theme.primary};
  text-stroke: 0.2rem ${({ theme }) => theme.primary};
  z-index: 1;
`;

export const RainZone = styled.div`
  position: absolute;
  height: 30rem;
  width: 70rem;
  border-radius: 100%;

  ${mediaMaxWidth('mobile')`
    height: 50rem;
    width: 50rem;
  `}
`;

export const RainContainer = styled.div<{ deg: number }>`
  position: absolute;
  top: 40%;
  left: 40%;
  width: 10rem;
  height: 10rem;
  transform: rotate(${({ deg }) => deg}deg) translate(35rem) rotate(-${({ deg }) => deg}deg);

  ${({ deg }) => mediaMaxWidth('mobile')`
    transform: rotate(${deg}deg) translate(25rem) rotate(-${deg}deg);
  `}
`;

export const RainDrop = styled.span`
  position: absolute;
  top: calc(50% - 6rem);
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.primary};
  width: 0.25rem;
  height: 12rem;
  margin-top: -40vh;
  transform-origin: bottom;
  opacity: 0;
`;

export const RainDropReflection = styled(RainDrop)`
  top: calc(50% + 4rem);
  height: 10rem;
  transform-origin: top;
  margin-top: 40vh;
`;

export const RainPuddle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 2rem;
  height: 2rem;
  visibility: hidden;
  transform: translate(-50%, -50%) rotate(-30deg) skew(50deg) scale(0.8);
  border: 0.3rem solid ${({ theme }) => theme.primary};
  border-radius: 100%;
`;
