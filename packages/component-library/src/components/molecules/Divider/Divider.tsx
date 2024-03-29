import { Box } from '../Box/Box';
import * as styles from './Divider.css';

export function Divider(): JSX.Element {
  return (
    <Box component="span" display="block" position="relative">
      <Box component="span" position="absolute" width="full" className={styles.base} />
    </Box>
  );
}
