import { useEffect } from 'react';
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
        <S.PreviousCard ref={previousCardRef}>{renderContent(previous)}</S.PreviousCard>
        <S.NextCard ref={nextCardRef}>{renderContent(next)}</S.NextCard>
        <S.ProjectCard ref={currentCardRef}>
          <S.PreviousLabel ref={previousLabelRef}>{previousCard}</S.PreviousLabel>
          <S.NextLabel ref={nextLabelRef}>{nextCard}</S.NextLabel>
          <S.AnchorTryOut ref={anchorTryRef} href={projects[current].link} target="_blank">
            {tryOut}
          </S.AnchorTryOut>
          {renderContent(current)}
        </S.ProjectCard>
      </S.ProjectList>
    </S.ProjectsMobile>
  );
}
