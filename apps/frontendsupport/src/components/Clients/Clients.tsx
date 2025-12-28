import { Box, Heading } from '@cutting/component-library';
import cs from 'classnames';

import { Panel } from '~/pages/Home/Panel/Panel';

import { LazyLoadedImage } from '../LazyLoadedImage/LazyLoadedImage';
import * as styles from './Clients.css';

const clients = [
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696609565/volvo_qhsx69.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696610104/lloyds_bank_logol_vnortq.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696680163/apple_whmbee.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696596781/hp_jlfi7z.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696691538/redhat_sms6oc.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696596781/waitrose_qmcwgn.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696596781/disclosure_efy46i.png',
] as const;

export function Clients(): JSX.Element {
  return (
    <Panel className={cs('services', styles.front)} marginY="xxxlarge">
      <Panel mode="light" flexDirection="column" paddingTop="medium">
        <Box paddingBottom="xxxlarge">
          <Heading center level="1">
            I have worked with
          </Heading>
        </Box>
        <Panel mode="light" paddingBottom="medium">
          {clients.map((c) => (
            <Box key={c} marginRight="xxsmall" className="box">
              <LazyLoadedImage layout="constrained" src={c.trim()} />
            </Box>
          ))}
        </Panel>
        <Box paddingY="large">
          <Heading center level="2">
            And many more...
          </Heading>
        </Box>
      </Panel>
    </Panel>
  );
}
