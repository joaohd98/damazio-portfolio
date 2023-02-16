import IconFacebook from '@/components/IconFacebook';
import IconInstagram from '@/components/IconInstagram';
import IconLinkedin from '@/components/IconLinkedin';
import Pong from '@/components/Pong';
import * as S from './styles';
import useConst from './const';
import useAnimation from './animation';

export default function Contact() {
  const { containerContactRef, backgroundPongRef } = useAnimation();
  const { getInTouch, emailLabel, emails, social } = useConst();

  const renderSocialIcon = (name: string) => {
    switch (name) {
      case 'facebook':
        return <IconFacebook />;
      case 'instagram':
        return <IconInstagram />;
      case 'linkedin':
        return <IconLinkedin />;
      default:
        return undefined;
    }
  };

  return (
    <S.Contact>
      <S.ContainerSocial ref={containerContactRef}>
        <S.GetInTouchText>{getInTouch}</S.GetInTouchText>
        <S.LinkContainer>
          <S.EmailText>{emailLabel}</S.EmailText>
          {emails.map(email => (
            <S.EmailValue key={email} href={`mailto:${email}`}>
              {email}
            </S.EmailValue>
          ))}
          <S.SocialMediaRow>
            {social.map(({ name, url }) => (
              <S.SocialLink key={name} href={url} target="_blank">
                {renderSocialIcon(name)}
              </S.SocialLink>
            ))}
          </S.SocialMediaRow>
        </S.LinkContainer>
      </S.ContainerSocial>
      <S.ContainerPong>
        <Pong />
        <S.PongBackground ref={backgroundPongRef} />
      </S.ContainerPong>
    </S.Contact>
  );
}
