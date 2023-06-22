import type { Ref } from 'react';
import { Panel } from '~/components/Panel/Panel';
import painText from '~/images/paintext_wide.png';
import pain from '~/images/pain_wide.png';
import * as styles from './HelpPanel.css';
import * as panelStyles from '../Panels.css';
import cs from 'classnames';
import { Heading } from '@cutting/component-library';

interface HelpPanelProps {
  innerRef: Ref<HTMLDivElement>;
}

export function HelpPanel({ innerRef }: HelpPanelProps): JSX.Element {
  return (
    <Panel className={styles.main} innerRef={innerRef}>
      <div className={panelStyles.imageHolder}>
        <div className={styles.doubleImages}>
          <figure>
            <img alt="software pain" src={pain} />
          </figure>
          <figure className="parallax">
            <img alt="software pain" src={painText} />
          </figure>
        </div>

        <div className={cs(styles.headings, panelStyles.caption)}>
          <Heading level="2">You have to get it right first time</Heading>
          <Heading level="2">You need access to industry experts</Heading>
          <Heading level="2">Your team are more familiar with backend development.</Heading>
        </div>
      </div>
    </Panel>
  );
}
