import { Panel } from '~/components/Panel/Panel';
import { Box, Heading } from '@cutting/component-library';

export function Intro(): JSX.Element {
  return (
    <Panel>
      <Box width="full" height="full" display="flex" justifyContent="flexEnd" alignItems="center" flexGrow={1}>
        <Heading level="2">We can help if.....</Heading>
      </Box>
    </Panel>
  );
}
