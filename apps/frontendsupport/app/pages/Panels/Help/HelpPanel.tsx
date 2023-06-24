import type { Ref } from 'react';
import { Panel } from '~/components/Panel/Panel';
import painText from '~/images/paintext_wide.png';
import pain from '~/images/pain_wide.png';
import * as styles from './HelpPanel.css';
import cs from 'classnames';
import { Box, Heading, Stack } from '@cutting/component-library';
import { MotionImage } from '~/components/MotionImage/MotionImage';

interface HelpPanelProps {
  innerRef: Ref<HTMLDivElement>;
}

export function HelpPanel({ innerRef }: HelpPanelProps): JSX.Element {
  return (
    <Panel innerRef={innerRef}>
      <Box height="full" display="flex" alignItems="center" justifyContent="center" position="relative">
        <Box position="relative" display="flex" justifyContent="spaceBetween">
          <Stack space="medium">
            <Heading className={cs(styles.heading, 'parallax')} level="2">
              You have to get it right first time
            </Heading>

            <MotionImage type="static" position="absolute" alt="software pain" src={pain} />
            <MotionImage type="parallax" alt="software pain" src={painText} />
          </Stack>
        </Box>
      </Box>
    </Panel>
  );
}
