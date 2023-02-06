import { useTranslation } from 'next-i18next';
import * as S from './styles';

export default function Header() {
  const { t } = useTranslation('home-header');

  return (
    <S.Header>
      <S.TextContainer>
        <S.NameText>{t('name')}</S.NameText>
        <S.JobText>{t('job')}</S.JobText>
        <S.HightlightsRow>
          <S.HightlightText>
            🖥️ Creative
          </S.HightlightText>
          <S.HightlightText>
            📱 Mobile
          </S.HightlightText>
          <S.HightlightText>
            📝 Leadership
          </S.HightlightText>
        </S.HightlightsRow>
      </S.TextContainer>
    </S.Header>
  );
}
