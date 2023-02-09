import useConst from './const';
import useAnimation from './animation';
import * as S from './styles';

export default function Projects() {
  const { projects } = useConst();
  const { pinRef } = useAnimation(projects.length);

  return (
    <S.Projects>
      <S.PinContainer ref={pinRef}>
        {projects.map(project => (
          <S.ProjectContainer key={project.link}>
            <S.ProjectCard>
              <S.ProjectName>{project.name}</S.ProjectName>
              <S.ProjectImage
                src={`/imgs/projects/${project.img.src}`}
                alt={project.name}
                width={project.img.width}
                height={project.img.height}
              />
              <S.ProjectTryOutButton>Tentar</S.ProjectTryOutButton>
            </S.ProjectCard>
          </S.ProjectContainer>
        ))}
      </S.PinContainer>
    </S.Projects>
  );
}
