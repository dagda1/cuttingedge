import cs from 'classnames';
import { type ReactNode } from 'react';

import type { TextStyleProps } from '~/style/typography/typography';

import * as typographyStyles from '../../../style/typography/typography.css';
import type { TypographyProps } from '../Typography/Typography';
import { Typography } from '../Typography/Typography';
import * as styles from './Heading.css';
import HeadingContext from './HeadingContext';

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
  tone?: TextStyleProps['tone'];
}

export const HeadingColorMap: Record<HeadingProps['level'], string> = {
  '1': typographyStyles.tone.h1,
  '2': typographyStyles.tone.h2,
  '3': typographyStyles.tone.h3,
  '4': typographyStyles.tone.h1,
};

export function Heading({
  level,
  weight,
  component,
  className,
  center = false,
  tone,
  ...typographyProps
}: HeadingProps): JSX.Element {
  return (
    <HeadingContext.Provider value={true}>
      <Typography
        {...typographyProps}
        component={component || resolveDefaultComponent[level]}
        className={cs(
          typographyStyles.headingFontFamily,
          typographyStyles.headingWeight[weight || 'regular'],
          typographyStyles.heading[level],
          tone ?? HeadingColorMap[level],
          className,
          { [styles.center]: center },
        )}
      />
    </HeadingContext.Provider>
  );
}
