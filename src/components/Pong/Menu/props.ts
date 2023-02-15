import PongOptions from '@/components/Pong/props';

export default interface PongMenuProps {
  options: PongOptions;
  onChangeOption: (partial: Partial<PongOptions>, wihoutAnimation?: boolean) => void;
  whoHasWon?: 'player' | 'enemy';
}
