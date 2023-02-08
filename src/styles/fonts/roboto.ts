import { createGlobalStyle } from 'styled-components';

const GlobalRoboto = createGlobalStyle`

  @font-face {
    font-family: 'Roboto';
    src: url('./fonts/roboto/Roboto-black.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('./fonts/roboto/Roboto-bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('./fonts/roboto/Roboto-medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }


  @font-face {
    font-family: 'Roboto';
    src: url('./fonts/roboto/Roboto-light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }


  @font-face {
    font-family: 'Roboto';
    src: url('./fonts/roboto/Roboto-thin.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
  }
`;

export default GlobalRoboto;
