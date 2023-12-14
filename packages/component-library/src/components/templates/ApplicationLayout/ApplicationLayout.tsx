import type { PropsWithChildren, ReactElement, RefObject } from 'react';
import { useRef } from 'react';
import { useScrollToTop } from '@cutting/hooks';
import cs from 'classnames';
import { cuttingTheme } from '~/style/themes/cutting/cutting.css.js';
import * as styles from './ApplicationLayout.css.js';
import { isNil } from '@cutting/util';
import { salesTheme } from '~/style/themes/sales/salesTheme.css.js';
import { defaultTheme } from '~/style/themes/default/default.css.js';
import { supportTheme } from '~/style/themes/support/supportTheme.css.js';
import { Heading } from '~/components/atoms/Heading/Heading';
import { type ReactNodeNoStrings } from '~/components/molecules/Stack/Stack';
import type { ResponsiveAtomicProperties } from '~/style/atoms/sprinkles.css.js';
import { Box } from '~/components/molecules/Box/Box';
import { ContentBlock } from '../ContentBlock/ContentBlock';

export const themes = {
  defaultTheme,
  cuttingTheme,
  salesTheme,
  supportTheme,
} as const;

export type ThemeKeys = keyof typeof themes;

export const Themes = Object.keys(themes) as ThemeKeys[];

type ContainerBoxPropsKeys = keyof Pick<ResponsiveAtomicProperties['styles'], 'justifyContent' | 'alignItems'>;

export type ContainerBoxProps = Partial<{
  [K in ContainerBoxPropsKeys]: keyof ResponsiveAtomicProperties['styles'][K]['values'];
}>;

export type ApplicationLayoutProps = {
  heading?: string;
  className?: string;
  footer?: ReactElement;
  header?: ReactElement;
  innerRef?: RefObject<HTMLElement>;
  children: ReactNodeNoStrings;
  headerAriaLabel?: string;
  theme?: keyof typeof themes;
  centerHeading?: boolean;
  center?: boolean;
} & ContainerBoxProps;

function ApplicationLayoutHeading({
  heading,
  center,
}: Pick<ApplicationLayoutProps, 'heading'> & { center?: boolean }): JSX.Element | null {
  if (isNil(heading)) {
    return null;
  }

  return (
    <Box marginY={{ mobile: 'small', desktop: 'large' }}>
      <ContentBlock>
        <Heading level="1" center={center}>
          {heading}
        </Heading>
      </ContentBlock>
    </Box>
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
}: PropsWithChildren<ApplicationLayoutProps>): JSX.Element {
  const currentTheme = theme ? themes[theme] : undefined;

  return (
    <Box
      paddingBottom={{ mobile: 'medium', tablet: 'large' }}
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
        <ApplicationLayoutHeading heading={heading} center={centerHeading} />
        {children}
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
