import styled from 'styled-components';
import { mediaMaxWidth } from '@/utils/media-query';

export const Projects = styled.section`
  ${mediaMaxWidth('mobile')`
    margin-bottom: 15rem;
  `}
`;

export const ProjectContainer = styled.div``;
