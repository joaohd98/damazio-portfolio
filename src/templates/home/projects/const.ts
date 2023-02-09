import useI18const from '@/hooks/useI18const';

export default function () {
  return useI18const({
    'en-US': {
      projects: [
        {
          name: 'Corporate',
          img: {
            source: 'corporate.png'
          },
          technologies: ['NextJS', 'Locomotive Scroll', 'GSAP'],
          link: 'https://www.fiap.com.br/corporate/'
        },
        {
          name: 'FIAP ON',
          img: {
            source: 'fiapon.png',
            isVertical: true
          },
          technologies: ['React Native'],
          link: 'https://apps.apple.com/br/app/fiap-on/id1270235539'
        },
        {
          name: 'LGPD Shield',
          img: {
            source: 'lgpd-shield.png'
          },
          technologies: ['NextJS'],
          link: 'https://www.fiap.com.br/lgpdshield/'
        },
        {
          name: 'NEXT',
          img: {
            source: 'next.png'
          },
          technologies: ['PHP', 'Wordpress'],
          link: 'https://www.fiap.com.br/next/'
        },
        {
          name: 'Pós Tech',
          img: {
            source: 'pos-tech.png'
          },
          technologies: ['NextJS', 'Locomotive Scroll', 'GSAP'],
          link: 'https://postech.fiap.com.br'
        },
        {
          name: 'Rock New Ventures',
          img: {
            source: 'rock-new-ventures.png'
          },
          technologies: ['NextJS', 'GSAP'],
          link: 'https://www.fiap.com.br/rock-new-ventures/'
        },
        {
          name: 'Sims School',
          img: {
            source: 'school-android.png',
            isVertical: true
          },
          technologies: ['Android', 'Kotlin'],
          link: 'https://github.com/joaohd98/android-sims-school'
        },
        {
          name: 'Sims School',
          img: {
            source: 'school-ios.png',
            isVertical: true
          },
          technologies: ['SwiftUI'],
          link: 'https://github.com/joaohd98/swiftui-sims-school'
        },
        {
          name: 'SHIFT',
          img: {
            source: 'shift.png'
          },
          technologies: ['NextJS', 'Locomotive Scroll', 'GSAP'],
          link: 'https://www.fiap.com.br/shift/'
        },
        {
          name: 'Smart Mobility',
          img: {
            source: 'smart-mobility.png'
          },
          technologies: ['NextJS', 'GSAP'],
          link: 'https://www.fiap.com.br/graduacao/smart-mobility/'
        }
      ]
    }
  });
}
