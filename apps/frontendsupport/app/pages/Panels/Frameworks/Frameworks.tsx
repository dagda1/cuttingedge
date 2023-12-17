import { Box, Heading, List, Text } from '@cutting/component-library';
import { Panel } from '../../../components/Panel/Panel.js';
import { ParallaxPanel, type ParallaxPanelProps } from '../ParallaxPanel/ParallaxPanel.js';

const topImages: ParallaxPanelProps['bottomImages'] = [
  {
    type: 'parallax',
    alt: 'graphql',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953390/frontendsupport/graphql3_o0lvcj.png',
    width: 200,
    height: 226,
  },
  {
    type: 'parallax',
    alt: 'React',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953389/frontendsupport/react_ejegqn.png',
    width: 200,
    height: 200,
  },
  {
    type: 'parallax',
    alt: 'Turborepo',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1693760354/turborepo_w1wh1z.png',
    width: 300,
    height: 168,
  },
];

const bottomImages: ParallaxPanelProps['topImages'] = [
  {
    type: 'parallax',
    alt: 'vite',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1690022550/vite_zxmski.png',
    width: 200,
    height: 200,
  },
  {
    type: 'parallax',
    alt: 'typescript',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953388/frontendsupport/typescript_gfu3xk.png',
    width: 175,
    height: 133,
  },
  {
    type: 'parallax',
    alt: 'eslint',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953392/frontendsupport/eslint_qkkjiw.png',
    width: 347,
    height: 145,
  },
];

export function Frameworks(): JSX.Element {
  return (
    <Panel>
      <ParallaxPanel topImages={topImages} bottomImages={bottomImages}>
        <Box marginLeft="small" height="full">
          <Heading level="1">We can help when....</Heading>
          <List>
            <Text size="large" tone="primary">
              You have to get it right the first time.
            </Text>
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
      </ParallaxPanel>
    </Panel>
  );
}
