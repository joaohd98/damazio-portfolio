import useI18const from '@/hooks/useI18const';

export default () => {
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
      ]
    }
  });
};
