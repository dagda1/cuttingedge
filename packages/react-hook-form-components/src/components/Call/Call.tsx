import { InlineWidget } from 'react-calendly';
import * as styles from './Call.css.js';
import type { CallProps } from './types';
import { Box } from '@cutting/component-library/src/components/molecules/Box/Box';

export function Call({ callType }: CallProps): JSX.Element {
  return (
    <Box component="section" className={styles.root}>
      <InlineWidget
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideGdprBanner: false,
          hideLandingPageDetails: true,
          primaryColor: '00a2ff',
          textColor: '4d5055',
        }}
        url={`https://calendly.com/dagda1/${callType}`}
      />
    </Box>
  );
}
