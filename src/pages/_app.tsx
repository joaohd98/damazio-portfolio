import '../../public/fonts/gotham.css';
import '../../public/fonts/roboto.css';
import '../../public/fonts/ld-mono-line.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { theme } from '@/styles/theme';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import GlobalStyles from '@/styles/globals-styles';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>João Damazio</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Portfolio João Damazio" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
