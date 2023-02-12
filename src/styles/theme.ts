import 'styled-components';

export const theme = {
  primary: '#F7F7F2',
  secondary: '#E4E6C3',
  thirdiary: '#899878',
  background: '#121113',
  backgroundModal: '#0D0C0F',
  backgroundOverlay: '#121113fc',
  blue: '#6495ED',
  blueDark: '#445EDA',
  yellow: '#ffc107',
  green: '#28a745'
};

export type ColorFamily = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ColorFamily {}
}
