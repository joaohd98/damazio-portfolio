import useI18const from '@/hooks/useI18const';

export default function () {
  const { roleTeamFiap, roleMyself, roleTeamOnto } = useI18const({
    'en-US': {
      roleTeamFiap: 'Built with a team at FIAP',
      roleTeamOnto: 'Built with a team at Onto',
      roleMyself: 'Built by myself'
    },
    'pt-BR': {
      roleTeamFiap: 'Criado com uma equipe na FIAP',
      roleTeamOnto: 'Criado com uma equipe na Onto',
      roleMyself: 'Criado por mim'
    }
  });

  return useI18const({
    'en-US': {
      projects: [
        {
          name: 'FIAP para empresas',
          img: {
            src: 'para-empresas.png',
            width: 2280,
            height: 1646
          },
          imgMobile: {
            src: 'para-empresas-mobile.png',
            width: 644,
            height: 1398
          },
          technologies: ['NextJS', 'GSAP'],
          link: 'https://www.fiap.com.br/fiap-empresas/',
          role: roleTeamFiap,
          position: { type: 'top', value: 6 }
        },
        {
          name: 'FIAP School',
          img: {
            src: 'colegio.png',
            width: 2280,
            height: 1646
          },
          imgMobile: {
            src: 'colegio-mobile.png',
            width: 644,
            height: 1398
          },
          technologies: ['NextJS', 'GSAP'],
          link: 'https://www.fiap.com.br/colegio/',
          role: roleTeamFiap,
          position: { type: 'top', value: 50 }
        },
        {
          name: 'FIAP MBA',
          img: {
            src: 'fiap-mba.png',
            width: 2280,
            height: 1646
          },
          imgMobile: {
            src: 'fiap-mba-mobile.png',
            width: 644,
            height: 1398
          },
          technologies: ['NextJS', 'GSAP'],
          link: 'https://www.fiap.com.br/mba/',
          role: roleTeamFiap,
          position: { type: 'bottom', value: 10 }
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
          role: roleTeamFiap,
          position: { type: 'top', value: 30 }
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
          role: roleTeamFiap,
          position: { type: 'top', value: 5 }
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
          role: roleTeamFiap,
          position: { type: 'bottom', value: 10 }
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
          role: roleTeamFiap,
          position: { type: 'top', value: 50 }
        },
        {
          name: 'CROWD',
          img: {
            src: 'crowd.png',
            width: 764,
            height: 1646
          },
          technologies: ['SwiftUI'],
          link: 'https://apps.apple.com/us/app/crowd-social-shopping/id6467926771',
          role: roleTeamOnto,
          position: { type: 'top', value: 20 }
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
          role: roleTeamFiap,
          position: { type: 'top', value: 10 }
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
          role: roleMyself,
          position: { type: 'top', value: 12 }
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
          role: roleTeamFiap,
          position: { type: 'bottom', value: 10 }
        },
        {
          name: 'FIAP School',
          img: {
            src: 'fiap-school-app.png',
            width: 764,
            height: 1646
          },
          technologies: ['React Native'],
          link: 'https://apps.apple.com/br/app/fiap-school/id1502491617',
          role: roleTeamFiap,
          position: { type: 'top', value: 15 }
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
          role: roleTeamFiap,
          position: { type: 'bottom', value: 8 }
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
