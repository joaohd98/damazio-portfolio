import ArrowCursor from '@/components/ArrowCursor';
import useConst from './const';
import useAnimation from './animation';
import * as S from './styles';

export default function Projects() {
  const { projects, name, tryOut } = useConst();
  const { pinRef, setCardsRef } = useAnimation(projects.length);
  const positions = [8, 50, 61, 37, 12, 73, 50, 12, 70];

  return (
    <S.Projects>
      <S.PinContainer ref={pinRef}>
        <S.ProjectTitle>{name}</S.ProjectTitle>
        {projects.map((project, index) => {
          const isVertical = project.img.height > project.img.width;
          const position = positions[index];

          return (
            <S.ProjectContainer key={project.link} position={position}>
              <S.ProjectCard ref={setCardsRef(index)} isVertical={isVertical} position={position}>
                <S.ProjectName>{project.name}</S.ProjectName>
                <S.ProjectContent isVertical={isVertical}>
                  <S.ProjectImage
                    src={`/imgs/projects/${project.img.src}`}
                    alt={project.name}
                    width={project.img.width}
                    height={project.img.height}
                  />
                  <S.ProjectTechnologies>{project.technologies.join(' • ')}</S.ProjectTechnologies>
                  <S.ProjectTryOutButton href={project.link} target="_blank">
                    {tryOut}
                  </S.ProjectTryOutButton>
                </S.ProjectContent>
              </S.ProjectCard>
            </S.ProjectContainer>
          );
        })}
      </S.PinContainer>
      <ArrowCursor />
    </S.Projects>
  );
}
