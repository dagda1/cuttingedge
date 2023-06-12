import type { PropsWithChildren, ReactElement, RefObject } from 'react';
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
import { Heading } from '~/components/atoms/Heading/Heading';
import { PageBlock } from '../PageBlock/PageBlock';
import type { ReactNodeNoStrings } from '~/components/molecules/Stack/Stack';
import type { ResponsiveAtomicProperties } from '~/style/atoms/sprinkles.css';
import { Box } from '~/components/molecules/Box/Box';

export const themes = {
  defaultTheme,
  cuttingTheme,
  consultingTheme,
  salesTheme,
  supportTheme,
} as const;

export type ThemeKeys = keyof typeof themes;

export const Themes = Object.keys(themes) as ThemeKeys[];

export interface ApplicationLayoutProps {
  heading?: string;
  className?: string;
  footer?: ReactElement;
  header?: ReactElement;
  innerRef?: RefObject<HTMLElement>;
  children: ReactNodeNoStrings;
  headerAriaLabel?: string;
  theme: keyof typeof themes;
  centerHeading?: boolean;
  center?: boolean;
  display?: keyof ResponsiveAtomicProperties['styles']['display']['values'];
  flexDirection?: keyof ResponsiveAtomicProperties['styles']['flexDirection']['values'];
  justifyContent?: keyof ResponsiveAtomicProperties['styles']['justifyContent']['values'];
  alignItems?: keyof ResponsiveAtomicProperties['styles']['alignItems']['values'];
}

function ApplicationLayoutHeading({
  heading,
  center,
}: Pick<ApplicationLayoutProps, 'heading'> & { center?: boolean }): JSX.Element | null {
  if (isNil(heading)) {
    return null;
  }

  return (
    <Heading level="1" center={center}>
      {heading}
    </Heading>
  );
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
  ...pageBlockProps
}: PropsWithChildren<ApplicationLayoutProps>): JSX.Element {
  const currentTheme = themes[theme];

  return (
    <Box
      paddingBottom={{ mobile: 'small', tablet: 'medium' }}
      paddingX={{ mobile: 'xxsmall', tablet: 'medium' }}
      className={cs(styles.container, currentTheme)}
    >
      {header && (
        <header role="banner" className={cs(styles.header)} aria-label={headerAriaLabel}>
          <div>{header}</div>
        </header>
      )}
      <main
        className={cs(styles.main, className, {
          [styles.headingAndBodyLayout]: isNil(heading) === false,
          [styles.bodyOnlyLayout]: isNil(heading) && isNil(footer),
          [styles.center]: center,
        })}
        ref={innerRef}
      >
        <PageBlock component="section" {...pageBlockProps}>
          <ApplicationLayoutHeading heading={heading} center={centerHeading} />
          {children}
        </PageBlock>
      </main>
      {footer && (
        <footer role="contentinfo" className={styles.footer}>
          {footer}
        </footer>
      )}
    </Box>
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
