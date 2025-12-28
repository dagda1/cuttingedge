import { Box } from '@cutting/component-library';

import { TopNav } from './Top';
import * as styles from './Top.css';

export function Header(): JSX.Element {
  return (
    <Box position="fixed" width="full" zIndex="sticky" className={styles.header}>
      <Box height="xxxlarge" display="flex" alignItems="center" justifyContent="center" paddingY="small" width="full">
        <TopNav />
      </Box>
    </Box>
  );
}
