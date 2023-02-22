export default interface PongOptions {
  hasStartedPlayed: boolean;
  scorePlayer: 0;
  scoreEnemy: 0;
  scoreToWin: number;
  firstPlaying: 'player' | 'enemy';
  dificulty?: 'easy' | 'normal' | 'hard';
  paused?: boolean;
  winner?: 'player' | 'enemy';
}
