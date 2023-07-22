import { List, Text } from '@cutting/component-library';
import { Panel } from '~/components/Panel/Panel';
import { ParallaxPanel, type ParallaxPanelProps } from '../ParallaxPanel/ParallaxPanel';

const topImages: ParallaxPanelProps['bottomImages'] = [
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
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953389/frontendsupport/turborepo_etzeks.png',
    width: 300,
    height: 168,
  },
  {
    type: 'parallax',
    alt: 'graphql',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953390/frontendsupport/graphql3_o0lvcj.png',
    width: 200,
    height: 226,
  },
];

const bottomImages: ParallaxPanelProps['topImages'] = [
  {
    type: 'parallax',
    alt: 'typescript',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953388/frontendsupport/typescript_gfu3xk.png',
    width: 175,
    height: 133,
  },
  {
    type: 'parallax',
    alt: 'vite',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1690022550/vite_zxmski.png',
    width: 200,
    height: 200,
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
        <List>
          <Text size="large" tone="primary">
            When you have to get it right first time
          </Text>
          <Text tone="primary" size="large">
            When your team are more familiar with backend development.
          </Text>
          <Text tone="primary" size="large">
            When the deadline is looming.
          </Text>
          <Text tone="primary" size="large">
            When you need that killer frontend feature.
          </Text>
        </List>
      </ParallaxPanel>
    </Panel>
  );
}
