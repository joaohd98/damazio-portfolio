import { createGlobalStyle } from 'styled-components';

const GlobalGotham = createGlobalStyle`
  @font-face {
    font-family: 'Gotham HTF';
    src: url('./fonts/gotham/gotham-htf-ultra.woff') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham HTF';
    src: url('./fonts/gotham/gotham-htf-black.woff') format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham HTF';
    src: url('./fonts/gotham/gotham-htf-bold.woff') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham HTF';
    src: url('./fonts/gotham/gotham-htf-medium.woff') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham HTF';
    src: url('./fonts/gotham/gotham-htf-book.woff') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham HTF';
    src: url('./fonts/gotham/gotham-htf-light.woff') format('truetype');
    font-weight: 300;
    font-style: normal;
  }


  @font-face {
    font-family: 'Gotham HTF';
    src: url('./fonts/gotham/gotham-htf-thin.woff') format('truetype');
    font-weight: 200;
    font-style: normal;
  }
`;

export default GlobalGotham;
