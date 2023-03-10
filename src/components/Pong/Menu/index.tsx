import { useEffect, useMemo } from 'react';
import PongMenuProps from './props';
import * as S from './styles';
import useConst from '../const';

export default function PongMenu({ options, onChangeOption, restartGame }: PongMenuProps) {
  const { startGame, pong, difficulties, instructionToPause, instructionToResume, youWon, youtLost, restart } =
    useConst();

  useEffect(() => {
    const onKeyboardListener = (event: globalThis.KeyboardEvent) => {
      if (!options.hasStartedPlayed || !options.dificulty) {
        return;
      }

      if (event.key === 'p') {
        onChangeOption({ paused: !options.paused }, true);
      }
    };

    document.addEventListener('keypress', onKeyboardListener);
    return () => {
      document.removeEventListener('keypress', onKeyboardListener);
    };
  }, [options]);

  const renderContent = useMemo(() => {
    if (!options.hasStartedPlayed) {
      return (
        <S.MenuOverlay>
          <S.PongText>{pong}</S.PongText>
          <S.ButtonsContainer>
            <S.TextButton onClick={() => onChangeOption({ hasStartedPlayed: true })}>{startGame}</S.TextButton>
          </S.ButtonsContainer>
        </S.MenuOverlay>
      );
    }

    if (!options.dificulty) {
      return (
        <S.MenuOverlay>
          <S.ButtonsContainer>
            <S.TextButton onClick={() => onChangeOption({ dificulty: 'easy' })}>{difficulties[0]}</S.TextButton>
            <S.TextButton onClick={() => onChangeOption({ dificulty: 'normal' })}>{difficulties[1]}</S.TextButton>
            <S.TextButton onClick={() => onChangeOption({ dificulty: 'hard' })}>{difficulties[2]}</S.TextButton>
            <S.MenuText>{instructionToPause}</S.MenuText>
          </S.ButtonsContainer>
        </S.MenuOverlay>
      );
    }

    if (options.paused) {
      return <S.OverlayText>{instructionToResume}</S.OverlayText>;
    }

    if (options.winner) {
      return (
        <S.OverlayText>
          {options.winner === 'player' ? youWon : youtLost}
          <br />
          <S.RestartButon onClick={restartGame}>{restart}</S.RestartButon>
        </S.OverlayText>
      );
    }

    return <div />;
  }, [options]);

  return renderContent;
}
