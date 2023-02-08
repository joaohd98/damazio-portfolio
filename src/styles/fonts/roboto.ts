import { createGlobalStyle } from 'styled-components';

const GlobalRoboto = createGlobalStyle`

  @font-face {
    font-family: 'Roboto';
    src: url('./fonts/roboto/Roboto-Black.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('./fonts/roboto/Roboto-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('./fonts/roboto/Roboto-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('./fonts/roboto/Roboto-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }


  @font-face {
    font-family: 'Roboto';
    src: url('./fonts/roboto/Roboto-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }


  @font-face {
    font-family: 'Roboto';
    src: url('./fonts/roboto/Roboto-Thin.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
  }
`;

export default GlobalRoboto;
