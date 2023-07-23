import { Box, C2Testimonial, DSTestimonial, PageBlock, Redhatestimonial, Stack } from '@cutting/component-library';
import { background } from '~/pages/Panels/Services/Service.css';
import cs from 'classnames';
import { bg } from '~/pages/Home/HomeMobile.css';

export default function Testimonials(): JSX.Element {
  return (
    <Box marginTop="xxxlarge" display="flex" justifyContent="center">
      <Box className={cs(bg, background)}></Box>
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
