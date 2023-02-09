import styled from 'styled-components';

export const ArrowCursor = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  display: none;
  pointer-events: none;
`;

export const ArrowButton = styled.div`
  width: 5rem;
  height: 5rem;
  margin-left: -2.5rem;
  margin-top: -2.5rem;
  background-color: red;
  border-radius: 100%;
`;
