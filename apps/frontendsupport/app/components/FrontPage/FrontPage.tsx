// import { Scroller } from '../Scroller/Scroller';
import { Box, Heading, PageBlock, Stack } from '@cutting/component-library';
import { CTAButton } from '../CTAButton/CTAButton';

export function FrontPage(): JSX.Element {
  return (
    <PageBlock>
      <Box height="screen" display="flex" flexDirection="column" justifyContent="center">
        <Stack space="xxxlarge" align="center">
          <Heading center level="1">
            STRUGGLING TO DELIVER FRONTEND FEATURES?
          </Heading>
          <CTAButton link="/services/home">FIND OUT HOW WE CAN HELP</CTAButton>
          {/* <Scroller /> */}
        </Stack>
      </Box>
    </PageBlock>
  );
}
