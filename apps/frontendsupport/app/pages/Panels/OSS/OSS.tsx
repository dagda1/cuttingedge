import { Panel } from '~/components/Panel/Panel';
import { Box, Heading, TextLink } from '@cutting/component-library';
import type { ParallaxPanelProps } from '../ParallaxPanel/ParallaxPanel';
import { ParallaxPanel } from '../ParallaxPanel/ParallaxPanel';

const topImages: ParallaxPanelProps['topImages'] = [
  {
    type: 'parallax',
    alt: 'redux-form',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953389/frontendsupport/redux-form_rajm5q.png',
    width: 306,
    height: 165,
  },
  {
    type: 'parallax',
    alt: 'Backstage',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953392/frontendsupport/backstage_tymu1h.png',
    width: 300,
    height: 300,
  },
  {
    type: 'parallax',
    alt: 'React JSON schema form',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1690387086/rjsf_ygpxse.png',
    width: 250,
    height: 250,
  },
];

const bottomImages: ParallaxPanelProps['bottomImages'] = [
  {
    type: 'parallax',
    alt: 'Enzyme',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1690023477/enzyme_pidmy1.png',
    width: 200,
    height: 125,
  },
  {
    type: 'parallax',
    alt: 'Ember',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953391/frontendsupport/emberjs_ddnv5e.png',
    width: 250,
    height: 250,
  },
  {
    type: 'parallax',
    alt: 'visx',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953389/frontendsupport/visx_bgqeyt.png',
    width: 300,
    height: 145,
  },
];

export function OSS(): JSX.Element {
  return (
    <Panel>
      <ParallaxPanel topImages={topImages} bottomImages={bottomImages}>
        <Box display="flex" justifyContent="center" paddingX={{ mobile: 'small', tablet: 'none' }}>
          <Heading level="2">
            <TextLink external href="https://cutting.scot/oss">
              We have 350+ merged pull requests into many, many popular open source projects
            </TextLink>
          </Heading>
        </Box>
      </ParallaxPanel>
    </Panel>
  );
}
