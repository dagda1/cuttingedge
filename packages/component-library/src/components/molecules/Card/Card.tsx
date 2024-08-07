import { assert } from '@cutting/assert';
import { type ReactNode } from 'react';

import { Keyline } from '~/components/atoms/Keyline/Keyline';
import { optimizeResponsiveArray } from '~/style/util/optimizeResponsiveArray';
import type { ResponsiveRangeProps } from '~/style/util/resolveResponsiveRangeProps';
import { resolveResponsiveRangeProps } from '~/style/util/resolveResponsiveRangeProps';

import { Box, type BoxProps } from '../Box/Box';

export const validCardComponents = ['div', 'article', 'aside', 'details', 'main', 'section'] as const;

type SimpleCardRounding = {
  rounded?: boolean;
  roundedAbove?: never;
};

type ResponsiveCardRounding = {
  rounded?: never;
  roundedAbove?: ResponsiveRangeProps['above'];
};

const borderRadius = 'large';

export type CardProps = {
  children: ReactNode;
  tone?: 'promote' | 'formAccent';
  component?: (typeof validCardComponents)[number];
  height?: Extract<BoxProps['height'], 'full'> | 'content';
} & (SimpleCardRounding | ResponsiveCardRounding);

export const Card = ({ children, component = 'div', tone, height, ...restProps }: CardProps): JSX.Element => {
  assert(
    validCardComponents.includes(component),
    `Invalid Card component: '${component}'. Should be one of [${validCardComponents.map((c) => `'${c}'`).join(', ')}]`,
  );

  let resolvedRounding: BoxProps['borderRadius'];

  if ('rounded' in restProps) {
    resolvedRounding = borderRadius;
  } else if ('roundedAbove' in restProps) {
    const [roundedOnMobile, roundedOnTablet, roundedOnDesktop, roundedOnWide] = resolveResponsiveRangeProps({
      above: restProps.roundedAbove,
    });

    resolvedRounding = optimizeResponsiveArray([
      roundedOnMobile ? borderRadius : 'none',
      roundedOnTablet ? borderRadius : 'none',
      roundedOnDesktop ? borderRadius : 'none',
      roundedOnWide ? borderRadius : 'none',
    ]);
  }

  return (
    <Box
      component={component}
      position="relative"
      padding="gutter"
      borderRadius={resolvedRounding}
      boxShadow="borderNeutralLight"
      height={height === 'full' ? height : undefined}
    >
      {tone ? <Keyline borderRadius={resolvedRounding} /> : null}
      {children}
    </Box>
  );
};
