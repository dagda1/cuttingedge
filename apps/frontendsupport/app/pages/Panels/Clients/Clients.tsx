import { Panel } from '~/components/Panel/Panel';
import lloyds from '~/images/lloyds_bank_logo.png';
import waitrose from '~/images/waitrose.png';
import volvo from '~/images/volvo.png';
import { Heading } from '@cutting/component-library';
import apple from '~/images/apple.png';
import disclosure from '~/images/disclosure.png';
import hp from '~/images/hp.png';
import type { ParallaxPanelProps } from '../ParallaxPanel/ParallaxPanel';
import { ParallaxPanel } from '../ParallaxPanel/ParallaxPanel';

const topImages: ParallaxPanelProps['topImages'] = [
  { type: 'parallax', alt: 'Lloyds Bank', src: lloyds },
  { type: 'parallax', alt: 'apple', src: apple },
  { type: 'parallax', alt: 'Disclosure Scotland', src: disclosure },
];

const bottomImages: ParallaxPanelProps['bottomImages'] = [
  { type: 'parallax', alt: 'Waitrose', src: waitrose },
  { type: 'parallax', alt: 'Volovo Ocean Race', src: volvo },
  { type: 'parallax', alt: 'HP', src: hp },
];

export function Clients(): JSX.Element {
  return (
    <Panel className="clients">
      <ParallaxPanel topImages={topImages} bottomImages={bottomImages}>
        <Heading level="2">We have worked with the big names.</Heading>
      </ParallaxPanel>
    </Panel>
  );
}
