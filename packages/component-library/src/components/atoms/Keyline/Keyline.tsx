import type { BoxProps } from '~/components/molecules/Box/Box.js';
import { Box } from '~/components/molecules/Box/Box.js';
import * as styles from './Keyline.css.js';
import cs from 'classnames';

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
