import styled, { css } from 'styled-components';
import Image from 'next/image';
import { mediaMaxWidth, mediaMinAspectRatio, mediaMinWidth } from '@/utils/media-query';
import SectionText from '@/components/SectionText';

export const ProjectsDesktop = styled.div`
  margin-top: 10rem;
  cursor: none;
`;

export const PinContainer = styled.div`
  display: flex;
  overflow: visible;
`;

export const ProjectTitle = styled(SectionText)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50vw;
`;

export const ProjectContainer = styled.div<{ position: { type: string; value: number } }>`
  position: relative;
  min-width: 50vw;
  min-height: 100vh;

  ${({ position }) =>
    position.value === 50
      ? css`
          ${ProjectCard} {
            top: 50%;
            transform: translate(calc(-50% + 15rem), -50%);
          }
        `
      : css`
          ${ProjectCard} {
            ${position.type}: ${position.value}vh;
          }
        `}
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(calc(-50% + 15rem));
  opacity: 0.2;
`;

export const ProjectName = styled.p`
  font-size: 4rem;
  font-family: 'LD Mono Line Solid';
  color: transparent;
  text-stroke: 0.1rem ${({ theme }) => theme.primary};
  -webkit-text-stroke: 0.1rem ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

export const ProjectContent = styled.div<{ isVertical: boolean }>`
  display: block;
  position: relative;

  ${({ isVertical }) =>
    isVertical
      ? css`
          width: 30rem;
          min-width: 100px;

          ${mediaMinWidth('desktop2560')`
            width: 55rem;
          `}

          ${mediaMinAspectRatio('ultrawide')`
            width: 40rem;
          `}

          ${mediaMaxWidth('desktop1024')`
            width: 50rem;
          `}
        `
      : css`
          width: 60rem;

          ${mediaMinWidth('desktop2560')`
            width: 90rem;
          `}

          ${mediaMaxWidth('desktop1024')`
            width: 80rem;
          `}
        `}
`;

export const ProjectImageContainer = styled.a`
  display: block;
  position: relative;
  cursor: none;
`;

export const ProjectImage = styled(Image)`
  height: 100%;
  width: 100%;
`;

export const ProjectTechnologies = styled.p`
  position: absolute;
  font-size: 1.6rem;
  font-family: 'Gotham HTF';
  color: transparent;
  text-stroke: 0.1rem ${({ theme }) => theme.primary};
  -webkit-text-stroke: 0.1rem ${({ theme }) => theme.primary};
  rotate: 270deg;
  transform-origin: 0 0;
  left: -4rem;
  top: 50%;
  transform: translateX(-50%);
`;

export const ProjectTryOutButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -4rem;
  bottom: -4rem;
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  rotate: 15deg;
  font-size: 2rem;
  font-family: 'Gotham HTF';
  font-weight: 800;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.background};
`;

export const ProjectRole = styled.p<{ isVertical: boolean }>`
  font-size: 1.6rem;
  font-family: 'Gotham HTF';
  color: transparent;
  text-stroke: 0.1rem ${({ theme }) => theme.primary};
  -webkit-text-stroke: 0.1rem ${({ theme }) => theme.primary};
  margin-top: 1.5rem;
  margin-left: ${({ isVertical }) => (isVertical ? '2' : '0')}rem;
  margin-right: ${({ isVertical }) => (isVertical ? '4' : '0')}rem;
  text-align: ${({ isVertical }) => (isVertical ? 'left' : 'center')};
`;
