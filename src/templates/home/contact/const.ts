import useI18const from '@/hooks/useI18const';

export default function () {
  return useI18const({
    'en-US': {
      getInTouch: "If you have anything you'd like to discuss, get in touch...",
      emailLabel: 'EMAIL',
      emails: ['joaohd98@gmail.com', 'joaodamazio98@hotmail.com'],
      social: [
        {
          name: 'facebook',
          url: 'https://www.facebook.com/joaodamazio98'
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
