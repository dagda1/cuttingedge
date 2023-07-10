import type { Ref } from 'react';
import breakglassLeft from '~/images/breakglass-left.png';
import breakglassRight from '~/images/breakglass-right.png';
import cs from 'classnames';
import * as styles from './BreakingGlass.css';
import { Box } from '@cutting/component-library';
import { Services } from '../Services/Services';

interface BreakGlassProps {
  breakglassRef: Ref<HTMLDivElement>;
  className?: string;
}

export function BreakGlass({ breakglassRef, className }: BreakGlassProps): JSX.Element {
  return (
    <Box display="flex" justifyContent="center" className={cs('green', styles.breaking, className)}>
      <Box
        display={{ mobile: 'none', desktop: 'flex' }}
        position="relative"
        width="full"
        justifyContent="center"
        alignItems="center"
        ref={breakglassRef}
        className="breaking"
      >
        <img alt="breaking glass left" className="bglass-left glass" src={breakglassLeft} />
        <img alt="breaking glass right" className="bglass-right glass" src={breakglassRight} />
        <Box position="absolute" className="services">
          <Services />
        </Box>
      </Box>
    </Box>
  );
}
