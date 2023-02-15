import useI18const from '@/hooks/useI18const';

export default function () {
  return useI18const({
    'en-US': {
      startGame: 'START GAME',
      difficulties: ['easy', 'normal', 'hard'],
      instructionToPause: 'Press (P) to pause',
      instructionToResume: 'Paused, press (P) to continue',
      youWon: 'YOU WON',
      youtLost: 'YOU LOST'
    },
    'pt-BR': {
      startGame: 'INICIAR JOGO',
      difficulties: ['fácil', 'normal', 'difícil'],
      instructionToPause: 'Pressione (P) para pausar',
      instructionToResume: 'Pausado, pressione (P) para continuar',
      youWon: 'VOCÊ VENCEU',
      youtLost: 'VOCÊ PERDEU'
    }
  });
}
