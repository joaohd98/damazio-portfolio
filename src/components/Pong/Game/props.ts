import PongOptions from '@/components/Pong/props';

export default interface PongGameProps {
  options: PongOptions;
  onScore: (who: 'player' | 'enemy') => void;
}

export interface PongGameRef {
  startPlayingPong: () => void;
}
