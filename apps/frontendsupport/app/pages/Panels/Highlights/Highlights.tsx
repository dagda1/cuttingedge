import { Box, Heading, Stack } from '@cutting/component-library';
import { Panel } from '~/components/Panel/Panel';
import logrocket from '~/images/logrocket.png';
import contributor from '~/images/contributor.png';
import { ParallaxPanel, type ParallaxPanelProps } from '../ParallaxPanel/ParallaxPanel';

const topImages: ParallaxPanelProps['topImages'] = [
  { type: 'parallax', alt: 'Backstage contributor of the month', src: contributor, width: 400, height: 296 },
];

const bottomImages: ParallaxPanelProps['bottomImages'] = [
  { type: 'parallax', alt: 'logrocket writer', src: logrocket, width: 400, height: 256 },
];

export function Highlights(): JSX.Element {
  return (
    <Panel>
      <ParallaxPanel topImages={topImages} bottomImages={bottomImages}>
        <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center">
          <Stack space="large">
            <Heading level="2">Contributor of the month for Spotify Backstage.</Heading>
            <Heading level="2">Professional writing for logrocket.</Heading>
          </Stack>
        </Box>
      </ParallaxPanel>
    </Panel>
  );
}
