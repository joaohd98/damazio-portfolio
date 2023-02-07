import { useTranslation } from 'next-i18next';

export default function () {
  const { t } = useTranslation('home-header');

  return {
    name: t('name')
      .split('')
      .map((value, id) => ({ id, value })),
    job: t('job')
      .split('')
      .map((value, id) => ({ id, value })),
    highlights: t('highlights', { returnObjects: true }) as string[]
  };
}
