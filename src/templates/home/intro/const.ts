import useI18const from '@/hooks/useI18const';

export default function () {
  const i18 = useI18const({
    'en-US': {
      profilePicture: 'profile picture',
      currentWork: "I'm a tech leader working remotely from São Paulo, Brazil.",
      works: 'WORKS',
      descriptions: [
        'A front-end developer for over six years, with a deep JavaScript experience and its modern features along with a strong understanding of the React ecosystem.',
        'I have created pleasurable and immersive experiences, using various animation techniques and working in close collaboration with the designers.',
        'Strong communication and collaboration skills, capable of working effectively in a remote team environment.'
      ],
      jobs: [
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
      currentWork: 'Eu sou um tech leader trabalhando remotamente de São Paulo, Brazil.',
      works: 'TRABALHOS',
      descriptions: [
        'Desenvolvedor front-end há mais de seis anos, profunda experiência em javascript, forte conhecimento em ReactJS e ecossistema React.',
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
