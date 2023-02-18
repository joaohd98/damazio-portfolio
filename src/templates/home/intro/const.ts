import useI18const from '@/hooks/useI18const';

export default function () {
  const i18 = useI18const({
    'en-US': {
      profilePicture: 'profile picture',
      currentWork: "I'm tech leader working remotely from São Paulo, Brazil.",
      descriptions: [
        'A front-end developer with six plus years of experience with deep knowledge of javascript and its modern features with strong focus on the React ecosystem.',
        "I've been creating enjoyable and immersive experiences for people, using different techniques of animation and working closely with designers.",
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
        'Um desenvolvedor front-end com mais de seis anos de experiência com profundo conhecimento de javascript e seus recursos modernos com forte foco no ecossistema React',
        'Tenho criado experiências agradáveise imersivas para as pessoas, usando diferentes técnicas de animação e trabalhando em estreita colaboração com designers.',
        'Excelentes habilidades de comunicação e colaboração com a capacidade de trabalhar em uma equipe remota.'
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
