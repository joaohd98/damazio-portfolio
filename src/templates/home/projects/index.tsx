import ProjectsDesktop from '@/templates/home/projects/desktop';
import ProjectsMobile from '@/templates/home/projects/mobile';
import ResponsiveView from '@/components/ResponsiveView';
import useSections from '@/constants/section';
import * as S from './styles';

export default function Projects() {
  const { projectsSection } = useSections();

  return (
    <S.Projects id={projectsSection.id}>
      <ResponsiveView
        renderContainer={({ className, content }) => (
          <S.ProjectContainer className={className}>{content}</S.ProjectContainer>
        )}
        mobile={<ProjectsMobile />}
        desktop={<ProjectsDesktop />}
      />
    </S.Projects>
  );
}
