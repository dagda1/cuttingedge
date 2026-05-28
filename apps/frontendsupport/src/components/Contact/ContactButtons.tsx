import { Box } from '@cutting/component-library';
import { ContactButtons as ContactForm } from '@cutting/react-hook-form-components';
import { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';

interface ContactButtonsProps {
  justify?: 'flexStart' | 'center' | 'flexEnd';
}

export function ContactButtons({ justify: justify = 'flexStart' }: ContactButtonsProps): JSX.Element {
  return (
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
      <Box>
        <ContactForm callType="chat" justify={justify} />
      </Box>
    </Suspense>
  );
}
