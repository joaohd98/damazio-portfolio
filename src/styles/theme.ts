import 'styled-components';

export const theme = {};

export type ColorFamily = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ColorFamily {}
}
