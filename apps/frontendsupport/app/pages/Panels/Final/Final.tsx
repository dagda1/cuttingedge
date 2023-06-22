import { Panel } from '~/components/Panel/Panel';
import * as styles from './Final.css';
import cs from 'classnames';
import { Heading } from '@cutting/component-library';
import { Caption } from '~/components/Caption/Caption';

export function Final(): JSX.Element {
  return (
    <Panel className={cs('final', styles.final)}>
      <Caption>
        <Heading level="2">We live and breathe frontend development</Heading>
      </Caption>
    </Panel>
  );
}
