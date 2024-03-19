import useI18const from '@/hooks/useI18const';

export default function () {
  const i18 = useI18const({
    'en-US': {
      profilePicture: 'profile picture',
      currentWork: "I'm a tech leader working remotely from São Paulo, Brazil.",
      works: 'WORKS',
      descriptions: [
        'A front-end and mobile developer for over seven years, with a deep JavaScript experience and its modern features along with a strong understanding of the React ecosystem, as well as proficient in SwiftUI for iOS development.',
        'I have created pleasurable and immersive experiences, using various animation techniques and working in close collaboration with the designers.',
        'Strong communication and collaboration skills, capable of working effectively in a remote team environment.'
      ],
      jobs: [
        {
          name: 'Developer',
          subjects: ['iOS'],
          start: 23,
          company: 'ONTO'
        },
        {
          name: 'Tech Leader',
          subjects: ['Front End', 'Mobile'],
          start: 22,
          company: 'FIAP'
        },
        {
          name: 'Analyst',
          subjects: ['Mobile'],
          start: 20,
          end: 22,
          company: 'FIAP'
        },
        {
          name: 'Analyst',
          subjects: ['Front End'],
          start: 19,
          end: 20,
          company: 'Interplayers'
        },
        {
          name: 'Dev',
          subjects: ['Mobile'],
          start: 18,
          end: 19,
          company: 'Everis'
        },
        {
          name: 'Dev',
          subjects: ['Full Stack'],
          start: 16,
          end: 18,
          company: 'SMIT'
        }
      ]
    },
    'pt-BR': {
      profilePicture: 'Foto de perfil',
      currentWork: 'Eu sou um tech leader que trabalha remotamente de São Paulo, Brazil.',
      works: 'TRABALHOS',
      descriptions: [
        'Desenvolvedor front-end há mais de sete anos, com profunda experiência em JavaScript e seus recursos modernos, além de um forte entendimento do ecossistema React. Possuo habilidades sólidas em SwiftUI para o desenvolvimento iOS.',
        'Tenho criado experiências agradáveis e imersivas, usando diferentes técnicas de animação e trabalhando em estreita colaboração com designers.',
        'Excelentes habilidades de comunicação e colaboração com a capacidade de trabalhar em uma equipe remota fácilmente.'
      ],
      jobs: [
        {
          name: 'Líder Técnico'
        },
        {
          name: 'Analista'
        },
        {
          name: 'Analista'
        }
      ]
    }
  });

  return {
    ...i18,
    formatDuration: (start: number, end?: number) => `${start} ${end ? ` - ${end}` : '~'}`
  };
}
