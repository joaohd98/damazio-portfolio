import styled from 'styled-components';
import { mediaMaxWidth } from '@/utils/media-query';

export const Header = styled.header`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const NameText = styled.h1`
  font-family: "Gotham HTF";
  font-weight: 400;
  font-size: 15rem;
  margin-bottom: -2.5rem;
  color: ${({ theme }) => theme.primary};
  
  ${mediaMaxWidth('mobile')`
    font-size: 4rem;
    margin-bottom: 0;
  `}
`;

export const JobText = styled.h2`
  font-family: "Gotham HTF";
  font-weight: 300;
  font-size: 12rem;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.primary};

  ${mediaMaxWidth('mobile')`
    font-size: 4rem;
    margin-bottom: 3rem;
  `}
`;

export const HightlightsRow = styled.div`
  display: flex;
  gap: 7rem;

  ${mediaMaxWidth('mobile')`
    gap: 4rem;
  `}
`;

export const HightlightText = styled.span`
  font-family: "Roboto";
  font-weight: 300;
  font-size: 4rem;

  ${mediaMaxWidth('mobile')`
    font-size: 2.2rem;
  `}
`;
