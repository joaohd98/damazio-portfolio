import { useRouter } from 'next/router';
import { merge } from 'lodash';
import Subset from '@/@types/subset';

type Props<T> = {
  'en-US': T;
  'pt-BR'?: Subset<T>;
};

export default function useI18const<T>(content: Props<T>): T {
  const { locale, defaultLocale } = useRouter();

  const defautLocale = defaultLocale || 'en-US';
  const value = (locale || defautLocale) as 'en-US' | 'pt-BR';

  if (defautLocale === locale) {
    return content['en-US'];
  }

  return merge(content['en-US'], content[value]);
}
