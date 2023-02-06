import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>João Damazio</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Portfolio do João Damazio" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(App);
