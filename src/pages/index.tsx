import HomeTemplate from '@/templates/home';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return <HomeTemplate />;
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home-header', 'home-intro', 'home-marquee', 'home-projects']))
    }
  };
}
