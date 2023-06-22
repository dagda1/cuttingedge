import { useRef } from 'react';
import * as styles from './HomeMobile.css';
import { Intro } from '../Panels/Intro/Intro';
import { HelpPanel } from '../Panels/Help/HelpPanel';

export function HomeMobile(): JSX.Element {
  const panelsContainer = useRef<HTMLDivElement>(null);
  const dimensionsRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={panelsContainer} className={styles.panels}>
      <Intro />
      <HelpPanel innerRef={dimensionsRef} />
      {/* <Frameworks />
      <OSS />
      <Clients />
      <Final /> */}
    </div>
  );
}
