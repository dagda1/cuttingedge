import cs from 'classnames';
import type { MouseEventHandler, ReactNode } from 'react';

import { TextNavLink } from '../TextNavLink/TextNavLink.js';
import * as styles from './CTAButton.css.js';

interface CTAButtonProps {
  children: ReactNode;
  className?: string;
  link: string;
  clickHandler?: MouseEventHandler<HTMLAnchorElement>;
}

export function CTAButton({ children, link, className, clickHandler }: CTAButtonProps): JSX.Element {
  return (
    <TextNavLink onClick={clickHandler} size="large" to={link} className={cs(styles.ctaButton, className)}>
      {children}
    </TextNavLink>
  );
}
