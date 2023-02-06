import { createGlobalStyle } from 'styled-components';

const GlobalMonoLine = createGlobalStyle`
  @font-face {
    font-family: 'LD Mono Line Outline';
    src: url('./fonts/ld-mono-line/LD-mono-line-outline-regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'LD Mono Line Solid';
    src: url('./fonts/ld-mono-line/LD-mono-line-solid-regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
`;

export default GlobalMonoLine;
