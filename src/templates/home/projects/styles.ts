import styled from 'styled-components';

export const Projects = styled.section`
  margin-top: 10rem;
`;

export const PinContainer = styled.div`
  display: flex;
  overflow: visible;
`;

export const ProjectContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  font-size: 20rem;

  :nth-child(even) {
    background-color: red;
    color: yellow;
  }

  :nth-child(odd) {
    background-color: yellow;
    color: red;
  }
`;
