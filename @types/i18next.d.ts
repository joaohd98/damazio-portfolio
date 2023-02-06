/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import 'i18next';

import type common from '../public/locales/en/common.json';
import type homeHeader from '../public/locales/en/home-header.json';

interface I18nNamespaces {
  common: typeof common
  'home-header': typeof homeHeader
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: I18nNamespaces
  }
}
