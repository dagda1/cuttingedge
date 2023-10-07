import type { Ref } from 'react';
import cs from 'classnames';
import * as styles from './BreakingGlass.css';
import { Box } from '@cutting/component-library';
import { Image } from '@unpic/react';

interface BreakGlassProps {
  breakglassRef: Ref<HTMLDivElement>;
}

const breakingLeft =
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953391/frontendsupport/breakglass-left_rtjnup.png';
const breakingRight =
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953391/frontendsupport/breakglass-right_myofuh.png';

export function BreakGlass({ breakglassRef }: BreakGlassProps): JSX.Element {
  return (
    <Box
      width="full"
      height="full"
      display="flex"
      justifyContent="center"
      className={cs('breaking', styles.breaking)}
      ref={breakglassRef}
    >
      <Image
        alt="breaking glass left"
        className="bglass-left glass"
        src={breakingLeft}
        layout="constrained"
        width={338}
        height={336}
      />
      <Image
        alt="breaking glass right"
        className="bglass-right glass"
        src={breakingRight}
        layout="constrained"
        width={338}
        height={336}
      />
    </Box>
  );
}
