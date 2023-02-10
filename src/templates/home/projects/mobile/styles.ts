import styled from 'styled-components';
import Image from 'next/image';

export const ProjectsMobile = styled.div`
  margin: 5rem 5vh 10rem;
`;

export const ProjectTitle = styled.div`
  font-size: 6rem;
  font-family: 'LD Mono Line Solid';
  color: transparent;
  text-stroke: 0.1rem ${({ theme }) => theme.primary};
  -webkit-text-stroke: 0.1rem ${({ theme }) => theme.primary};
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProjectList = styled.ul`
  position: relative;
  width: 75vw;
  height: 70vh;
  margin-left: auto;
  margin-right: auto;
`;

export const ProjectCard = styled.li`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  :nth-child(1) {
    opacity: 0.5;
    scale: 0.9;
  }
`;

export const LinkLabel = styled.div`
  font-size: 2rem;
  font-family: 'Gotham HTF';
  font-weight: 600;
  position: absolute;
  top: 2rem;
  margin-left: 2rem;
  border: 0.1rem solid ${({ theme }) => theme.yellow};
  padding: 1rem 2rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.yellow};
  opacity: 0;
`;

export const NextLabel = styled(LinkLabel)`
  right: 0;
  margin-right: 2rem;
  border-color: ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.green};
`;

export const ProjectImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;

export const ProjectTextBackground = styled.div`
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.8));
  width: 100%;
  position: absolute;
  pointer-events: none;
  bottom: 0;
  left: 0;
  padding-top: 2.5rem;
  padding-bottom: 3rem;
  padding-left: 2.5rem;
`;

export const ProjectName = styled.p`
  font-size: 3rem;
  font-family: 'Gotham HTF';
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
`;

export const ProjectTechnologies = styled.p`
  font-size: 2rem;
  font-family: 'Gotham HTF';
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
`;

export const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;

  a,
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7.5rem;
    width: 7.5rem;
    font-size: 2rem;
    border-radius: 100%;
    background-color: transparent;
  }
`;

export const NextButton = styled.button`
  border: 0.2rem solid ${({ theme }) => theme.yellow};
  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;

  svg {
    fill: ${({ theme }) => theme.yellow};
  }

  :active {
    transform: scale(0.9);
  }
`;

export const LikeButton = styled.a`
  border: 0.2rem solid ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.green};
`;
