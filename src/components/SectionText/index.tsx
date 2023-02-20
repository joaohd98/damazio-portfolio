import WithChildren from '@/@types/with-children';
import { forwardRef } from 'react';
import Title from './styles';

const SectionText = forwardRef<HTMLHeadingElement, WithChildren>(({ className, children }, ref) => {
  return (
    <Title ref={ref} className={className}>
      {children}
    </Title>
  );
});

export default SectionText;
