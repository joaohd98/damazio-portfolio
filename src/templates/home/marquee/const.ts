import { useTranslation } from 'next-i18next';

export default function () {
  const { t } = useTranslation('home-marquee');

  return {
    words: t('words', { returnObjects: true }) as string[]
  };
}
