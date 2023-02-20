import ArrowCursor from '@/components/ArrowCursor';
import useConst from '../const';
import useAnimation from './animation';
import * as S from './styles';

export default function ProjectsDesktop() {
  const { projects, name, tryOut } = useConst();
  const { pinRef, setCardsRef } = useAnimation(projects.length);
  const positions = [
    { type: 'top', value: 6 },
    { type: 'top', value: 50 },
    { type: 'bottom', value: 10 },
    { type: 'top', value: 30 },
    { type: 'top', value: 5 },
    { type: 'bottom', value: 10 },
    { type: 'top', value: 50 },
    { type: 'top', value: 12 },
    { type: 'bottom', value: 10 }
  ];

  return (
    <S.ProjectsDesktop>
      <S.PinContainer ref={pinRef}>
        <S.ProjectTitle>{name}</S.ProjectTitle>
        {projects.map((project, index) => {
          const isVertical = project.img.height > project.img.width;
          const position = positions[index];

          return (
            <S.ProjectContainer key={project.link} position={position}>
              <S.ProjectCard ref={setCardsRef(index)}>
                <S.ProjectName>{project.name}</S.ProjectName>
                <S.ProjectContent href={project.link} target="_blank" isVertical={isVertical}>
                  <S.ProjectImage
                    src={`/imgs/projects/${project.img.src}`}
                    alt={project.name}
                    width={project.img.width}
                    height={project.img.height}
                  />
                  <S.ProjectTechnologies>{project.technologies.join(' • ')}</S.ProjectTechnologies>
                  <S.ProjectTryOutButton>{tryOut}</S.ProjectTryOutButton>
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
