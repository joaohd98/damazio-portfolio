import useI18const from '@/hooks/useI18const';

export default function () {
  const i18 = useI18const({
    'en-US': {
      profilePicture: 'profile picture',
      currentWork: "I'm tech leader working remotely from São Paulo, Brazil.",
      descriptions: [
        'A front-end developer for over six years, with deep experience of javascript and its modern features with strong knowledge on the React ecosystem.',
        "I've been creating enjoyable and immersive experiences, using different techniques of animation and working closely with designers.",
        'Excellent communication and collaboration skills with the ability to work effectively in a remote team.'
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
