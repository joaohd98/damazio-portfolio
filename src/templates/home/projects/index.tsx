import ProjectsDesktop from '@/templates/home/projects/desktop';
import ProjectsMobile from '@/templates/home/projects/mobile';
import ResponsiveView from '@/components/ResponsiveView';
import styled from 'styled-components';

const ProjectsSection = styled.section``;

export default function Projects() {
  return (
    <ResponsiveView
      renderContainer={({ className, content }) => <ProjectsSection className={className}>{content}</ProjectsSection>}
      mobile={<ProjectsMobile />}
      desktop={<ProjectsDesktop />}
    />
  );
}
