import styled, { css } from 'styled-components';
import Image from 'next/image';
import { mediaMinWidth } from '@/utils/media-query';

export const Projects = styled.section`
  margin-top: 10rem;
`;

export const PinContainer = styled.div`
  display: flex;
  overflow: visible;
  margin-left: 50vw;
  margin-right: 50vw;
`;

export const ProjectContainer = styled.div`
  position: relative;
  min-width: 50vw;
  min-height: 100vh;
`;

export const ProjectCard = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const ProjectName = styled.p`
  font-size: 10rem;
`;

export const ProjectImage = styled(Image)<{ width: number; height: number }>`
  height: 100%;
  width: 100%;

  ${({ width, height }) =>
    width > height
      ? css`
          width: 60rem;

          ${mediaMinWidth('desktop2560')`
            width: 90rem;
          `}
        `
      : css`
          width: 30rem;

          ${mediaMinWidth('desktop2560')`
            width: 60rem;
          `}
        `}
`;

export const ProjectTryOutButton = styled.button``;
