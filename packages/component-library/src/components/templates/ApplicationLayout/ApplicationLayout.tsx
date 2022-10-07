import type { ComponentType, PropsWithChildren, ReactElement, ReactNode, Ref } from 'react';
import { useRef } from 'react';
import { useScrollToTop } from '@cutting/hooks';
import cs from 'classnames';
import { cuttingTheme } from '../../../style/themes/cutting/cutting.css';
import * as styles from './ApplicationLayout.css';
import { isNil } from '@cutting/util';
import { consultingTheme } from '../../../style/themes/consulting/consultingTheme.css';
import { salesTheme } from '../../../style/themes/sales/salesTheme.css';
import { defaultTheme } from '../../../style/themes/default/default.css';

export const themes = {
  defaultTheme,
  cuttingTheme,
  consultingTheme,
  salesTheme,
} as const;

export type ThemeKeys = keyof typeof themes;

export const Themes = Object.keys(themes) as ThemeKeys[];

export interface ApplicationLayoutProps {
  heading?: string | JSX.Element;
  center?: boolean;
  className?: string;
  footer?: ReactElement;
  header?: ReactElement;
  innerRef?: Ref<HTMLElement>;
  children: ReactNode;
  headerAriaLabel?: string;
  theme: keyof typeof themes;
}

const ApplicationLayoutHeading: ComponentType<Pick<ApplicationLayoutProps, 'heading'>> = ({ heading }) => {
  if (isNil(heading)) {
    return null;
  }

  return typeof heading === 'string' ? <h1>{heading}</h1> : heading;
};

export function ApplicationLayout({
  heading,
  className,
  innerRef,
  header,
  footer,
  children,
  headerAriaLabel,
  theme,
}: PropsWithChildren<ApplicationLayoutProps>): JSX.Element {
  const currentTheme = themes[theme];

  return (
    <div className={cs(styles.container, currentTheme)}>
      <header role="banner" className={cs(styles.header, { [styles.hidden]: !header })} aria-label={headerAriaLabel}>
        <div className={styles.size}>{header}</div>
      </header>
      <main className={cs(styles.body, styles.size, className)} ref={innerRef}>
        <ApplicationLayoutHeading heading={heading} />
        {children}
      </main>
      <footer role="contentinfo" className={cs(styles.footer, styles.size, { [styles.hidden]: !header }, styles.size)}>
        {footer}
      </footer>
    </div>
  );
}

export function ApplicationLayoutWithRouterScroll({
  children,
  ...props
}: Omit<ApplicationLayoutProps, 'innerRef'>): JSX.Element {
  const root = useRef<HTMLDivElement>(null);

  useScrollToTop({ ref: root });

  return (
    <ApplicationLayout {...props} innerRef={root}>
      {children}
    </ApplicationLayout>
  );
}
