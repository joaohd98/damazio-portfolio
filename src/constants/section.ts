import useI18const from '@/hooks/useI18const';

export default function useSections() {
  return useI18const({
    'en-US': {
      homeSection: {
        text: 'home',
        id: 'home',
        href: '#home'
      },
      aboutSection: {
        text: 'about',
        id: 'about',
        href: '#about'
      },
      projectsSection: {
        text: 'projects',
        id: 'projects',
        href: '#projects'
      },
      contactSection: {
        text: 'contact',
        id: 'contact',
        href: '#contact'
      }
    },
    'pt-BR': {
      homeSection: {
        text: 'início'
      },
      aboutSection: {
        text: 'sobre'
      },
      projectsSection: {
        text: 'projetos'
      },
      contactSection: {
        text: 'contato'
      }
    }
  });
}
