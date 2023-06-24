import { Panel } from '~/components/Panel/Panel';
import lloyds from '~/images/lloyds_bank_logo.png';
import waitrose from '~/images/waitrose.png';
import volvo from '~/images/volvo.png';
import { MotionImage } from '~/components/MotionImage/MotionImage';
import { Box, Heading } from '@cutting/component-library';
import apple from '~/images/apple.png';
import disclosure from '~/images/disclosure.png';
import hp from '~/images/hp.png';

export function Clients(): JSX.Element {
  return (
    <Panel className="clients">
      <Box height="full" position="relative" display="flex" flexDirection="column" justifyContent="spaceEvenly">
        <Box display="flex" alignItems="center">
          <MotionImage type="parallax" alt="Lloyds Bank" src={lloyds} />
          <MotionImage type="static" alt="apple" src={apple} />
          <MotionImage type="parallax" alt="Disclosure Scotland" src={disclosure} />
        </Box>
        <Heading level="2">We have worked with the big names.</Heading>
        <Box display="flex">
          <MotionImage type="static" alt="Waitrosse" src={waitrose} />
          <MotionImage type="parallax" alt="volvo ocean race" src={volvo} />
          <MotionImage type="parallax" alt="HP" src={hp} />
        </Box>
      </Box>
    </Panel>
  );
}
