import styled, { css } from 'styled-components';

export const ArrowCursor = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  display: none;
  pointer-events: none;
`;

export const Arrow = styled.div<{ isLeft: boolean; isOverLink: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  width: 10rem;
  height: 10rem;
  transform: translate(-50%, -50%) rotate(${({ isLeft }) => (isLeft ? 180 : 0)}deg);
  transition: transform ${({ isOverLink }) => (isOverLink ? 0 : 0.2)}s ease-in;
`;

export const ArrowIcon = styled.div<{ isOverLink: boolean }>`
  position: absolute;
  top: 5rem;
  width: 100%;
  height: 1rem;
  background-color: ${({ theme }) => theme.primary};
  transition: width 0.2s ease-in;

  ::after,
  ::before {
    content: '';
    position: absolute;
    width: 50%;
    height: 1rem;
    right: -0.8rem;
    background-color: ${({ theme }) => theme.primary};
    transition-property: left, transform;
    transition-duration: 0.2s;
    transition-timing-function: ease-in;
  }

  ::after {
    top: -1.4rem;
    transform: rotate(45deg);
  }

  ::before {
    top: 1.4rem;
    transform: rotate(-45deg);
  }

  ${({ isOverLink }) =>
    isOverLink &&
    css`
      top: 4rem;
      width: 50%;

      ::after,
      ::before {
        left: 50%;
        transform: translateX(-50%) rotate(90deg);
      }
    `}
`;
