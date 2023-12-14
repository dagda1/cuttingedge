import { assert } from 'assert-ts';
import { Children } from 'react';
import { Box } from '../Box/Box.js';
import type { CollapsibleAlignmentProps } from '~/style/util/collapsibleAlignmentProps';
import { resolveCollapsibleAlignmentProps } from '~/style/util/collapsibleAlignmentProps';
import type { ResponsiveSpace } from '~/style/atoms/atoms.js';
import type { ReactNodeNoStrings } from '../Stack/Stack.js';
import { negativeMargin } from '~/style/negativeMargin/negativeMargin';
import flattenChildren from '~/style/util/flatten-children';
import cs from 'classnames';

export const validInlineComponents = ['div', 'span', 'ol', 'ul'] as const;

export type InlineProps = CollapsibleAlignmentProps & {
  space: ResponsiveSpace;
  component?: (typeof validInlineComponents)[number];
  children: ReactNodeNoStrings;
};

export function Inline({
  space = 'none',
  align,
  alignY,
  collapseBelow,
  reverse,
  component = 'div',
  children,
}: InlineProps): JSX.Element {
  assert(
    validInlineComponents.includes(component),
    `Invalid Inline component: '${component}'. Should be one of [${validInlineComponents
      .map((c) => `'${c}'`)
      .join(', ')}]`,
  );

  const isList = component === 'ol' || component === 'ul';
  const inlineItemComponent = isList ? 'li' : component;

  const { collapsibleAlignmentProps, collapsibleAlignmentChildProps, orderChildren } = resolveCollapsibleAlignmentProps(
    {
      align,
      alignY,
      collapseBelow,
      reverse,
    },
  );

  return (
    <Box
      component={component === 'span' ? component : undefined}
      display={component === 'span' ? 'block' : undefined}
      className={cs(negativeMargin('top', space))}
    >
      <Box
        component={component}
        className={cs(negativeMargin('left', space))}
        flexWrap="wrap"
        {...collapsibleAlignmentProps}
      >
        {Children.map(orderChildren(flattenChildren(children)), (child) =>
          child !== null && child !== undefined ? (
            <Box
              component={inlineItemComponent}
              minWidth={0}
              marginLeft={space}
              marginTop={space}
              {...collapsibleAlignmentChildProps}
            >
              {child}
            </Box>
          ) : null,
        )}
      </Box>
    </Box>
  );
}
