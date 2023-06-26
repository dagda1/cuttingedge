import { Panel } from '~/components/Panel/Panel';
import { Box, Heading } from '@cutting/component-library';

export function Services(): JSX.Element {
  return (
    <Panel>
      <Box
        height="screen"
        width="screen"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Box position="relative" display="flex" justifyContent="spaceBetween">
          <Heading level="2">You have to get it right first time</Heading>
        </Box>
      </Box>
    </Panel>
  );
}
