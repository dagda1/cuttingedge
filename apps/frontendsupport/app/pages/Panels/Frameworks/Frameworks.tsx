import { Heading } from '@cutting/component-library';
import { Panel } from '~/components/Panel/Panel';
import typescript from '~/images/typescript.png';
import react from '~/images/react.png';
import graphql from '~/images/graphql3.png';
import vite from '~/images/vite.png';
import eslint from '~/images/eslint.png';
import turborepo from '~/images/turborepo.png';
import { ParallaxPanel, type ParallaxPanelProps } from '../ParallaxPanel/ParallaxPanel';

const topImages: ParallaxPanelProps['topImages'] = [
  { type: 'parallax', alt: 'typescript', src: typescript },
  { type: 'static', alt: 'replace webpack with vite', src: vite },
  { type: 'parallax', alt: 'eslint', src: eslint },
];

const bottomImages: ParallaxPanelProps['bottomImages'] = [
  { type: 'static', alt: 'React', src: react },
  { type: 'parallax', alt: 'Turborepo', src: turborepo },
  { type: 'parallax', alt: 'graphql', src: graphql },
];

export function Frameworks(): JSX.Element {
  return (
    <Panel>
      <ParallaxPanel topImages={topImages} bottomImages={bottomImages}>
        <Heading level="2">Your team are more familiar with backend development.</Heading>
      </ParallaxPanel>
    </Panel>
  );
}
