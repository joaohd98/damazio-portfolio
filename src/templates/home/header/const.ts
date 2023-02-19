import useI18const from '@/hooks/useI18const';

export default function () {
  const splitText = (value: string) => value.split('').map((letter, index) => ({ letter, id: letter + index }));

  return useI18const({
    'en-US': {
      greetings: splitText("Hey, I'm João!"),
      job: splitText('A Developer'),
      highlights: [
        'Who loves to create pleasant, accessible, performative',
        'and attractive UI that transform ideas into reality'
      ]
    },
    'pt-BR': {
      greetings: splitText('Hey, sou o João!'),
      job: splitText('Um Desevolvedor'),
      highlights: [
        'Que ama criar UI agradáveis, acessíveis, performáticas',
        'e atraentes que transformam ideias em realidade'
      ]
    }
  });
}
