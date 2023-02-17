import 'styled-components';

export const theme = {
  primary: '#F7F7F2',
  secondary: '#E4E6C3',
  thirdiary: '#899878',
  background: '#121113',
  backgroundMenu: '#1B1B1B',
  backgroundOverlay: '#121113fc',
  blue: '#6495ED',
  blueDark: '#445EDA',
  yellow: '#ffc107',
  green: '#28a745',
  gray: '#F0F0F0',
  grayDim: '#696969',
  transparent: 'rgba(0, 0, 0, 0)'
};

export type ColorFamily = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ColorFamily {}
}
