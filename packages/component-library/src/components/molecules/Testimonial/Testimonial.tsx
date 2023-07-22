import { TextLink } from '~/components/atoms/TextLink/TextLink';
import * as styles from './Testimonial.css';
import type { ReactNodeNoStrings } from '../Stack/Stack';
import { Stack } from '../Stack/Stack';

export function Testimonial({
  from,
  url,
  children,
}: {
  from?: string;
  url?: string;
  children: ReactNodeNoStrings;
}): JSX.Element {
  return (
    <div className={styles.root}>
      <figure>
        <blockquote>
          <Stack space="medium">
            {children}
            <hr />
          </Stack>
        </blockquote>
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
