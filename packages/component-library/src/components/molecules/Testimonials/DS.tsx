import { Text } from '~/components/atoms/Text/Text';
import type { TextStyleProps } from '~/style/typography/typography';

import { Box } from '../Box/Box';
import { Testimonial } from '../Testimonial/Testimonial';

export function DSTestimonial({ tone }: { tone?: TextStyleProps['tone'] }): JSX.Element {
  return (
    <Box marginY="medium">
      <Testimonial
        from="Paul Kearney (Consulting Lead Product Manager Disclosure Scotland Apr. 2017 - Feb. 2020)"
        url="https://www.linkedin.com/in/pauljkearney/"
        tone={tone}
      >
        <Text component="p" tone="secondary">
          Paul was part of a challenging transformation programme. He was able to adapt and deliver under ever changing
          circumstances as the team grew and the complexity of the business and technical solution increased.
        </Text>
        <Text component="p" tone="secondary">
          Paul&apos;s involvement laid the foundations that helped develop a significant public-facing digital offering.
        </Text>
        <Text component="p" tone="secondary">
          His experience took the risk away from the frontend, and contributed to building a robust software platform.
        </Text>
      </Testimonial>
    </Box>
  );
}
