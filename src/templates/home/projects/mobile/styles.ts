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
  position: absolute;
  left: 0;
  top: 0;
  max-width: 75vw;
  max-height: 70vh;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 1rem;
`;

export const ProjectName = styled.p`
  position: absolute;
  bottom: 0;
`;

export const ProjectTechnologies = styled.p`
  position: absolute;
  bottom: 0;
`;

export const ButtonsRow = styled.div``;

export const NextButton = styled.button``;

export const LikeButton = styled.a`
  width: 20rem;
  height: 20rem;
  font-size: 10rem;
`;
