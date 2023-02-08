import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html,
  body {
    background: ${({ theme }) => theme.background};
    max-width: 100vw;
    overflow-x: hidden;
    color: ${({ theme }) => theme.primary};
  }
  
  html {
    font-size: calc(100vw / 2560 * 10);
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -webkit-text-size-adjust: none;
  }

   ol, ul, li {
     list-style-type: none;
   }

  @media (max-width: 1920px) {
    html {
      font-size: calc(100vw / 1920 * 10);
    }
  }
  
  @media (max-width: 599px) {
    html {
      font-size: calc(100vw / 599 * 10);
    }
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
