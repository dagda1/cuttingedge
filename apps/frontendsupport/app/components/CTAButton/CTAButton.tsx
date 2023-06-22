import type { ReactNode } from 'react';
import cs from 'classnames';
import * as styles from './CTAButton.css';
import type { Ref } from 'react';
import { TextNavLink } from '../TextNavLink/TextNavLink';

interface CTAButtonProps {
  children: ReactNode;
  className?: string;
  link: string;
  innerRef?: Ref<HTMLAnchorElement>;
}

export function CTAButton({ children, link, className, innerRef }: CTAButtonProps): JSX.Element {
  return (
    <TextNavLink size="large" ref={innerRef} to={link} className={cs(styles.ctaButton, className)}>
      {children}
    </TextNavLink>
  );
}
