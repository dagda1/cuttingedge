import { Panel } from '~/components/Panel/Panel';
import backstage from '~/images/backstage.png';
import ember from '~/images/emberjs.png';
import { TextLink } from '@cutting/component-library';
import rjsf from '~/images/rjsf.png';
import enzyme from '~/images/enzyme.png';
import reduxForm from '~/images/redux-form.png';
import visx from '~/images/visx.png';
import type { ParallaxPanelProps } from '../ParallaxPanel/ParallaxPanel';
import { ParallaxPanel } from '../ParallaxPanel/ParallaxPanel';

const topImages: ParallaxPanelProps['topImages'] = [
  { type: 'parallax', alt: 'Backstage', src: backstage },
  { type: 'parallax', alt: 'redux-form', src: reduxForm },
  { type: 'static', alt: 'React JSON schema form', src: rjsf },
];

const bottomImages: ParallaxPanelProps['bottomImages'] = [
  { type: 'static', alt: 'Ember', src: ember },
  { type: 'parallax', alt: 'Enzyme', src: enzyme },
  { type: 'parallax', alt: 'visx', src: visx },
];

export function OSS(): JSX.Element {
  return (
    <Panel>
      <ParallaxPanel topImages={topImages} bottomImages={bottomImages}>
        <h2>
          <TextLink size="large" external href="https://cutting.scot/oss">
            We have 350+ merged pull requests into many, many popular open source projects
          </TextLink>
        </h2>
      </ParallaxPanel>
    </Panel>
  );
}
