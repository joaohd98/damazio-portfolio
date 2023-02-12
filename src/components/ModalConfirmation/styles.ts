import styled from 'styled-components';
import { mediaMaxWidth } from '@/utils/media-query';

export const ModalConfirmation = styled.div`
  display: none;
  opacity: 0;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 3;
  background: ${({ theme }) => theme.backgroundOverlay};
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 40%;
  padding: 5rem;
  background: ${({ theme }) => theme.backgroundModal};
  cursor: auto;

  ${mediaMaxWidth('mobile')`
    width: 80%;
    padding: 5rem 3rem;
  `}
`;

export const CloseButton = styled.button`
  position: absolute;
  height: 4rem;
  width: 4rem;
  top: 3rem;
  right: 3rem;
  transition: scale 0.1s ease-in;
  cursor: pointer;

  :active {
    scale: 0.8;
  }
`;

export const CloseIcon = styled.div`
  background: ${({ theme }) => theme.thirdiary};
  width: 0.5rem;
  height: 100%;
  rotate: 45deg;
  margin: auto;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0.5rem;
    height: 100%;
    rotate: 270deg;
    background: ${({ theme }) => theme.thirdiary};
  }
`;

export const WarningContainer = styled.div`
  display: flex;
  width: 22rem;
  height: 22rem;
  border-radius: 100%;
  border: 0.8rem solid ${({ theme }) => theme.yellow};
  margin-bottom: 5rem;

  ${mediaMaxWidth('mobile')`
    width: 18rem;
    height: 18rem;
  `}
`;

export const WarningIcon = styled.div`
  position: relative;
  width: 2rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.yellow};
  border-radius: 10rem;
  margin: auto;
  transform: translateY(-2rem);

  :after {
    content: '';
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translateX(-50%);
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.yellow};
  }

  ${mediaMaxWidth('mobile')`
    height: 6rem;
  `}
`;

export const Title = styled.p`
  font-family: 'Gotham HTF';
  font-weight: 500;
  font-size: 4rem;
  margin-bottom: 2rem;

  ${mediaMaxWidth('mobile')`
    font-size: 2.5rem;
  `}
`;

export const Message = styled.p`
  font-family: 'Gotham HTF';
  font-weight: 300;
  font-size: 3rem;
  margin-bottom: 5rem;

  ${mediaMaxWidth('mobile')`
    font-size: 2rem;
    margin-bottom: 3rem;
  `}
`;

export const Anchor = styled.a`
  width: 50%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
  border-radius: 5rem;
  font-size: 3rem;
  font-family: Roboto;
  font-weight: 500;
  background-color: ${({ theme }) => theme.blueDark};
  color: ${({ theme }) => theme.primary};

  ${mediaMaxWidth('mobile')`
    width: 70%;
    font-size: 2.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  `}
`;
