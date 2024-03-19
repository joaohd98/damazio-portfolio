import useI18const from '@/hooks/useI18const';

export default function () {
  return useI18const({
    'en-US': {
      areas: [
        {
          name: 'front-end 👾',
          technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'GSAP']
        },
        {
          name: 'back-end 💻',
          technologies: ['Node.js', 'Strapi', 'Java', 'Kotlin']
        },
        {
          name: 'mobile 📱',
          technologies: ['React Native', 'Expo', 'Swift', 'SwiftUI', 'Android']
        },
        {
          name: 'tools 🛠️',
          technologies: ['Jest', 'Cypress', 'Storybook', 'Google Analytics', 'Webpack', 'CI/CD', 'i18n', 'a11y']
        }
      ],
      skills: 'SKILLS'
    },
    'pt-BR': {
      areas: [
        {},
        {},
        {},
        {
          name: 'Outros 🛠'
        }
      ],
      skills: 'HABILIDADES'
    }
  });
}
