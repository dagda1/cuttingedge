import { Box } from '@cutting/component-library';
import type { Mode } from '../types';
import * as styles from './TopBubble.css';
import type { Ref } from 'react';
import cs from 'classnames';

interface TopBubbleProps {
  mode: Mode;
  innerRef?: Ref<HTMLDivElement>;
}

export function TopBubble({ mode, innerRef }: TopBubbleProps): JSX.Element {
  return (
    <Box className={cs({ [styles.up]: mode === 'dark' }, styles.topBubbleWrapper)}>
      <Box
        className={cs({ [styles.dark]: mode === 'dark', [styles.light]: mode === 'light' }, styles.topBubble)}
        ref={innerRef}
      />
    </Box>
  );
}
