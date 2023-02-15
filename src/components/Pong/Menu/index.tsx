import { useEffect, useMemo } from 'react';
import PongOptions from '@/components/Pong/props';
import * as S from './styles';

type Props = {
  options: PongOptions;
  onChangeOption: (partial: Partial<PongOptions>, wihoutAnimation?: boolean) => void;
  hasWon?: 'player' | 'enemy';
};

export default function PongMenu({ options, onChangeOption, hasWon }: Props) {
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
          <S.PongText>PONG</S.PongText>
          <S.ButtonsContainer>
            <S.TextButton onClick={() => onChangeOption({ hasStartedPlayed: true })}>START GAME</S.TextButton>
          </S.ButtonsContainer>
        </S.MenuOverlay>
      );
    }

    if (!options.dificulty) {
      return (
        <S.MenuOverlay>
          <S.ButtonsContainer>
            <S.TextButton onClick={() => onChangeOption({ dificulty: 'easy' })}>EASY</S.TextButton>
            <S.TextButton onClick={() => onChangeOption({ dificulty: 'normal' })}>NORMAL</S.TextButton>
            <S.TextButton onClick={() => onChangeOption({ dificulty: 'hard' })}>HARD</S.TextButton>
            <S.MenuText>Press (P) to pause</S.MenuText>
          </S.ButtonsContainer>
        </S.MenuOverlay>
      );
    }

    if (options.paused) {
      return <S.OverlayText>Paused, press P to continue</S.OverlayText>;
    }

    if (hasWon !== undefined) {
      return <S.OverlayText>{hasWon === 'player' ? 'YOU WON' : 'YOU LOST'}</S.OverlayText>;
    }

    return <div />;
  }, [options]);

  return renderContent;
}
