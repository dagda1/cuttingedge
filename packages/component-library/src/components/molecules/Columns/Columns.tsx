import { assert } from 'assert-ts';
import { type ReactElement } from 'react';
import { Box } from '../Box/Box';
import type { ColumnProps } from '../Column/Column';
import { ColumnsContext, validColumnsComponents } from './ColumnsContext';
import type { CollapsibleAlignmentProps } from '~/style/util/collapsibleAlignmentProps';
import { resolveCollapsibleAlignmentProps } from '~/style/util/collapsibleAlignmentProps';
import type { ResponsiveSpace } from '~/style/atoms/atoms';
import { normalizeResponsiveValue } from '~/style/atoms/sprinkles.css.js';
import { negativeMargin } from '~/style/negativeMargin/negativeMargin';
import cs from 'classnames';

export type ColumnsProps = CollapsibleAlignmentProps & {
  space: ResponsiveSpace;
  children: Array<ReactElement<ColumnProps> | null> | ReactElement<ColumnProps> | null;
  component?: (typeof validColumnsComponents)[number];
};

export function Columns({
  children,
  collapseBelow,
  reverse = false,
  space = 'none',
  align,
  alignY,
  component = 'div',
}: ColumnsProps): JSX.Element {
  assert(
    validColumnsComponents.includes(component),
    `Invalid Columns component: '${component}'. Should be one of [${validColumnsComponents
      .map((c) => `'${c}'`)
      .join(', ')}]`,
  );

  const normalizedSpace = normalizeResponsiveValue(space);
  const {
    mobile: mobileSpace = 'none',
    tablet: tabletSpace = mobileSpace,
    desktop: desktopSpace = tabletSpace,
    wide: wideSpace = desktopSpace,
    extraWide: extraWideSpace = wideSpace,
  } = normalizedSpace;

  const {
    collapsibleAlignmentProps,
    collapsibleAlignmentChildProps,
    collapseMobile,
    collapseTablet,
    collapseDesktop,
    orderChildren,
  } = resolveCollapsibleAlignmentProps({
    collapseBelow,
    align,
    alignY,
    reverse,
  });

  return (
    <Box
      component={component}
      {...collapsibleAlignmentProps}
      className={cs(
        negativeMargin('left', {
          mobile: collapseMobile ? 'none' : mobileSpace,
          tablet: collapseTablet ? 'none' : tabletSpace,
          desktop: collapseDesktop ? 'none' : desktopSpace,
          wide: wideSpace,
          extraWide: extraWideSpace,
        }),
      )}
    >
      <ColumnsContext.Provider
        value={{
          collapseMobile,
          collapseTablet,
          collapseDesktop,
          mobileSpace,
          tabletSpace,
          desktopSpace,
          wideSpace,
          collapsibleAlignmentChildProps,
          component,
        }}
      >
        {orderChildren(children)}
      </ColumnsContext.Provider>
    </Box>
  );
}
