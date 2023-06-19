import * as styles from './Testimonial.css';
import { TextLink } from '@cutting/component-library';
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
              <TextLink external href={url}>
                {from}
              </TextLink>
            </cite>
          </figcaption>
        )}
      </figure>
    </div>
  );
}
