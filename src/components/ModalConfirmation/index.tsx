import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import * as S from './styles';
import ModalConfirmationProps, { ModalConfirmationRef } from './props';
import useAnimation from './animation';

const ModalConfirmation = forwardRef<ModalConfirmationRef, ModalConfirmationProps>(
  ({ title, message, anchor }, ref) => {
    const [isVisible, setVisible] = useState(false);
    const { modalConfirmationRef, changeVisibility } = useAnimation();

    useImperativeHandle(ref, () => ({
      show: () => setVisible(true)
    }));

    useEffect(() => {
      changeVisibility(isVisible);
    }, [isVisible]);

    return (
      <S.ModalConfirmation ref={modalConfirmationRef} onClick={() => setVisible(false)}>
        <S.ModalContainer onClick={e => e.stopPropagation()}>
          <S.CloseButton onClick={() => setVisible(false)}>
            <S.CloseIcon />
          </S.CloseButton>
          <S.WarningContainer>
            <S.WarningIcon />
          </S.WarningContainer>
          <S.Title>{title}</S.Title>
          <S.Message>{message}</S.Message>
          <S.Anchor href={anchor.href} target="_blank" onClick={() => setVisible(false)}>
            {anchor.text}
          </S.Anchor>
        </S.ModalContainer>
      </S.ModalConfirmation>
    );
  }
);

export default ModalConfirmation;
