import { Children, type ReactNode } from 'react';

import type { OptionalResponsiveValue } from '../atoms/sprinkles.css';
import { normalizeResponsiveValue } from '../atoms/sprinkles.css';
import { type Align, alignToFlexAlign, type AlignY, alignYToFlexAlign } from './align';
import { optimizeResponsiveArray } from './optimizeResponsiveArray';
import { resolveResponsiveRangeProps, type ResponsiveRangeProps } from './resolveResponsiveRangeProps';

function invertAlignment<Alignment extends string>(alignment: Alignment) {
  if (alignment === 'flexStart') {
    return 'flexEnd';
  }

  if (alignment === 'flexEnd') {
    return 'flexStart';
  }

  return alignment;
}

const displayFor = (collapse: boolean) => (collapse ? 'block' : 'flex');

const rowDirectionFor = (rowReverse: boolean | undefined) => (rowReverse ? 'rowReverse' : 'row');

const flexDirectionFor = (collapse: boolean, rowReverse: boolean | undefined) =>
  collapse ? 'column' : rowDirectionFor(rowReverse);

const justifyContentFor = <Alignment extends string>(rowReverse: boolean | undefined, alignment: Alignment) =>
  rowReverse ? invertAlignment(alignment) : alignment;

const childDisplayFor = (collapse: boolean, justifyContent: string) =>
  collapse && justifyContent !== 'flexStart' ? 'flex' : 'block';

export interface CollapsibleAlignmentProps {
  collapseBelow?: ResponsiveRangeProps['below'];
  align?: OptionalResponsiveValue<Align>;
  alignY?: OptionalResponsiveValue<AlignY>;
  reverse?: boolean;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function resolveCollapsibleAlignmentProps({ align, alignY, collapseBelow, reverse }: CollapsibleAlignmentProps) {
  const [collapseMobile, collapseTablet, collapseDesktop] = resolveResponsiveRangeProps({
    below: collapseBelow,
  });

  const rowReverseTablet = collapseMobile && reverse;
  const rowReverseDesktop = (collapseMobile || collapseTablet) && reverse;
  const rowReverseWide = (collapseMobile || collapseTablet || collapseDesktop) && reverse;

  const normalizedAlign = normalizeResponsiveValue(alignToFlexAlign(align) || 'flexStart');
  const {
    mobile: justifyContentMobile = 'flexStart',
    tablet: justifyContentTablet = justifyContentMobile,
    desktop: justifyContentDesktop = justifyContentTablet,
    wide: justifyContentWide = justifyContentDesktop,
  } = normalizedAlign;

  return {
    collapseMobile,
    collapseTablet,
    collapseDesktop,
    orderChildren: (children: ReactNode) => {
      const childrenArray = Children.toArray(children);
      return !collapseMobile && !collapseTablet && reverse ? childrenArray.reverse() : childrenArray;
    },
    collapsibleAlignmentProps: {
      display: optimizeResponsiveArray([
        displayFor(collapseMobile),
        displayFor(collapseTablet),
        displayFor(collapseDesktop),
        'flex',
      ]),
      flexDirection: optimizeResponsiveArray([
        collapseMobile ? 'column' : 'row',
        flexDirectionFor(collapseTablet, rowReverseTablet),
        flexDirectionFor(collapseDesktop, rowReverseDesktop),
        rowDirectionFor(rowReverseWide),
      ]),
      justifyContent: align
        ? optimizeResponsiveArray([
            justifyContentMobile,
            justifyContentFor(rowReverseTablet, justifyContentTablet),
            justifyContentFor(rowReverseDesktop, justifyContentDesktop),
            justifyContentFor(rowReverseWide, justifyContentWide),
          ])
        : undefined,
      alignItems: alignY ? alignYToFlexAlign(alignY) : undefined,
    },
    collapsibleAlignmentChildProps: {
      display: optimizeResponsiveArray([
        childDisplayFor(collapseMobile, justifyContentMobile),
        childDisplayFor(collapseTablet, justifyContentTablet),
        childDisplayFor(collapseDesktop, justifyContentDesktop),
        'block',
      ]),
      justifyContent: optimizeResponsiveArray([
        justifyContentMobile,
        justifyContentTablet,
        justifyContentDesktop,
        justifyContentWide,
      ]),
    },
  } as const;
}
