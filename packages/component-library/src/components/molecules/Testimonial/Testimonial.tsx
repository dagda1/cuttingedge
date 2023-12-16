import { TextLink } from '~/components/atoms/TextLink/TextLink.js';
import { Text } from '~/components/atoms/Text/Text.js';
import * as styles from './Testimonial.css.js';
import type { ReactNodeNoStrings } from '../Stack/Stack.js';
import { Stack } from '../Stack/Stack.js';

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
        {!!url && !!from && (
          <figcaption>
            <cite>
              <TextLink href={url} external>
                <Text tone="promote" weight="strong">
                  {from}
                </Text>
              </TextLink>
            </cite>
          </figcaption>
        )}
        <blockquote>
          <Stack space="medium">
            {children}
            <hr />
          </Stack>
        </blockquote>
      </figure>
    </div>
  );
}
