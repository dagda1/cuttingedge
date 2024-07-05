import cs from 'classnames';

import { Text } from '~/components/atoms/Text/Text';
import { TextLink } from '~/components/atoms/TextLink/TextLink';
import type { TextStyleProps } from '~/style/typography/typography';

import type { ReactNodeNoStrings } from '../Stack/Stack';
import { Stack } from '../Stack/Stack';
import * as styles from './Testimonial.css';

interface TestimonialProps {
  from?: string;
  url?: string;
  tone?: TextStyleProps['tone'];
  children: ReactNodeNoStrings;
}

export function Testimonial({ from, url, tone = 'secondary', children }: TestimonialProps): JSX.Element {
  return (
    <div className={cs(styles.root, 'testimonial')}>
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
