import ProjectsDesktop from '@/templates/home/projects/desktop';
import ProjectsMobile from '@/templates/home/projects/mobile';
import ResponsiveView from '@/components/ResponsiveView';
import * as S from './styles';

export default function Projects() {
  return (
    <S.Projects>
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
