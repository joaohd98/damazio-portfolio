import useI18const from '@/hooks/useI18const';

export default function () {
  const i18 = useI18const({
    'en-US': {
      profilePicture: 'profile picture',
      currentWork: "I'm tech leader working remotely from São Paulo, Brazil.",
      descriptions: [
        "I've working the past six plus years in all development areas: front-end, mobile, back-end... I'm happy to have experienced all the differents aspect of development.",
        'Nowadays my time is spent working on FIAP as a Teach Leader.'
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
        'Trabalho há mais de seis anos nas diferentes áreas de desenvolvimento: front-end, mobile, back-end... Estou feliz por ter experimentado todos os diferentes aspectos do desenvolvimento.',
        'Atualmente, estou trabalhando na FIAP como Teach Leader.'
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
