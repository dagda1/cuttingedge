import { type ReactNode } from 'react';
import HeadingContext from './HeadingContext';
import * as typographyStyles from '../../../style/typography/typography.css';
import type { TypographyProps } from '../Typography/Typography';
import { Typography } from '../Typography/Typography';
import cs from 'classnames';
import * as styles from './Heading.css';

const resolveDefaultComponent = {
  '1': 'h1',
  '2': 'h2',
  '3': 'h3',
  '4': 'h4',
} as const;

export interface HeadingProps extends TypographyProps {
  level: keyof typeof typographyStyles.heading;
  weight?: keyof typeof typographyStyles.headingWeight;
  children: ReactNode;
  center?: boolean;
}

export const HeadingColorMap: Record<HeadingProps['level'], string> = {
  '1': typographyStyles.tone.h1,
  '2': typographyStyles.tone.h2,
  '3': typographyStyles.tone.h3,
  '4': typographyStyles.tone.h1,
};

export function Heading({ level, weight, component, center = false, ...typographyProps }: HeadingProps): JSX.Element {
  return (
    <HeadingContext.Provider value={true}>
      <Typography
        {...typographyProps}
        component={component || resolveDefaultComponent[level]}
        className={cs(
          typographyStyles.fontFamily,
          typographyStyles.headingWeight[weight || 'regular'],
          typographyStyles.heading[level],
          HeadingColorMap[level],
          { [styles.center]: center },
        )}
      />
    </HeadingContext.Provider>
  );
}
