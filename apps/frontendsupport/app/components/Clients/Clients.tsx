import { Box } from '@cutting/component-library';
import { LazyLoadedImage } from '../LazyLoadedImage/LazyLoadedImage.js';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { horizontalLoop } from './loop';
import { useRef } from 'react';
import gsap from 'gsap';

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
  const savedCallback = useRef<any>();

  useIsomorphicLayoutEffect(() => {
    if (!width) {
      return;
    }
    if (typeof id.current === 'number') {
      savedCallback.current.refresh(true);
      return;
    }
    const boxes = gsap.utils.toArray<HTMLElement>('.box');
    const loop = horizontalLoop(boxes, {
      paused: true,
      paddingRight: 0,
    });
    savedCallback.current = loop;
    function tick() {
      savedCallback.current.next({ duration: 0.4, ease: 'power1.inOut' });
    }
    id.current = setInterval(tick, 1000);
  }, [width]);

  return (
    <>
      {clients.map((c) => (
        <Box key={c} marginRight="xxxlarge" className="box">
          <LazyLoadedImage layout="constrained" src={c.trim()} />
        </Box>
      ))}
    </>
  );
}
