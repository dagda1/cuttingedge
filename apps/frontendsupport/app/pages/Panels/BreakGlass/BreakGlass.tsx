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
      justifyContent="center"
      alignItems="center"
      width="full"
      paddingX="xxlarge"
      position="relative"
      ref={breakglassRef}
      className={cs('breaking', 'breaking-glass', className)}
    >
      <img alt="breaking glass left" className="bglass-left glass" src={breakglassLeft} />
      <img alt="breaking glass right" className="bglass-right glass" src={breakglassRight} />
      <Box position="relative" className={styles.services}>
        <Heading level="1">Our Services</Heading>
      </Box>
    </Box>
  );
}
