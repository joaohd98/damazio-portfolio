import styled, { css } from 'styled-components';
import { mediaMaxWidth, mediaMinWidth } from '@/utils/media-query';

export const IconLink = styled.a`
  position: fixed;
  height: 5rem;
  width: 5rem;
  top: 5rem;
  left: 5rem;
  cursor: pointer;
  z-index: 3;
  mix-blend-mode: difference;
`;

export const IconMenu = styled.span<{ isOpen: boolean }>`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 0.4rem;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  transition: background-color 0.2s ease-in;
  z-index: 2;

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

export const Menu = styled.menu`
  display: block;
  position: fixed;
  z-index: 2;
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

  ${mediaMaxWidth('mobile')`
    gap: 6rem;
  `}
`;

export const MenuItem = styled.a`
  position: relative;
  display: block;
  font-size: 8rem;
  font-family: 'Gotham HTF';
  letter-spacing: -0.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  transition: color 0.2s ease-in, scale 0.2s ease-in;
  cursor: pointer;

  :after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 1.5rem;
    background-color: ${({ theme }) => theme.backgroundMenu};
    opacity: 0.5;
    width: 0;
    transition: width 0.2s ease-in;
  }

  :active {
    scale: 1.2;
  }

  ${mediaMaxWidth('mobile')`
    font-size: 7rem;
  `}

  ${mediaMinWidth('mobile', 1)`
    :hover {
      color: ${({ theme }) => theme.secondary};
  
      :after {
        width: 100%;
      }
    }  
  `}
`;
