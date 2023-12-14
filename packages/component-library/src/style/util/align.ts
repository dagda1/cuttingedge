import type { OptionalResponsiveValue } from '../atoms/sprinkles.css.js';
import { mapResponsiveValue } from '../atoms/sprinkles.css.js';

export type Align = 'left' | 'center' | 'right';
export type AlignY = 'top' | 'center' | 'bottom';

const alignToFlexAlignLookup = {
  left: 'flexStart',
  center: 'center',
  right: 'flexEnd',
} as const;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const alignToFlexAlign = (align: OptionalResponsiveValue<Align> | undefined) =>
  align ? mapResponsiveValue(align, (value) => alignToFlexAlignLookup[value]) : undefined;

const alignYToFlexAlignLookup = {
  top: 'flexStart',
  center: 'center',
  bottom: 'flexEnd',
} as const;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const alignYToFlexAlign = (alignY: OptionalResponsiveValue<AlignY> | undefined) =>
  alignY ? mapResponsiveValue(alignY, (value) => alignYToFlexAlignLookup[value]) : undefined;
