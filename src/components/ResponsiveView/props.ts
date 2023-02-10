import { ReactNode } from 'react';

export default interface ResponsiveViewProps {
  renderContainer: (props: { content: ReactNode; className: string }) => ReactNode;
  mobile: ReactNode;
  desktop: ReactNode;
}
