import styled from 'styled-components';
import Image from 'next/image';

export const ProjectsMobile = styled.div<{ isMakingAnimation: boolean }>`
  margin: 5rem 5vh 10rem;
  pointer-events: ${({ isMakingAnimation }) => (isMakingAnimation ? 'none' : 'auto')};
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
  height: 65vh;
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
`;

export const PreviousCard = styled(ProjectCard)`
  opacity: 0.5;
  scale: 0.9;
  transform: translateX(100vw);
`;

export const NextCard = styled(ProjectCard)`
  opacity: 0.5;
  scale: 0.9;
  transform: translateX(-100vw);
`;

const Label = styled.div`
  position: absolute;
  top: 2rem;
  font-size: 2rem;
  font-family: 'Gotham HTF';
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border-width: 0.1rem;
  border-style: solid;
  opacity: 0;
`;
export const PreviousLabel = styled(Label)`
  right: 2rem;
  border-color: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.yellow};
`;

export const NextLabel = styled(Label)`
  left: 2rem;
  border-color: ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.green};
`;

export const ProjectImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
  object-position: top;
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

export const AnchorTryOut = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  font-size: 2rem;
  font-family: 'Gotham HTF';
  font-weight: 800;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.background};
  cursor: pointer;
`;
