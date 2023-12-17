import { Box, Heading } from '@cutting/component-library';
import { Panel } from '../../../components/Panel/Panel.js';
import type { ParallaxPanelProps } from '../ParallaxPanel/ParallaxPanel.js';
import { ParallaxPanel } from '../ParallaxPanel/ParallaxPanel.js';

const topImages: ParallaxPanelProps['topImages'] = [
  {
    type: 'parallax',
    alt: 'Lloyds Bank',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953390/frontendsupport/lloyds_bank_logo_lyiwxl.png',
    width: 200,
    height: 184,
  },
  {
    type: 'parallax',
    alt: 'apple',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953392/frontendsupport/apple_aqbapa.png',
    width: 225,
    height: 225,
  },
  {
    type: 'parallax',
    alt: 'Disclosure Scotland',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953391/frontendsupport/disclosure_zsbzpj.png',
    width: 284,
    height: 177,
  },
];

const bottomImages: ParallaxPanelProps['bottomImages'] = [
  {
    type: 'parallax',
    alt: 'Waitrose',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953388/frontendsupport/waitrose_sp7a2j.png',
    width: 300,
    height: 200,
  },
  {
    type: 'parallax',
    alt: 'HP',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953391/frontendsupport/hp_xizk21.png',
    width: 225,
    height: 225,
  },
  {
    type: 'parallax',
    alt: 'Volovo Ocean Race',
    src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953388/frontendsupport/volvo_xx4ww7.png',
    width: 200,
    height: 200,
  },
];

export function Clients(): JSX.Element {
  return (
    <Panel className="clients">
      <ParallaxPanel topImages={topImages} bottomImages={bottomImages}>
        <Heading level="2">
          <Box margin={{ mobile: 'medium', tablet: 'none' }}>We have worked with the big names.</Box>
        </Heading>
      </ParallaxPanel>
    </Panel>
  );
}
