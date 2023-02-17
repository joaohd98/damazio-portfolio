import styled, { css } from 'styled-components';

export const Dropdown = styled.div``;

export const DropdownTitle = styled.p`
  display: flex;
  font-size: 3rem;
  font-family: 'Gotham HTF';
  font-weight: 400;
`;

export const DropdownArrow = styled.span<{ isOpen: boolean }>`
  display: block;
  position: relative;
  width: 4rem;
  height: 3.5rem;
  transition: rotate 0.2s ease-in;
  rotate: ${({ isOpen }) => (isOpen ? 180 : 0)}deg;

  :before,
  :after {
    content: '';
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? 45 : 55)}%;
    transform: translateY(-50%);
    width: 25%;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.primary};
    transition: top 0.2s ease-in;
  }

  :before {
    left: 1.2rem;
    rotate: 310deg;
  }

  :after {
    right: 1.2rem;
    rotate: 45deg;
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  margin-top: 1rem;
`;

export const DropdownOption = styled.a<{ isCurrent: boolean }>`
  font-size: 1.5rem;
  font-family: 'Gotham HTF';
  font-weight: 500;
  padding: 1rem 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.backgroundMenu};
  cursor: pointer;
  transition-property: background-color, color;
  transition-timing-function: ease-in;
  transition-duration: 0.2s;

  :hover {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
  }

  ${({ isCurrent }) =>
    isCurrent &&
    css`
      pointer-events: none;
      opacity: 0.8;
    `};
`;
