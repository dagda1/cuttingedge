import cs from 'classnames';

import type { OptionalResponsiveValue } from '../atoms/sprinkles.css';
import { normalizeResponsiveValue } from '../atoms/sprinkles.css';
import { optimizeResponsiveArray } from './optimizeResponsiveArray';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const resolveResponsiveProp = <Keys extends string | number>(
  value: OptionalResponsiveValue<Keys>,
  mobileAtoms: Record<Keys, string>,
  tabletAtoms: Record<Keys, string>,
  desktopAtoms: Record<Keys, string>,
  wideAtoms: Record<Keys, string>,
): string => {
  if (typeof value === 'string' || typeof value === 'number') {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return mobileAtoms[value!];
  }

  const normalized = normalizeResponsiveValue(value);
  const [mobile, tablet, desktop, wide] = optimizeResponsiveArray([
    normalized.mobile ?? null,
    normalized.tablet ?? null,
    normalized.desktop ?? null,
    normalized.wide ?? null,
  ]);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const mobileAtom = mobileAtoms[mobile!];
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const tabletAtom = tabletAtoms[tablet!];
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const desktopAtom = desktopAtoms[desktop!];
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const wideAtom = wideAtoms[wide!];

  return cs(mobileAtom, tabletAtom, desktopAtom, wideAtom);
};
