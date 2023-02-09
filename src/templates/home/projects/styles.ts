import styled, { css } from 'styled-components';
import Image from 'next/image';
import { mediaMaxWidth, mediaMinAspectRatio, mediaMinWidth } from '@/utils/media-query';

export const Projects = styled.section`
  margin-top: 10rem;
`;

export const PinContainer = styled.div`
  display: flex;
  overflow: visible;
  margin-left: 50vw;
  margin-right: 50vw;
`;

export const ProjectContainer = styled.div<{ position: number }>`
  position: relative;
  min-width: 50vw;
  min-height: 100vh;

  ${({ position }) =>
    position === 50
      ? css`
          div {
            top: 50%;
            transform: translate(-50%, -50%);
          }
        `
      : css`
          div {
            top: ${position}rem;

            ${mediaMaxWidth('desktop1920')`
              top: ${position * 0.8}rem;
            `}

            ${mediaMinAspectRatio('ultrawide')`
              top: ${position * 0.6}rem;
            `}
          }
        `}
`;

export const ProjectCard = styled.div<{ isVertical: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const ProjectName = styled.p`
  font-size: 5rem;
  font-family: 'LD Mono Line Solid';
  color: transparent;
  text-stroke: 0.1rem ${({ theme }) => theme.primary};
  -webkit-text-stroke: 0.1rem ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

export const ProjectImage = styled(Image)<{ isVertical: boolean }>`
  height: 100%;
  width: 100%;

  ${({ isVertical }) =>
    isVertical
      ? css`
          width: 30rem;

          ${mediaMinWidth('desktop2560')`
            width: 55rem;
          `}

          ${mediaMinAspectRatio('ultrawide')`
            width: 40rem;
          `}
        `
      : css`
          width: 60rem;

          ${mediaMinWidth('desktop2560')`
            width: 90rem;
          `}
        `}
`;

export const ProjectTryOutButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
`;
