import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { theme } from '@/styles/theme';
import GlobalStyles from '@/styles/globals-styles';
import GlobalGotham from '@/styles/fonts/gotham';
import GlobalRoboto from '@/styles/fonts/roboto';
import GlobalMonoLine from '@/styles/fonts/ld-mono-line';

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
        <GlobalGotham />
        <GlobalRoboto />
        <GlobalMonoLine />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(App);
