import { assignInlineVars } from '@vanilla-extract/dynamic';
import { type ReactNode } from 'react';
import * as styles from './MaxLines.css.js';
import { Box } from '../../molecules/Box/Box';
import cs from 'classnames';

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
