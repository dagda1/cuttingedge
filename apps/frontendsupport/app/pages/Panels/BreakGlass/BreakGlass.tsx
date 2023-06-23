import type { Ref } from 'react';
import breakglassLeft from '~/effects/breakglass-left.png';
import breakglassRight from '~/effects/breakglass-right.png';
import cs from 'classnames';
import * as styles from './BreakingGlass.css';
import { Box, Heading } from '@cutting/component-library';

interface BreakGlassProps {
  breakglassRef: Ref<HTMLDivElement>;
  className?: string;
}

export function BreakGlass({ breakglassRef, className }: BreakGlassProps): JSX.Element {
  return (
    <Box
      display={{ mobile: 'none', desktop: 'flex' }}
      position="relative"
      width="full"
      justifyContent="center"
      alignItems="center"
      ref={breakglassRef}
      paddingX="large"
      className={cs('breaking', 'breaking-glass', styles.breaking, className)}
    >
      <img alt="breaking glass left" className="bglass-left glass" src={breakglassLeft} />
      <img alt="breaking glass right" className="bglass-right glass" src={breakglassRight} />
      <Box position="absolute" className={styles.services}>
        <Heading level="1">Our Services</Heading>
      </Box>
    </Box>
  );
}
