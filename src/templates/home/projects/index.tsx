import useConst from './const';
import useAnimation from './animation';
import * as S from './styles';

export default function Projects() {
  const { projects } = useConst();
  const { pinRef } = useAnimation(projects.length);
  const positions = [8, 50, 61, 37, 12, 73, 50, 12, 70];

  return (
    <S.Projects>
      <S.PinContainer ref={pinRef}>
        {projects.map((project, index) => {
          const isVertical = project.img.height > project.img.width;
          const position = positions[index];

          return (
            <S.ProjectContainer key={project.link} position={position}>
              <S.ProjectCard isVertical={isVertical}>
                <S.ProjectName>{project.name}</S.ProjectName>
                <S.ProjectContent>
                  <S.ProjectImage
                    src={`/imgs/projects/${project.img.src}`}
                    alt={project.name}
                    width={project.img.width}
                    height={project.img.height}
                    isVertical={isVertical}
                  />
                  <S.ProjectTechnologies>{project.technologies.join(' • ')}</S.ProjectTechnologies>
                  <S.ProjectTryOutButton href={project.link} target="_blank">
                    TRY
                  </S.ProjectTryOutButton>
                </S.ProjectContent>
              </S.ProjectCard>
            </S.ProjectContainer>
          );
        })}
      </S.PinContainer>
    </S.Projects>
  );
}
