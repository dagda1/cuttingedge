import { ApplicationLayout } from '../../layouts/ApplicationLayout';
import { useParentSize } from '@cutting/use-get-parent-size';
import * as styles from './Sine2.css';
import { useRef } from 'react';

export function Sine2(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(containerRef, {
    debounceDelay: 500,
  });

  console.log({ width, height });

  return (
    <ApplicationLayout heading="SINETASTIC">
      <section ref={containerRef} className={styles.container}>
        <p>Fookies</p>
      </section>
    </ApplicationLayout>
  );
}

export default Sine2;
