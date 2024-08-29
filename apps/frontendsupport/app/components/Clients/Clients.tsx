import { Box, Heading } from '@cutting/component-library';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { waitUntil } from '@cutting/util';
import cs from 'classnames';
import gsap from 'gsap';
import { useRef } from 'react';

import { Panel } from '~/pages/Home/Panel/Panel';

import { LazyLoadedImage } from '../LazyLoadedImage/LazyLoadedImage';
import * as styles from './Clients.css';
import { horizontalLoop } from './loop';

const clients = [
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696609565/volvo_qhsx69.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696610104/lloyds_bank_logol_vnortq.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696680163/apple_whmbee.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696596781/hp_jlfi7z.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696691538/redhat_sms6oc.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696596781/waitrose_qmcwgn.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696596781/disclosure_efy46i.png',
] as const;

interface ClientsProps {
  width?: number;
}

export function Clients({ width }: ClientsProps): JSX.Element {
  const id = useRef<NodeJS.Timeout>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const savedCallback = useRef<any>();
  const boxRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!width) {
      return;
    }

    async function main() {
      if (!boxRef.current) {
        return;
      }

      if (typeof id.current === 'number') {
        savedCallback.current.refresh(true);
        return;
      }

      const boxes = gsap.utils.toArray<HTMLElement>('.box');

      await waitUntil(() => {
        console.log(`checking, boxes.length is ${boxes.length} & boxes[0].offsetWidth = ${boxes[0].offsetWidth}`);
        return boxes.length === 7 && boxes[0].offsetWidth > 0;
      }, 500);

      const loop = horizontalLoop(boxes, {
        paused: true,
        paddingRight: 0,
      });

      savedCallback.current = loop;

      function tick() {
        savedCallback.current.next({ duration: 0.4, ease: 'power1.inOut' });
      }

      id.current = setInterval(tick, 1000);
    }

    main();
  }, [width]);

  return (
    <Panel className={cs('services', styles.front)} marginY="xxxlarge">
      <Panel mode="light" flexDirection="column" paddingTop="medium">
        <Box paddingBottom="large">
          <Heading center level="1">
            I have worked with
          </Heading>
        </Box>
        <Panel mode="light" paddingBottom="medium">
          {clients.map((c, i) => (
            <Box key={c} marginRight="xxsmall" className="box" ref={i === 0 ? boxRef : undefined}>
              <LazyLoadedImage layout="constrained" src={c.trim()} />
            </Box>
          ))}
        </Panel>
      </Panel>
    </Panel>
  );
}
