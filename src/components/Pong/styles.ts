import styled from 'styled-components';
import { mediaMaxWidth } from '@/utils/media-query';

export const Pong = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const TableBound = styled.div`
  position: relative;
  width: 90rem;
  height: 60rem;
  border-style: solid;
  border-color: ${({ theme }) => theme.primary};
  border-top-width: 1rem;
  border-bottom-width: 1rem;
  border-left-width: 0;
  border-right-width: 0;
  overflow: hidden;

  ${mediaMaxWidth('mobile')`
    width: 90rem;
    height: 55rem;
  `}
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
