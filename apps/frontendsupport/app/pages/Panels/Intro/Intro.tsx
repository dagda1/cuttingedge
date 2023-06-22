import { Panel } from '~/components/Panel/Panel';
import * as styles from './Intro.css';
import { Box, Heading } from '@cutting/component-library';
import { Caption } from '~/components/Caption/Caption';

export function Intro(): JSX.Element {
  return (
    <Panel className={styles.startContent}>
      <Box width="full" height="full" display="flex" justifyContent="center" alignItems="center" flexGrow={1}>
        <Caption>
          <Heading level="2">We can help if.....</Heading>
        </Caption>
      </Box>
    </Panel>
  );
}
