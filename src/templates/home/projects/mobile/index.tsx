import { useMemo, useState } from 'react';
import IconLink from '@/components/IconLink';
import IconRotate from '@/components/IconRotate';
import * as S from './styles';
import useConst from '../const';

export default function ProjectsMobile() {
  const [current, setCurrent] = useState(0);
  const { projects, name, tryOut, nextCard } = useConst();

  const next = useMemo(() => {
    const value = current + 1;

    return value > projects.length - 1 ? 0 : value;
  }, [current]);

  return (
    <S.ProjectsMobile>
      <S.ProjectTitle>{name}</S.ProjectTitle>
      <S.ProjectList>
        {[next, current].map(position => {
          const project = projects[position];
          const { src, width, height } = project.imgMobile || project.img;

          return (
            <S.ProjectCard key={project.name}>
              <S.ProjectImage src={`/imgs/projects/${src}`} width={width} height={height} alt={project.name} />
              <S.ProjectTextBackground>
                <S.ProjectName>{project.name}</S.ProjectName>
                <S.ProjectTechnologies>{project.technologies.join(', ')}</S.ProjectTechnologies>
              </S.ProjectTextBackground>
            </S.ProjectCard>
          );
        })}
      </S.ProjectList>
      <S.ButtonsRow>
        <S.NextButton aria-label={nextCard} onClick={() => setCurrent(next)}>
          <IconRotate />
        </S.NextButton>
        <S.LikeButton aria-label={tryOut} href={projects[current].link} target="_blank">
          <IconLink />
        </S.LikeButton>
      </S.ButtonsRow>
    </S.ProjectsMobile>
  );
}
