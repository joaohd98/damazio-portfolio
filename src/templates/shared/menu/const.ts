import useI18const from '@/hooks/useI18const';
import { useRouter } from 'next/router';

export default () => {
  const { locale, defaultLocale } = useRouter();
  const currentLocale = locale || defaultLocale;

  return useI18const({
    'en-US': {
      languages: [
        {
          name: 'πΊπΈ EN',
          href: 'en-US',
          isCurrent: currentLocale === 'en-US'
        },
        {
          name: 'π§π· BR',
          href: 'pt-BR',
          isCurrent: currentLocale === 'pt-BR'
        }
      ]
    }
  });
};
