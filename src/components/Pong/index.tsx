import useStateMultiObj from '@/hooks/useStateMultiObj';
import PongOptions from '@/components/Pong/props';
import PongMenu from '@/components/Pong/Menu';
import { useRef } from 'react';
import { PongGameRef } from '@/components/Pong/Game/props';
import useEffectOnlyChanges from '@/hooks/useEffectOnlyChanges';
import * as S from './styles';
import useAnimation from './animation';
import PongGame from './Game';

export default function Pong() {
  const pongGameRef = useRef<PongGameRef>(null);

  const [options, setOptions, optionsRef, setOptionsInitialState] = useStateMultiObj<PongOptions>({
    hasStartedPlayed: false,
    firstPlaying: 'player',
    scorePlayer: 0,
    scoreEnemy: 0
  });

  const { wrapperRef, onChangeOption } = useAnimation(setOptions);

  useEffectOnlyChanges(() => {
    if (!options.dificulty) {
      return;
    }

    pongGameRef.current?.startPlayingPong();
  }, [options.dificulty]);

  const onScore = (who: 'player' | 'enemy') => {
    const newOptions = { ...optionsRef.current };

    newOptions.firstPlaying = options.firstPlaying === 'enemy' ? 'player' : 'enemy';

    const isWinner = (value: number) => value > 9;
    if (who === 'player') {
      newOptions.scorePlayer += 1;
      newOptions.winner = isWinner(newOptions.scorePlayer) ? 'player' : undefined;
    } else {
      newOptions.scoreEnemy += 1;
      newOptions.winner = isWinner(newOptions.scoreEnemy) ? 'enemy' : undefined;
    }

    setOptions(newOptions);

    if (!newOptions.winner) {
      pongGameRef.current?.startPlayingPong();
    }
  };

  return (
    <S.Pong>
      <S.TableBound>
        <S.Wrapper ref={wrapperRef}>
          <PongGame ref={pongGameRef} options={options} onScore={onScore} />
          <PongMenu options={options} onChangeOption={onChangeOption} restartGame={setOptionsInitialState} />
        </S.Wrapper>
      </S.TableBound>
    </S.Pong>
  );
}
