import { Panel } from '~/components/Panel/Panel';
import lloyds from '~/images/lloyds_bank_logo.png';
import waitrose from '~/images/waitrose.png';
import volvo from '~/images/volvo.png';
import { MotionImage } from '~/components/MotionImage/MotionImage';
import { Box, Heading } from '@cutting/component-library';

export function Clients(): JSX.Element {
  return (
    <Panel>
      <Box height="full" position="relative" display="flex" flexDirection="column" justifyContent="spaceEvenly">
        <MotionImage type="parallax" alt="Lloyds Bank" src={lloyds} />
        <Heading level="2">We have worked with the big names.</Heading>
        <Box display="flex">
          <MotionImage type="static" alt="Waitrosse" src={waitrose} />
          <MotionImage type="parallax" alt="volvo ocean race" src={volvo} />
        </Box>
      </Box>
    </Panel>
  );
}
