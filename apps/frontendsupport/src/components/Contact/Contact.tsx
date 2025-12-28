import { Box, Heading, Stack } from '@cutting/component-library';
import { lazy, Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';

import * as styles from './Contact.css';

const ContactForm = lazy(() =>
  import('@cutting/react-hook-form-components').then((module) => ({ default: module.ContactForm })),
);

export function Contact(): JSX.Element {
  return (
    <Box paddingTop="xxxlarge" width="full" height="full" position="relative" zIndex="dropdown">
      <Stack space="large" align="center">
        <Heading level="1">Let&apos;s Talk</Heading>
        <Heading level="2">I can help&lsquo;</Heading>
        <Box className={styles.container}>
          <Suspense
            fallback={
              <div>
                <Skeleton
                  baseColor="#1a2332"
                  highlightColor="#2a3442"
                  height={50}
                  count={4}
                  style={{ marginBottom: '1.5rem' }}
                />
              </div>
            }
          >
            <ContactForm />
          </Suspense>
        </Box>
      </Stack>
    </Box>
  );
}
