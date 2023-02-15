export default interface PongOptions {
  hasStartedPlayed: boolean;
  firstPlaying: 'player' | 'enemy';
  dificulty?: 'easy' | 'normal' | 'hard';
  paused?: boolean;
}
