import useStateMultiObj from '@/hooks/useStateMultiObj';
import PongOptions from '@/components/Pong/props';
import PongMenu from '@/components/Pong/Menu';
import * as S from './styles';
import useAnimation from './animation';
import PongGame from './Game';

export default function Pong() {
  const [options, setOption, setOptionsPartial] = useStateMultiObj<PongOptions>({
    hasStartedPlayed: false,
    firstPlaying: 'player'
  });
  const [score, setScore] = useStateMultiObj({ player: 0, enemy: 0 });
  const { wrapperRef, onChangeOption } = useAnimation(setOptionsPartial);

  const onScore = (type: 'player' | 'enemy') => {
    setScore(type, score[type] + 1);
    setOption('firstPlaying', options.firstPlaying === 'enemy' ? 'player' : 'enemy');
  };

  return (
    <S.Pong>
      <S.TableBound>
        <S.Wrapper ref={wrapperRef}>
          <PongGame
            hasInitGame={options.hasStartedPlayed && !!options.dificulty}
            options={options}
            scoreEnemy={score.enemy}
            scorePlayer={score.player}
            onScore={onScore}
          />
          <PongMenu options={options} onChangeOption={onChangeOption} />
        </S.Wrapper>
      </S.TableBound>
    </S.Pong>
  );
}
