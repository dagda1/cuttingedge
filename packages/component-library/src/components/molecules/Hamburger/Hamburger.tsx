import { Box } from '../Box/Box';
import * as styles from './Hamburger.css';
import cs from 'classnames';

const hamburgerVariants = ['dark', 'light'] as const;

export type HamburgerVariants = (typeof hamburgerVariants)[number];

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
    >
      <Box />
      <Box />
      <Box />
    </Box>
  );
}
