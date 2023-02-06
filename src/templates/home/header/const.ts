import { useTranslation } from 'next-i18next';

export default function () {
  const { t } = useTranslation('home-header');

  return {
    name: t('name'),
    job: t('job'),
    highlights: t('highlights', { returnObjects: true }),
  };
}
