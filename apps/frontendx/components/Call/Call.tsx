import { PageLayout } from '../Layouts/PageLayout';
import { InlineWidget } from 'react-calendly';
import * as styles from './Call.css';
import type { CallProps } from './types';

export function Call({ callType }: CallProps): JSX.Element {
  return (
    <PageLayout className={styles.root}>
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
    </PageLayout>
  );
}
