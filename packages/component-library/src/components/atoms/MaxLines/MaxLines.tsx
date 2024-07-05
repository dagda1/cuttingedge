import { assignInlineVars } from '@vanilla-extract/dynamic';
import cs from 'classnames';
import { type ReactNode } from 'react';

import { Box } from '../../molecules/Box/Box';
import * as styles from './MaxLines.css';

interface MaxLinesProps {
  children: ReactNode;
  lines: number;
}

export function MaxLines({ children, lines }: MaxLinesProps): JSX.Element {
  return (
    <Box
      component="span"
      className={cs(styles.base, lines > 1 ? styles.multiLine : undefined)}
      style={lines > 1 ? assignInlineVars({ [styles.lineLimit]: String(lines) }) : undefined}
    >
      {children}
    </Box>
  );
}
