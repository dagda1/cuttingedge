import { Panel } from '~/components/Panel/Panel';
import { Box, Heading } from '@cutting/component-library';
import { Caption } from '~/components/Caption/Caption';

export function Intro(): JSX.Element {
  return (
    <Panel>
      <Box width="full" height="full" display="flex" justifyContent="flexEnd" alignItems="center" flexGrow={1}>
        <Caption>
          <Heading level="2">We can help if.....</Heading>
        </Caption>
      </Box>
    </Panel>
  );
}
