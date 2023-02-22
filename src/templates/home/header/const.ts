import useI18const from '@/hooks/useI18const';

export default function () {
  const splitText = (value: string) => value.split('').map((letter, index) => ({ letter, id: letter + index }));

  return useI18const({
    'en-US': {
      greetings: splitText("Hey, I'm João!"),
      job: splitText('A Developer'),
      highlights: [
        'Who loves to create an enjoyable, accessible, performative',
        'and appealing user interface that turns ideas into reality.'
      ]
    },
    'pt-BR': {
      greetings: splitText('Hey, sou o João!'),
      job: splitText('Um Desevolvedor'),
      highlights: [
        'Que gosta de criar UI agradáveis, acessíveis, performáticas',
        'e atraentes capazes de transformar ideias em realidade'
      ]
    }
  });
}
