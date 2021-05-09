import { FC } from 'react';
import { useRef } from 'react';
import { ApplicationLayout } from 'src/layouts/ApplicationLayout';
import { ResponsiveSVG } from '@cutting/svg';
import { useParentSize } from '@cutting/hooks';

export const Sine: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(containerRef);
  return (
    <ApplicationLayout heading="Sine Wave">
      <section ref={containerRef}>
        <ResponsiveSVG width={width} height={height}>
          <circle fill="#fff" x={12} y={20} r={200} />
        </ResponsiveSVG>
      </section>
    </ApplicationLayout>
  );
};

export default Sine;
