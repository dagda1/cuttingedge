import { Panel } from '../../../components/Panel/Panel.js';
import { Box, Heading } from '@cutting/component-library';

export function Final(): JSX.Element {
  return (
    <Panel className="final">
      <Box height="screen" width="screen" display="flex" justifyContent="center" alignItems="center">
        <Heading level="2">We live and breathe frontend development</Heading>
      </Box>
    </Panel>
  );
}
