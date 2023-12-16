import { Box } from '../Box/Box.js';
import * as styles from './Divider.css.js';

export function Divider(): JSX.Element {
  return (
    <Box component="span" display="block" position="relative">
      <Box component="span" position="absolute" width="full" className={styles.base} />
    </Box>
  );
}
