import { lazy, Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';

const ContactForm = lazy(() =>
  import('@cutting/react-hook-form-components').then((module) => ({ default: module.ContactButtons })),
);

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
      <ContactForm callType="chat" justify={justify} />
    </Suspense>
  );
}
