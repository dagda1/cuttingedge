import type { PropsWithChildren, ReactElement, ReactNode, RefObject } from 'react';
import { useRef } from 'react';
import { useScrollToTop } from '@cutting/hooks';
import cs from 'classnames';
import { cuttingTheme } from '~/style/themes/cutting/cutting.css';
import * as styles from './ApplicationLayout.css';
import { isNil } from '@cutting/util';
import { consultingTheme } from '~/style/themes/consulting/consultingTheme.css';
import { salesTheme } from '~/style/themes/sales/salesTheme.css';
import { defaultTheme } from '~/style/themes/default/default.css';
import { supportTheme } from '~/style/themes/support/supportTheme.css';

export const themes = {
  defaultTheme,
  cuttingTheme,
  consultingTheme,
  salesTheme,
  supportTheme,
} as const;

export type ThemeKeys = keyof typeof themes;

export const Themes = Object.keys(themes) as ThemeKeys[];

type Layout = 'RESPONSIVE' | 'FULL';

export interface ApplicationLayoutProps {
  heading?: string | JSX.Element;
  className?: string;
  footer?: ReactElement;
  header?: ReactElement;
  innerRef?: RefObject<HTMLElement>;
  children: ReactNode;
  headerAriaLabel?: string;
  theme: keyof typeof themes;
  layout?: Layout;
  centerHeading?: boolean;
  center?: boolean;
}

function ApplicationLayoutHeading({
  heading,
  center,
}: Pick<ApplicationLayoutProps, 'heading'> & { center?: boolean }): JSX.Element | null {
  if (isNil(heading)) {
    return null;
  }

  return typeof heading === 'string' ? <h1 className={cs({ [styles.centerHeading]: center })}>{heading}</h1> : heading;
}

export function ApplicationLayout({
  heading,
  className,
  innerRef,
  header,
  footer,
  children,
  headerAriaLabel,
  theme,
  centerHeading = false,
  center = false,
  layout = 'RESPONSIVE',
}: PropsWithChildren<ApplicationLayoutProps>): JSX.Element {
  const currentTheme = themes[theme];

  return (
    <div className={cs(styles.container, currentTheme)}>
      <header role="banner" className={cs(styles.header, { [styles.hidden]: !header })} aria-label={headerAriaLabel}>
        <div className={styles.size}>{header}</div>
      </header>
      <main
        className={cs(styles.body, className, {
          [styles.size]: layout === 'RESPONSIVE',
          [styles.full]: layout === 'FULL',
          [styles.headingAndBodyLayout]: isNil(heading) === false,
          [styles.bodyOnlyLayout]: isNil(heading),
          [styles.center]: center,
        })}
        ref={innerRef}
      >
        <ApplicationLayoutHeading heading={heading} center={centerHeading} />
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
