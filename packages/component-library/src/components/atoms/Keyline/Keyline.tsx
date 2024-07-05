import cs from 'classnames';

import type { BoxProps } from '~/components/molecules/Box/Box';
import { Box } from '~/components/molecules/Box/Box';

import * as styles from './Keyline.css';

interface KeylineProps {
  borderRadius?: BoxProps['borderRadius'];
}

export const Keyline = ({ borderRadius }: KeylineProps): JSX.Element => {
  return (
    <Box
      component="span"
      position="absolute"
      top={0}
      bottom={0}
      left={0}
      overflow="hidden"
      borderRadius={borderRadius}
      className={cs(styles.noRadiusOnRight, styles.largestWidth)}
    >
      <Box component="span" height="full" display="inlineBlock" className={styles.width} />
    </Box>
  );
};
