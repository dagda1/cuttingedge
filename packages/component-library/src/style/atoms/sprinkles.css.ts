import {
  ConditionalValue,
  RequiredConditionalValue,
  createAtomicStyles,
  createAtomsFn,
  createMapValueFn,
  createNormalizeValueFn,
} from '@vanilla-extract/sprinkles';

import { breakpoints, breakpointNames } from '../breakpoints';
import { responsiveProperties, unresponsiveProperties } from './atomic-properties';

const unresponsiveAtomicStyles = createAtomicStyles({
  properties: unresponsiveProperties,
});

const responsiveAtomicStyles = createAtomicStyles({
  defaultCondition: 'mobile',
  conditions: {
    mobile: {},
    tablet: {
      '@media': `screen and (min-width: ${breakpoints.tablet}px)`,
    },
    desktop: {
      '@media': `screen and (min-width: ${breakpoints.desktop}px)`,
    },
  },
  responsiveArray: breakpointNames,
  properties: responsiveProperties,
  shorthands: {
    padding: ['paddingBottom', 'paddingTop', 'paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    margin: ['marginBottom', 'marginTop', 'marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    marginX: ['marginLeft', 'marginRight'],
  },
});

export const sprinkles = createAtomsFn(unresponsiveAtomicStyles, responsiveAtomicStyles);

export type OptionalResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveAtomicStyles,
  Value
>;
export type RequiredResponsiveValue<Value extends string | number> = RequiredConditionalValue<
  typeof responsiveAtomicStyles,
  Value
>;

export const normalizeResponsiveValue = createNormalizeValueFn(responsiveAtomicStyles);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapResponsiveValue = createMapValueFn(responsiveAtomicStyles) as any;
