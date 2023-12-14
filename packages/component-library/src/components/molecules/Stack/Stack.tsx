import { Children, type ReactElement } from 'react';
import { assert } from 'assert-ts';
import { Box } from '../Box/Box';
import type { OptionalResponsiveValue } from '../../../style/atoms/sprinkles.css.js';
import { mapResponsiveValue } from '../../../style/atoms/sprinkles.css.js';
import type { Align } from '../../../style/util/align';
import { alignToFlexAlign } from '../../../style/util/align';
import type { ResponsiveSpace } from '../../../style/atoms/atoms';
import { Divider } from '../Divider/Divider';
import { optimizeResponsiveArray } from '../../../style/util/optimizeResponsiveArray';
import flattenChildren from '../../../style/util/flatten-children';

const alignToDisplay = {
  left: 'block',
  center: 'flex',
  right: 'flex',
} as const;

export const validStackComponents = ['div', 'span', 'ol', 'ul'] as const;

type ReactNodeArray = Array<ReactNodeNoStrings>;
export type ReactNodeNoStrings = ReactElement | ReactNodeArray | boolean | null | undefined;

interface UseStackItemProps {
  align: OptionalResponsiveValue<Align>;
  space: ResponsiveSpace;
  component: (typeof validStackComponents)[number];
}

const useStackItem = ({ align, space, component }: UseStackItemProps) =>
  ({
    paddingTop: space,
    display: component === 'span' ? 'block' : undefined,
    // If we're aligned left across all screen sizes,
    // there's actually no alignment work to do.
    ...(align === 'left'
      ? null
      : {
          display: mapResponsiveValue(align, (value) => alignToDisplay[value]),
          flexDirection: 'column' as const,
          alignItems: alignToFlexAlign(align),
        }),
  }) as const;

export interface StackProps {
  component?: (typeof validStackComponents)[number];
  children: ReactNodeNoStrings;
  space: ResponsiveSpace;
  align?: OptionalResponsiveValue<Align>;
  dividers?: boolean;
}

export function Stack({
  component = 'div',
  children,
  space = 'none',
  align = 'left',
  dividers = false,
}: StackProps): JSX.Element {
  assert(
    validStackComponents.includes(component),
    `Invalid Stack component: '${component}'. Should be one of [${validStackComponents
      .map((c) => `'${c}'`)
      .join(', ')}]`,
  );

  const stackItemProps = useStackItem({ space, align, component });
  const stackItems = flattenChildren(children);
  const isList = component === 'ol' || component === 'ul';
  const stackItemComponent = isList ? 'li' : component;

  let firstItemOnMobile: number | null = null;
  let firstItemOnTablet: number | null = null;
  let firstItemOnDesktop: number | null = null;
  let firstItemOnWide: number | null = null;

  return (
    <Box component={component} display={component === 'span' ? 'block' : undefined}>
      {Children.map(stackItems, (child, index) => {
        if (firstItemOnMobile === null) {
          firstItemOnMobile = index;
        }

        if (firstItemOnTablet === null) {
          firstItemOnTablet = index;
        }

        if (firstItemOnDesktop === null) {
          firstItemOnDesktop = index;
        }

        if (firstItemOnWide === null) {
          firstItemOnWide = index;
        }

        return (
          <Box component={stackItemComponent} {...stackItemProps}>
            {dividers && index > 0 ? (
              <Box
                component="span"
                width="full"
                paddingBottom={space}
                display={optimizeResponsiveArray([
                  index === firstItemOnMobile ? 'none' : 'block',
                  index === firstItemOnTablet ? 'none' : 'block',
                  index === firstItemOnDesktop ? 'none' : 'block',
                  index === firstItemOnWide ? 'none' : 'block',
                ])}
              >
                <Divider />
              </Box>
            ) : null}
            {child}
          </Box>
        );
      })}
    </Box>
  );
}
