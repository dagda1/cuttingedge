import type { LegacyRef, Ref } from 'react';
import { Scroller } from '../Scroller/Scroller';
import { Box, Heading, PageBlock, Stack } from '@cutting/component-library';
import { CTAButton } from '../CTAButton/CTAButton';

interface PageProps {
  innerRef?: Ref<HTMLDivElement>;
  className?: string;
  buttonRef?: LegacyRef<HTMLButtonElement>;
}
export function FrontPage({ className, innerRef, buttonRef, ...props }: PageProps): JSX.Element {
  return (
    <PageBlock>
      <Box
        height="screen"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        ref={innerRef}
      >
        <Stack space="large" align="center">
          <Heading center level="1">
            STRUGGLING TO DELIVER FRONTEND FEATURES?
          </Heading>
          <CTAButton link="#">FIND OUT HOW WE CAN HELP</CTAButton>
          <div>
            <Scroller />
          </div>
        </Stack>
      </Box>
    </PageBlock>
  );
}
