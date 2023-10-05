import { TextLink } from '~/components/atoms/TextLink/TextLink';
import { Text } from '~/components/atoms/Text/Text';
import * as styles from './Testimonial.css';
import type { ReactNodeNoStrings } from '../Stack/Stack';
import { Stack } from '../Stack/Stack';
import type { TextStyleProps } from '~/style/typography/typography';

export function Testimonial({
  from,
  url,
  tone = 'secondary',
  children,
}: {
  from?: string;
  url?: string;
  tone?: TextStyleProps['tone'];
  children: ReactNodeNoStrings;
}): JSX.Element {
  return (
    <div className={styles.root}>
      <figure>
        {!!url && !!from && (
          <figcaption>
            <cite>
              <TextLink href={url} external>
                <Text tone={tone} weight="strong">
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
