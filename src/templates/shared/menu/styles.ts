import styled, { css } from 'styled-components';

export const Menu = styled.nav`
  position: fixed;
  z-index: 2;
`;

export const IconLink = styled.a`
  display: block;
  position: relative;
  height: 5rem;
  width: 5rem;
  margin-top: 5rem;
  margin-left: 5rem;
  cursor: pointer;
  z-index: 3;
`;

export const IconMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 0.4rem;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  transition: background-color 0.2s ease-in;

  :before,
  :after {
    content: '';
    position: absolute;
    left: 0;
    height: 0.4rem;
    width: 100%;
    background-color: ${({ theme }) => theme.primary};
    transition: top 0.3s ease-in, rotate 0.3s ease-in, background-color 0.3s ease-in;
  }

  :before {
    top: -1.5rem;
  }

  :after {
    top: 1.5rem;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      background-color: ${({ theme }) => theme.transparent};

      :before,
      :after {
        background-color: ${({ theme }) => theme.secondary};
      }

      :before {
        top: 0;
        rotate: 45deg;
      }

      :after {
        top: 0;
        rotate: 140deg;
      }
    `}
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 0;
  right: 5rem;
`;

export const MenuBackground = styled.div`
  position: absolute;
  left: 2.5rem;
  top: 2.5rem;
  width: 10rem;
  height: 10rem;
  scale: 0;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.backgroundMenu};
  transform-origin: center;
`;

export const MenuItemsContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  gap: 5rem;
  visibility: hidden;
  opacity: 0;
  transform: translateY(5rem);
  z-index: 1;
`;

export const MenuItem = styled.a`
  display: block;
  font-size: 8rem;
  font-family: 'Gotham HTF';
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
`;
