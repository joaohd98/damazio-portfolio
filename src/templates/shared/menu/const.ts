import useI18const from '@/hooks/useI18const';
import { useRouter } from 'next/router';

export default () => {
  const { locale, defaultLocale } = useRouter();
  const currentLocale = locale || defaultLocale;

  return useI18const({
    'en-US': {
      items: [
        {
          text: 'home',
          link: '#home'
        },
        {
          text: 'about',
          link: '#about'
        },
        {
          text: 'projects',
          link: '#projects'
        },
        {
          text: 'contacts',
          link: '#contacts'
        }
      ],
      languages: [
        {
          name: '🇺🇸 EN',
          href: 'en-US',
          isCurrent: currentLocale === 'en-US'
        },
        {
          name: '🇧🇷 BR',
          href: 'pt-BR',
          isCurrent: currentLocale === 'pt-BR'
        }
      ]
    }
  });
};
