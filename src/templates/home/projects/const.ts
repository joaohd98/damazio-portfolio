import useI18const from '@/hooks/useI18const';

export default function () {
  return useI18const({
    'en-US': {
      projects: [
        {
          name: 'Corporate',
          img: {
            src: 'corporate.png',
            width: 2280,
            height: 1646
          },
          technologies: ['NextJS', 'Locomotive Scroll', 'GSAP'],
          link: 'https://www.fiap.com.br/corporate/'
        },
        {
          name: 'FIAP ON',
          img: {
            src: 'fiapon.png',
            width: 1170,
            height: 2532
          },
          technologies: ['React Native'],
          link: 'https://apps.apple.com/br/app/fiap-on/id1270235539'
        },
        {
          name: 'LGPD Shield',
          img: {
            src: 'lgpd-shield.png',
            width: 2280,
            height: 1646
          },
          technologies: ['NextJS', 'Locomotive Scroll'],
          link: 'https://www.fiap.com.br/lgpdshield/'
        },
        {
          name: 'NEXT',
          img: {
            src: 'next.png',
            width: 2280,
            height: 1646
          },
          technologies: ['PHP', 'Wordpress'],
          link: 'https://www.fiap.com.br/next/'
        },
        {
          name: 'Pós Tech',
          img: {
            src: 'pos-tech.png',
            width: 2280,
            height: 1646
          },
          technologies: ['NextJS', 'Locomotive Scroll', 'GSAP'],
          link: 'https://postech.fiap.com.br'
        },
        {
          name: 'Rock New Ventures',
          img: {
            src: 'rock-new-ventures.png',
            width: 2280,
            height: 1646
          },
          technologies: ['NextJS', 'GSAP'],
          link: 'https://www.fiap.com.br/rock-new-ventures/'
        },
        {
          name: 'Sims School',
          img: {
            src: 'school.png',
            width: 1170,
            height: 2532
          },
          technologies: ['Android', 'Kotlin', 'SwiftUI'],
          link: 'https://github.com/joaohd98?tab=repositories&q=sims'
        },
        {
          name: 'SHIFT',
          img: {
            src: 'shift.png',
            width: 2280,
            height: 1646
          },
          technologies: ['NextJS', 'Locomotive Scroll', 'GSAP'],
          link: 'https://www.fiap.com.br/shift/'
        },
        {
          name: 'Smart Mobility',
          img: {
            src: 'smart-mobility.png',
            width: 2280,
            height: 1646
          },
          technologies: ['NextJS', 'GSAP'],
          link: 'https://www.fiap.com.br/graduacao/smart-mobility/'
        }
      ],
      tryOut: 'TRY'
    },
    'pt-BR': {
      tryOut: 'VER'
    }
  });
}
