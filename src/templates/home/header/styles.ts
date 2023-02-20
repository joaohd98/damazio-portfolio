import styled, { css } from 'styled-components';
import { mediaMaxWidth } from '@/utils/media-query';

export const Header = styled.header`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const NameText = styled.h1`
  font-family: 'Gotham HTF';
  font-weight: 400;
  font-size: 12rem;
  margin-bottom: -1rem;
  color: ${({ theme }) => theme.primary};
  position: relative;

  ${mediaMaxWidth('mobile')`
    font-size: 5rem;
    margin-bottom: 0;
  `}
`;

export const JobText = styled.h2`
  font-family: 'Gotham HTF';
  font-weight: 300;
  font-size: 10rem;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.primary};
  position: relative;

  ${mediaMaxWidth('mobile')`
    font-size: 4rem;
    margin-bottom: 3rem;
  `}
`;

export const LetterSpan = styled.span<{ isEmpty: boolean }>`
  display: none;

  :first-of-type {
    display: inline-block;
    opacity: 0;
  }

  ${({ isEmpty }) =>
    isEmpty &&
    css`
      min-width: 4rem;

      ${mediaMaxWidth('mobile')`
          min-width: 1.5rem;
      `}
    `}
`;

export const Cursor = styled.div`
  position: absolute;
  height: 100%;
  width: 0.2rem;
  background-color: ${({ theme }) => theme.secondary};
  left: -2.5rem;
  top: 1rem;
  display: none;

  ${mediaMaxWidth('mobile')`
    top: 0.5rem;
  `}
`;

export const HightlightsRow = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaMaxWidth('mobile')`
  `}
`;

export const HightlightText = styled.span`
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 4rem;
  visibility: hidden;
  opacity: 0;
  transform: translateY(1rem);
  margin-left: 2rem;
  margin-right: 2rem;

  ${mediaMaxWidth('mobile')`
    font-size: 2rem;
    font-weight: 400;
  `}
`;

export const ScrollButtonContainer = styled.div`
  position: absolute;
  bottom: 10%;
  opacity: 0;
  visibility: hidden;

  ${mediaMaxWidth('mobile')`
    bottom: 15%;
  `}
`;
