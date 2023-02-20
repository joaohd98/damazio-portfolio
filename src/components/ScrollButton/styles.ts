import styled from 'styled-components';

export const ScrollButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  width: 10rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.backgroundMenu};
  margin-top: 10rem;
`;

export const ArrowIcon = styled.span`
  position: relative;
  height: 50%;
  width: 7.5%;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.primary};

  :before,
  :after {
    content: '';
    position: absolute;
    top: 55%;
    background-color: ${({ theme }) => theme.primary};
    height: 60%;
    width: 80%;
    border-radius: 1rem;
  }

  :before {
    left: 125%;
    rotate: 45deg;
  }

  :after {
    right: 125%;
    rotate: 135deg;
  }
`;
