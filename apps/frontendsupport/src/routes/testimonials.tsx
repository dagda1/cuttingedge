import {
  Box,
  C2Testimonial,
  DSTestimonial,
  Heading,
  PageBlock,
  Redhatestimonial,
  Stack,
} from '@cutting/component-library';

import { ContactButtons } from '~/components/Contact/ContactButtons';

export default function Testimonials(): JSX.Element {
  return (
    <Box paddingTop="xxxlarge" display="flex" justifyContent="center">
      <PageBlock>
        <Stack space="large">
          <Heading center level="1">
            Testimonials: The True Measure of Success
          </Heading>
          <Box>
            <DSTestimonial />
            <C2Testimonial />
            <Redhatestimonial />
            <ContactButtons justify="center" />
          </Box>
        </Stack>
      </PageBlock>
    </Box>
  );
}
