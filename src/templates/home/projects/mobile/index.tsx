import * as S from './styles';
import useConst from '../const';
import useAnimation from './animation';

export default function ProjectsMobile() {
  const { projects, name, tryOut, nextCard, previousCard } = useConst();

  const {
    current,
    next,
    previous,
    isMakingAnimation,
    currentCardRef,
    nextCardRef,
    previousCardRef,
    nextLabelRef,
    previousLabelRef,
    anchorTryRef
  } = useAnimation({
    initialPosition: 0,
    size: projects.length
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
          <S.ProjectRole>{project.role}</S.ProjectRole>
        </S.ProjectTextBackground>
      </>
    );
  };

  return (
    <S.ProjectsMobile isMakingAnimation={isMakingAnimation}>
      <S.ProjectTitle>{name}</S.ProjectTitle>
      <S.ProjectList>
        <S.PreviousCard ref={previousCardRef}>{renderContent(previous)}</S.PreviousCard>
        <S.NextCard ref={nextCardRef}>{renderContent(next)}</S.NextCard>
        <S.ProjectCard ref={currentCardRef}>
          <S.CardClickable href={projects[current].link} target="_blank">
            <S.PreviousLabel ref={previousLabelRef}>{nextCard}</S.PreviousLabel>
            <S.NextLabel ref={nextLabelRef}>{previousCard}</S.NextLabel>
            <S.AnchorTryOut ref={anchorTryRef}>{tryOut}</S.AnchorTryOut>
            {renderContent(current)}
          </S.CardClickable>
        </S.ProjectCard>
      </S.ProjectList>
    </S.ProjectsMobile>
  );
}
