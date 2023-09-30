import { Box, C2Testimonial, DSTestimonial, PageBlock, Redhatestimonial, Stack } from '@cutting/component-library';
import { LazyBackgroundImage } from '~/components/LazyBackgroundImage/LazyBackgroundImage';

export default function Testimonials(): JSX.Element {
  return (
    <Box paddingTop="xxxlarge" display="flex" justifyContent="center">
      <LazyBackgroundImage
        backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/v1689953393/frontendsupport/pain_wide_jjmyp6.png"
        backgroundStyle="static"
      />
      <PageBlock>
        <Stack space="large">
          <Redhatestimonial />
          <DSTestimonial />
          <C2Testimonial />
        </Stack>
      </PageBlock>
    </Box>
  );
}
