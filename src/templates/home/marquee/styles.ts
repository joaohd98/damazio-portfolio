import styled from 'styled-components';
import { mediaMaxWidth } from '@/utils/media-query';

export const Marquee = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  margin-bottom: 10rem;
`;

export const Container = styled.div`
  display: flex;
`;

export const MarqueeItem = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  word-spacing: -0.5ch;
`;

export const MarqueeText = styled.span`
  display: flex;
  font-family: 'LD Mono Line Solid';
  font-size: 42rem;
  color: transparent;
  text-stroke: 0.1rem ${({ theme }) => theme.primary};
  -webkit-text-stroke: 0.1rem ${({ theme }) => theme.primary};
  user-select: none;

  ${mediaMaxWidth('mobile')`
    font-size: 16rem;
  `}
`;

export const MarqueeDivider = styled.div`
  width: 5rem;
  height: 5rem;
  border: 0.1rem solid ${({ theme }) => theme.primary};
  border-radius: 100%;
  margin: auto 6rem;
  transform: translateY(3rem);

  ${mediaMaxWidth('mobile')`
    width: 4rem;
    height: 4rem;
    margin: auto 3rem;
    transform: translateY(1rem);
  `}
`;
