import { createGlobalStyle } from 'styled-components';

const GlobalRoboto = createGlobalStyle`

  @font-face {
    font-family: 'Roboto';
    src: url('./fonts/roboto/roboto-black.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('./fonts/roboto/roboto-bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('./fonts/roboto/roboto-medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }


  @font-face {
    font-family: 'Roboto';
    src: url('./fonts/roboto/roboto-light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }


  @font-face {
    font-family: 'Roboto';
    src: url('./fonts/roboto/roboto-thin.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
  }
`;

export default GlobalRoboto;
