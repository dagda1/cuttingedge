import { useRef } from 'react';

import { ApplicationLayout } from '~/layouts/ApplicationLayout';

import * as styles from './Polar.css';

export function Polar(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <ApplicationLayout heading="Polar">
      <section ref={containerRef} className={styles.container}>
        <h1>Polar</h1>
      </section>
    </ApplicationLayout>
  );
}

export default Polar;
