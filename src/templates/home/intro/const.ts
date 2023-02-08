import { useTranslation } from 'next-i18next';

export default function () {
  const { t } = useTranslation('home-intro');

  return {
    profilePicture: t('profilePicture'),
    currentWork: t('currentWork'),
    descriptions: t('descriptions', { returnObjects: true }) as string[],
    jobs: t('jobs', { returnObjects: true }) as {
      name: string;
      subjects: string[];
      start: number;
      end?: number;
      company: string;
    }[],
    formatDuration: (start: number, end?: number) => `${start} ${end ? ` - ${end}` : '~'}`
  };
}
