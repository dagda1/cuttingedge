import { type ReactNode } from 'react';
import HeadingContext from './HeadingContext';
import * as typographyStyles from '../../../style/typography/typography.css';
import type { TypographyProps } from '../Typography/Typography';
import { Typography } from '../Typography/Typography';
import cs from 'classnames';

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
}

export function Heading({ level, weight, component, ...typographyProps }: HeadingProps): JSX.Element {
  return (
    <HeadingContext.Provider value={true}>
      <Typography
        {...typographyProps}
        component={component || resolveDefaultComponent[level]}
        className={cs(
          typographyStyles.fontFamily,
          typographyStyles.headingWeight[weight || 'regular'],
          typographyStyles.heading[level],
        )}
      />
    </HeadingContext.Provider>
  );
}
