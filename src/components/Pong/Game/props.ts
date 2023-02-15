import PongOptions from '@/components/Pong/props';

export default interface PongGameProps {
  hasInitGame: boolean;
  options: PongOptions;
  scorePlayer: number;
  scoreEnemy: number;
  onScore: (who: 'player' | 'enemy') => void;
  whoHasWon?: 'player' | 'enemy';
}
