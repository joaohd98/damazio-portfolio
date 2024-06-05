import ArrowCursor from '@/components/ArrowCursor';
import useConst from '../const';
import useAnimation from './animation';
import * as S from './styles';

export default function ProjectsDesktop() {
  const { projects, name, tryOut } = useConst();
  const { pinRef, setCardsRef } = useAnimation(projects.length);

  return (
    <S.ProjectsDesktop>
      <S.PinContainer ref={pinRef}>
        <S.ProjectTitle>{name}</S.ProjectTitle>
        {projects.map((project, index) => {
          const isVertical = project.img.height > project.img.width;

          return (
            <S.ProjectContainer key={project.link} position={project.position}>
              <S.ProjectCard ref={setCardsRef(index)}>
                <S.ProjectName>{project.name}</S.ProjectName>
                <S.ProjectContent isVertical={isVertical}>
                  <S.ProjectImageContainer href={project.link} target="_blank">
                    <S.ProjectImage
                      src={`/imgs/projects/${project.img.src}`}
                      alt={project.name}
                      width={project.img.width}
                      height={project.img.height}
                    />
                    <S.ProjectTryOutButton>{tryOut}</S.ProjectTryOutButton>
                  </S.ProjectImageContainer>
                  <S.ProjectTechnologies>{project.technologies.join(' • ')}</S.ProjectTechnologies>
                  <S.ProjectRole isVertical={isVertical}>{project.role}</S.ProjectRole>
                </S.ProjectContent>
              </S.ProjectCard>
            </S.ProjectContainer>
          );
        })}
      </S.PinContainer>
      <ArrowCursor />
    </S.ProjectsDesktop>
  );
}
