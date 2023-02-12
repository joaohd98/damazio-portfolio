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
          imgMobile: {
            src: 'corporate-mobile.png',
            width: 644,
            height: 1398
          },
          technologies: ['NextJS', 'Locomotive Scroll', 'GSAP'],
          link: 'https://www.fiap.com.br/corporate/'
        },
        {
          name: 'FIAP ON',
          img: {
            src: 'fiapon.jpeg',
            width: 1170,
            height: 2311
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
          imgMobile: {
            src: 'lgpd-shield-mobile.png',
            width: 644,
            height: 1398
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
          imgMobile: {
            src: 'next-mobile.png',
            width: 644,
            height: 1398
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
          imgMobile: {
            src: 'pos-tech-mobile.png',
            width: 644,
            height: 1398
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
          imgMobile: {
            src: 'rock-new-ventures-mobile.png',
            width: 644,
            height: 1398
          },
          technologies: ['NextJS', 'GSAP'],
          link: 'https://www.fiap.com.br/rock-new-ventures/'
        },
        {
          name: 'Sims School',
          img: {
            src: 'school.png',
            width: 764,
            height: 1646
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
          imgMobile: {
            src: 'shift-mobile.png',
            width: 1170,
            height: 2531
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
          imgMobile: {
            src: 'smart-mobility-mobile.png',
            width: 644,
            height: 1398
          },
          technologies: ['NextJS', 'GSAP'],
          link: 'https://www.fiap.com.br/graduacao/smart-mobility/'
        }
      ],
      name: 'PROJECTS',
      tryOut: 'TRY',
      nextCard: 'NEXT',
      popup: {
        title: 'POP-UP BLOCK',
        message: 'There is a pop-up block in your browser. Click the button below, to access the link.',
        button: 'REDIRECT'
      }
    },
    'pt-BR': {
      name: 'PROJETOS',
      tryOut: 'VER',
      popup: {
        title: 'BLOQUEIO DE POP-UP',
        message: 'Há um bloco de pop-up em seu navegador. Clique no botão abaixo, para acessar o link.',
        button: 'REDIRECIONAR'
      }
    }
  });
}
