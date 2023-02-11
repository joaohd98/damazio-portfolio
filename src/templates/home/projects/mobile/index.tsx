import IconLink from '@/components/IconLink';
import IconRotate from '@/components/IconRotate';
import * as S from './styles';
import useConst from '../const';
import useAnimation from './animation';

export default function ProjectsMobile() {
  const { projects, name, tryOut, nextCard } = useConst();

  const { current, next, onChangeCurrent, currentCardRef, nextCardRef, nextLabelRef, linkLabelRef } = useAnimation({
    current: 0,
    total: projects.length,
    getLink: index => projects[index].link
  });

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
    <S.ProjectsMobile>
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
          onClick={() => onChangeCurrent('right')}
          href={projects[current].link}
          target="_blank"
        >
          <IconLink />
        </S.LikeButton>
      </S.ButtonsRow>
    </S.ProjectsMobile>
  );
}
