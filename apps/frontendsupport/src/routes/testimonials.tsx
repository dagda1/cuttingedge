import {
  Box,
  C2Testimonial,
  DSTestimonial,
  Heading,
  PageBlock,
  Redhatestimonial,
  Stack,
} from '@cutting/component-library';

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
          </Box>
        </Stack>
      </PageBlock>
    </Box>
  );
}
