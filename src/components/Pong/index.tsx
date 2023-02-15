import useStateMultiObj from '@/hooks/useStateMultiObj';
import PongOptions from '@/components/Pong/props';
import PongMenu from '@/components/Pong/Menu';
import * as S from './styles';
import useAnimation from './animation';
import PongGame from './Game';

export default function Pong() {
  const [options, , setOptionsPartial] = useStateMultiObj<PongOptions>({ hasStartedPlayed: false });
  const { wrapperRef, onChangeOption } = useAnimation(setOptionsPartial);

  return (
    <S.Pong>
      <S.TableBound>
        <S.Wrapper ref={wrapperRef}>
          <PongGame hasInitGame={options.hasStartedPlayed && !!options.dificulty} options={options} />
          <PongMenu options={options} onChangeOption={onChangeOption} />
        </S.Wrapper>
      </S.TableBound>
    </S.Pong>
  );
}
