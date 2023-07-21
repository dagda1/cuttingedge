import { Heading, Stack } from '@cutting/component-library';
import { Panel } from '~/components/Panel/Panel';
import { ParallaxPanel, type ParallaxPanelProps } from '../ParallaxPanel/ParallaxPanel';

const topImages: ParallaxPanelProps['topImages'] = [
  {
    type: 'parallax',
    alt: 'typescript',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953388/frontendsupport/typescript_gfu3xk.png',
    width: 175,
    height: 133,
  },
  {
    type: 'parallax',
    alt: 'replace webpack with vite',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953389/frontendsupport/vite_dhhklu.png',
    width: 300,
    height: 158,
  },
  {
    type: 'parallax',
    alt: 'eslint',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953392/frontendsupport/eslint_qkkjiw.png',
    width: 347,
    height: 145,
  },
];

const bottomImages: ParallaxPanelProps['bottomImages'] = [
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

export function Frameworks(): JSX.Element {
  return (
    <Panel>
      <ParallaxPanel topImages={topImages} bottomImages={bottomImages}>
        <Stack space="xxlarge">
          <Heading level="2">When you have to get it right first time</Heading>
          <Heading level="2">When your team are more familiar with backend development.</Heading>
          <Heading level="2">When the deadline is looming.</Heading>
          <Heading level="2">When you need that killer frontend feature.</Heading>
        </Stack>
      </ParallaxPanel>
    </Panel>
  );
}
