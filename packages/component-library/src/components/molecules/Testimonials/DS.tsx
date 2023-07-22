import { Box } from '../Box/Box';
import { Testimonial } from '../Testimonial/Testimonial';
import { Text } from '~/components/atoms/Text/Text';

export function DSTestimonial(): JSX.Element {
  return (
    <Box marginY="large">
      <Testimonial
        from="Paul Kearney (Consulting Lead Product Manager Disclosure Scotland Apr. 2017 - Feb. 2020)"
        url="https://www.mygov.scot/about-disclosure-scotland"
      >
        <Text component="p">
          Frontend DX were part of a challenging transformation programme. They were able to adapt and deliver under
          ever changing circumstances as the team grew and the complexity of the business and technical solution
          increased.
        </Text>{' '}
        <Text component="strong">
          Frontend DX&apos;s involvement laid the foundations that helped develop a significant public-facing digital
          offering.
        </Text>
        <Text component="p">
          Their experience took the risk away from the frontend, and contributed to building a robust software platform.
        </Text>
      </Testimonial>
    </Box>
  );
}
