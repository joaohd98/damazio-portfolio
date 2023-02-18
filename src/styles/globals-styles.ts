import { createGlobalStyle } from 'styled-components';
import { mediaMaxWidth } from '@/utils/media-query';

const GlobalStyles = createGlobalStyle`
   * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html,
  body {
    background-color: ${({ theme }) => theme.background};
    max-width: 100vw;
    color: ${({ theme }) => theme.primary};
  }
  
  html {
    overflow: scroll;
  }
  
  html {
    font-size: calc(100vw / 2560 * 10);
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -webkit-text-size-adjust: none;

    @media (max-width: 1920px) {
      font-size: calc(100vw / 1920 * 10);
    }

    @media (max-width: 599px) {
      font-size: calc(100vw / 599 * 10);
    }
  }

   ol, ul, li {
     list-style-type: none;
   }

  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  button {
    background: none;
    border: none;
  }

  .only-mobile {
    display: none;

    ${mediaMaxWidth('mobile')`
      display: block;
    `}
  }
  
  .only-desktop {
    display: block;

    ${mediaMaxWidth('mobile', 1)`
      display: none;
    `}
  }
`;

export default GlobalStyles;
