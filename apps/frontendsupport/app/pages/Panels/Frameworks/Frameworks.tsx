import { Box, Heading } from '@cutting/component-library';
import { MotionImage } from '~/components/MotionImage/MotionImage';
import { Panel } from '~/components/Panel/Panel';
import typescript from '~/images/typescript.png';
import react from '~/images/react.png';
import graphql from '~/images/graphql3.png';
import vite from '~/images/vite.png';
import eslint from '~/images/eslint.png';
import turborepo from '~/images/turborepo.png';

export function Frameworks(): JSX.Element {
  return (
    <Panel>
      <Box height="full" position="relative" display="flex" flexDirection="column" justifyContent="spaceEvenly">
        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="center">
            <MotionImage type="parallax" alt="typescript" src={typescript} />
            <MotionImage type="static" alt="replace webpack with vite" src={vite} />
            <MotionImage type="parallax" alt="eslint" src={eslint} />
          </Box>
        </Box>
        <Heading level="2">Your team are more familiar with backend development.</Heading>
        <Box display="flex" alignItems="center">
          <MotionImage type="static" alt="react" src={react} />
          <MotionImage type="parallax" alt="turborepo" src={turborepo} />
          <MotionImage type="parallax" alt="graphql" src={graphql} />
        </Box>
      </Box>
    </Panel>
  );
}
