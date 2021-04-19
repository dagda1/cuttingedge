import { FC } from 'react';
import { useRef } from 'react';
import { ApplicationLayout } from 'src/layouts/ApplicationLayout';

export const Sine: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <ApplicationLayout heading="Sine Wave">
      <section ref={containerRef}>
        <h1>What goes here</h1>
      </section>
    </ApplicationLayout>
  );
};
