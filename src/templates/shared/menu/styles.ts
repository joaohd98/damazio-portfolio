import styled from 'styled-components';

export const Menu = styled.nav`
  position: fixed;
  top: 10rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.primary};
  border-radius: 10rem;
  padding: 3rem 5rem;
  display: flex;
  gap: 5rem;
  z-index: 2;
`;

export const MenuLogo = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.background};
`;
export const MenuItem = styled.button``;
