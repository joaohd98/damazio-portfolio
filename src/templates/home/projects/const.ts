import useI18const from '@/hooks/useI18const';

export default function () {
  const { roleTeamFiap, roleMyself } = useI18const({
    'en-US': {
      roleTeamFiap: 'Built with a team at FIAP',
      roleMyself: 'Built by myself'
    },
    'pt-BR': {
      roleTeamFiap: 'Criado com uma equipe na FIAP',
      roleMyself: 'Criado por mim'
    }
  });

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
          link: 'https://www.fiap.com.br/corporate/',
          role: roleTeamFiap
        },
        {
          name: 'FIAP ON',
          img: {
            src: 'fiapon.jpeg',
            width: 1170,
            height: 2311
          },
          technologies: ['React Native'],
          link: 'https://apps.apple.com/br/app/fiap-on/id1270235539',
          role: roleTeamFiap
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
          link: 'https://www.fiap.com.br/lgpdshield/',
          role: roleTeamFiap
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
          link: 'https://www.fiap.com.br/next/',
          role: roleTeamFiap
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
          link: 'https://postech.fiap.com.br',
          role: roleTeamFiap
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
          link: 'https://www.fiap.com.br/rock-new-ventures/',
          role: roleTeamFiap
        },
        {
          name: 'Sims School',
          img: {
            src: 'school.png',
            width: 764,
            height: 1646
          },
          technologies: ['Android', 'Kotlin', 'SwiftUI'],
          link: 'https://github.com/joaohd98?tab=repositories&q=sims',
          role: roleMyself
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
          link: 'https://www.fiap.com.br/shift/',
          role: roleTeamFiap
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
          link: 'https://www.fiap.com.br/graduacao/smart-mobility/',
          role: roleTeamFiap
        }
      ],
      name: 'PROJECTS',
      tryOut: 'TRY',
      nextCard: 'NEXT',
      previousCard: 'PREV'
    },
    'pt-BR': {
      name: 'PROJETOS',
      tryOut: 'VER',
      nextCard: 'PRÓX',
      previousCard: 'ANTE'
    }
  });
}
