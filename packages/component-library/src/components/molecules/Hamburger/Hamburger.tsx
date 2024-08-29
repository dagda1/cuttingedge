import cs from 'classnames';

import { Box } from '../Box/Box';
import * as styles from './Hamburger.css';

const _hamburgerVariants = ['dark', 'light'] as const;

export type HamburgerVariants = (typeof _hamburgerVariants)[number];

interface HamburgerProps {
  open: boolean;
  setOpen(toggle: boolean): void;
  variant?: HamburgerVariants;
}

export function Hamburger({ open, setOpen, variant = 'dark' }: HamburgerProps): JSX.Element {
  return (
    <Box
      tabIndex={0}
      onClick={() => setOpen(!open)}
      className={cs(styles.container, {
        open: open,
        ['dark']: variant === 'dark',
        ['light']: variant === 'light',
      })}
      zIndex="notification"
    >
      <Box />
      <Box />
      <Box />
    </Box>
  );
}
