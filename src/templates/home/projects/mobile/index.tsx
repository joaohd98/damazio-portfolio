import IconLink from '@/components/IconLink';
import IconRotate from '@/components/IconRotate';
import { useEffect, useRef } from 'react';
import ModalConfirmation from '@/components/ModalConfirmation';
import { ModalConfirmationRef } from '@/components/ModalConfirmation/props';
import * as S from './styles';
import useConst from '../const';
import useAnimation from './animation';

export default function ProjectsMobile() {
  const { projects, name, tryOut, nextCard, popup } = useConst();
  const modalConfirmationRef = useRef<ModalConfirmationRef>(null);

  const { current, next, isMakingAnimation, onChangeCurrent, currentCardRef, nextCardRef, nextLabelRef, linkLabelRef } =
    useAnimation({
      current: 0,
      total: projects.length,
      getLink: index => projects[index].link,
      openModal: () => modalConfirmationRef.current?.show()
    });

  // workaround while there is no load
  useEffect(() => {
    projects.forEach(project => {
      const { src } = project.imgMobile || project.img;

      const downloadingImage = new Image();
      downloadingImage.src = `/imgs/projects/${src}`;
    });
  }, []);

  const renderContent = (position: number) => {
    const project = projects[position];
    const { src, width, height } = project.imgMobile || project.img;

    return (
      <>
        <S.ProjectImage src={`/imgs/projects/${src}`} width={width} height={height} alt={project.name} />
        <S.ProjectTextBackground>
          <S.ProjectName>{project.name}</S.ProjectName>
          <S.ProjectTechnologies>{project.technologies.join(', ')}</S.ProjectTechnologies>
        </S.ProjectTextBackground>
      </>
    );
  };

  return (
    <S.ProjectsMobile isMakingAnimation={isMakingAnimation}>
      <S.ProjectTitle>{name}</S.ProjectTitle>
      <S.ProjectList>
        <S.ProjectCard ref={nextCardRef}>{renderContent(next)}</S.ProjectCard>
        <S.ProjectCard ref={currentCardRef}>
          <S.NextLabel ref={nextLabelRef}>{nextCard}</S.NextLabel>
          <S.LinkLabel ref={linkLabelRef}>{tryOut}</S.LinkLabel>
          {renderContent(current)}
        </S.ProjectCard>
      </S.ProjectList>
      <S.ButtonsRow>
        <S.NextButton aria-label={nextCard} onClick={() => onChangeCurrent('left')}>
          <IconRotate />
        </S.NextButton>
        <S.LikeButton
          aria-label={tryOut}
          href={projects[current].link}
          target="_blank"
          onClick={() => onChangeCurrent('right')}
        >
          <IconLink />
        </S.LikeButton>
      </S.ButtonsRow>
      <ModalConfirmation
        ref={modalConfirmationRef}
        title={popup.title}
        message={popup.message}
        anchor={{ text: popup.button, href: projects[current].link }}
      />
    </S.ProjectsMobile>
  );
}
