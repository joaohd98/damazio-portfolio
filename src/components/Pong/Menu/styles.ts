import styled from 'styled-components';
import { mediaMaxWidth } from '@/utils/media-query';

export const MenuOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const PongText = styled.p`
  position: absolute;
  top: 2rem;
  font-size: 6rem;
  font-family: 'Gotham HTF';
  color: transparent;
  left: 50%;
  transform: translateX(-50%);
  text-stroke: 0.2rem ${({ theme }) => theme.primary};
  -webkit-text-stroke: 0.2rem ${({ theme }) => theme.primary};
`;

export const TextButton = styled.button`
  font-family: 'Gotham HTF';
  font-size: 3rem;
  font-weight: 400;
  width: 30rem;
  height: 6rem;
  background: transparent;
  border: 0.5rem solid ${({ theme }) => theme.primary};
  border-radius: 1rem;
  color: ${({ theme }) => theme.primary};
  transition: scale 0.1s ease-in;
  text-transform: uppercase;
  cursor: pointer;

  :active {
    scale: 0.95;
  }
`;

export const RestartButon = styled(TextButton)`
  background: ${({ theme }) => theme.background};
  margin-top: 2rem;
`;

export const MenuText = styled.p`
  font-family: 'Gotham HTF';
  font-size: 3.5rem;
  font-weight: 500;

  ${mediaMaxWidth('mobile')`
    font-size: 3rem;
  `}
`;

export const OverlayText = styled(MenuText)`
  position: absolute;
  left: 5rem;
  bottom: 3rem;

  ${mediaMaxWidth('mobile')`
    font-size: 2.5rem;
  `}
`;
