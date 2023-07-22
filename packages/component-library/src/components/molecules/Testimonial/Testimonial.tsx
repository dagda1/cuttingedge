import { TextLink } from '~/components/atoms/TextLink/TextLink';
import * as styles from './Testimonial.css';
import type { ReactNode } from 'react';

export function Testimonial({
  from,
  url,
  children,
}: {
  from?: string;
  url?: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <div className={styles.root}>
      <figure>
        <blockquote>{children}</blockquote>
        {!!url && !!from && (
          <figcaption>
            <cite>
              <TextLink href={url} external>
                {from}
              </TextLink>
            </cite>
          </figcaption>
        )}
      </figure>
    </div>
  );
}
