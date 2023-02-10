import styled from 'styled-components';
import Image from 'next/image';

export const ProjectsMobile = styled.div`
  margin-top: 5rem;
  margin-left: 5vh;
  margin-right: 5vh;
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

export const ButtonsRow = styled.div``;

export const NextButton = styled.button``;

export const LikeButton = styled.a`
  width: 20rem;
  height: 20rem;
  font-size: 10rem;
`;
