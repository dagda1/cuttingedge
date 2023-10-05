import { HomePanel } from './HomePanel.js';
import { Box, Heading, Text, List, Redhatestimonial, DSTestimonial, C2Testimonial } from '@cutting/component-library';

export function NewHome(): JSX.Element {
  return (
    <Box>
      <HomePanel>
        <Box
          width="full"
          display="flex"
          flexDirection={{ mobile: 'column', desktop: 'row' }}
          // style={{ border: '10px solid brown' }}
          justifyContent="center"
          paddingTop="xxxlarge"
          height="full"
        >
          <Box
            display="flex"
            justifyContent="center"
            paddingTop={{ mobile: 'medium', desktop: 'xxxlarge' }}
            paddingBottom="xxxlarge"
            // style={{ border: '10px solid cyan' }}
            width="full"
          >
            <Heading level="1" center>
              STRUGGLING TO DELIVER FRONTEND FEATURES?
            </Heading>
          </Box>
          <Box
            display="flex"
            alignItems={{ mobile: 'center', desktop: 'flexStart' }}
            // style={{ border: '10px solid red' }}
            width="full"
            flexDirection="column"
            paddingX={{ mobile: 'large', desktop: 'none' }}
            paddingTop={{ mobile: 'medium', desktop: 'xxxlarge' }}
            paddingBottom={{ mobile: 'medium', desktop: 'xxxlarge' }}
          >
            <Heading level="2">We can help when....</Heading>
            <List space="large">
              <Text tone="primary" size="large">
                Your team are more familiar with backend development.
              </Text>
              <Text tone="primary" size="large">
                The deadline is looming.
              </Text>
              <Text tone="primary" size="large">
                You need that killer frontend feature.
              </Text>
            </List>
          </Box>
        </Box>
      </HomePanel>
      <Box style={{ marginBottom: '-5px' }}>
        <svg viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            className="ux-shape-fill"
            d="M0 0C0 0 200 50 500 50C800 50 1000 0 1000 0V101H0V1V0Z"
          ></path>
        </svg>
      </Box>
      <HomePanel mode="light" height="full">
        <Box paddingY="large">
          <Box display="flex" justifyContent="center" paddingX={{ mobile: 'large' }}>
            <Heading level="1" center tone="secondary" weight="weak">
              Testimonials: The True Measure of our Success
            </Heading>
          </Box>
          <Box display="flex" flexDirection={{ mobile: 'column', desktop: 'row' }}>
            <Redhatestimonial tone="warning" />
            <DSTestimonial />
            <C2Testimonial />
          </Box>
        </Box>
      </HomePanel>
    </Box>
  );
}
