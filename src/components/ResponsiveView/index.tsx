import ResponsiveViewProps from '@/components/ResponsiveView/props';

export default function ResponsiveView({ renderContainer, mobile, desktop }: ResponsiveViewProps) {
  return (
    <>
      {renderContainer({ content: desktop, className: 'only-desktop' })}
      {renderContainer({ content: mobile, className: 'only-mobile' })}
    </>
  );
}
