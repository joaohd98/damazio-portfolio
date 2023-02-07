import 'styled-components';

export const theme = {
  primary: '#F7F7F2',
  secondary: '#E4E6C3',
  thirdiary: '#899878',
  background: '#121113'
};

export type ColorFamily = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ColorFamily {}
}
