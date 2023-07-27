import { Box } from '../Box/Box';
import { Testimonial } from '../Testimonial/Testimonial';
import { Text } from '~/components/atoms/Text/Text';

export function DSTestimonial(): JSX.Element {
  return (
    <Box marginY="medium">
      <Testimonial
        from="Paul Kearney (Consulting Lead Product Manager Disclosure Scotland Apr. 2017 - Feb. 2020)"
        url="https://www.mygov.scot/about-disclosure-scotland"
      >
        <Text component="p">
          Paul was part of a challenging transformation programme. He was able to adapt and deliver under ever changing
          circumstances as the team grew and the complexity of the business and technical solution increased.
        </Text>
        <Text component="strong">
          Paul&apos;s involvement laid the foundations that helped develop a significant public-facing digital offering.
        </Text>
        <Text component="p">
          His experience took the risk away from the frontend, and contributed to building a robust software platform.
        </Text>
      </Testimonial>
    </Box>
  );
}
