import useConst from './const';
import useAnimation from './animation';
import * as S from './styles';

export default function Projects() {
  const { projects } = useConst();
  const { pinRef } = useAnimation();

  return (
    <S.Projects>
      <S.PinContainer ref={pinRef}>
        {projects.map(project => (
          <S.ProjectContainer key={project.link}>{project.name}</S.ProjectContainer>
        ))}
      </S.PinContainer>
    </S.Projects>
  );
}
