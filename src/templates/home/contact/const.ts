import useI18const from '@/hooks/useI18const';

export default function () {
  return useI18const({
    'en-US': {
      getInTouch: 'If there is something you would like to discuss, please contact me.',
      emailLabel: 'EMAIL',
      emails: ['joaohd98@gmail.com', 'joaodamazio98@hotmail.com'],
      social: [
        {
          name: 'github',
          url: 'https://github.com/joaohd98'
        },
        {
          name: 'instagram',
          url: 'https://instagram.com/joao.damazio98'
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/joao-damazio'
        }
      ] as const
    },
    'pt-BR': {
      getInTouch: 'Se você tem algo que gostaria de discutir, entre em contato...'
    }
  });
}
