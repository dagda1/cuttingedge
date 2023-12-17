import { Box } from '@cutting/component-library';
import cs from 'classnames';

import * as styles from './Dot.css.js';

interface DotProps {
  background: '#1f1f1f' | '#ffffff';
}

export function Dot({ background }: DotProps): JSX.Element {
  return (
    <Box style={{ background }} className={cs({ [styles.white]: background === '#ffffff' }, styles.dot, 'dot')}></Box>
  );
}
