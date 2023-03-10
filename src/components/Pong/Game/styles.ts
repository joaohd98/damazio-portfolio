import styled from 'styled-components';
import { mediaMaxWidth } from '@/utils/media-query';

export const PongTable = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Score = styled.p`
  position: absolute;
  top: 0;
  font-size: 7rem;
  font-family: 'LD Mono Line Solid';
  color: transparent;
  transform: translateX(-50%);
  text-stroke: 0.1rem ${({ theme }) => theme.primary};
  -webkit-text-stroke: 0.1rem ${({ theme }) => theme.primary};

  ${mediaMaxWidth('mobile')`
    font-size: 6rem;
  `}
`;

export const ScoreEnemy = styled(Score)`
  left: 60%;

  ${mediaMaxWidth('mobile')`
    left: 65%;
  `}
`;

export const ScorePlayer = styled(Score)`
  left: 40%;

  ${mediaMaxWidth('mobile')`
    left: 35%;
  `}
`;

export const Divider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  height: 100%;
  top: 0;
  left: calc(50%);
  transform: translateX(-50%);
`;

export const DividerDot = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  background-color: ${({ theme }) => theme.primary};

  ${mediaMaxWidth('mobile')`
    height: 2rem;
    width: 2rem;
  `}
`;

const Paddle = styled.div`
  position: absolute;
  height: 12rem;
  width: 1.5rem;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.primary};
  pointer-events: none;
`;

export const PaddleEnemy = styled(Paddle)`
  top: 50%;
  left: 2rem;
`;

export const PaddlePlayer = styled(Paddle)`
  top: 50%;
  right: 2rem;
`;

export const Ball = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 3rem;
  width: 3rem;
  background-color: ${({ theme }) => theme.primary};
  opacity: 0;
`;
