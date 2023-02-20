import styled from 'styled-components';
import { mediaMaxWidth } from '@/utils/media-query';

const Title = styled.h3`
  font-size: 8rem;
  font-family: 'LD Mono Line Solid';
  font-weight: 200;
  text-align: center;
  color: transparent;
  text-stroke: 0.1rem ${({ theme }) => theme.primary};
  -webkit-text-stroke: 0.1rem ${({ theme }) => theme.primary};

  ${mediaMaxWidth('mobile')`
    font-size: 6rem;
  `}
`;

export default Title;
