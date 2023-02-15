import styled from 'styled-components';

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
  border-top: 1rem solid ${({ theme }) => theme.primary};
  border-bottom: 1rem solid ${({ theme }) => theme.primary};
  overflow: hidden;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
