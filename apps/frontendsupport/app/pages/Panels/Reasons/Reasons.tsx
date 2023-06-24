import { Box, Heading } from '@cutting/component-library';
import { MotionImage } from '~/components/MotionImage/MotionImage';
import { Panel } from '~/components/Panel/Panel';
import typescript from '~/images/typescript.png';
import react from '~/images/react.png';

export function Reasons(): JSX.Element {
  return (
    <Panel>
      <Box height="full" position="relative" display="flex" flexDirection="column" justifyContent="spaceEvenly">
        <MotionImage type="static" alt="typescript" src={typescript} />
        <Heading level="2">Your team are more familiar with backend development.</Heading>
        <MotionImage type="parallax" alt="react" src={react} />
      </Box>
    </Panel>
  );
}
