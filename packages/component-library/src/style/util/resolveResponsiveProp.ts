import cs from 'classnames';
import { optimizeResponsiveArray } from './optimizeResponsiveArray';
import type { OptionalResponsiveValue } from '../atoms/sprinkles.css';
import { normalizeResponsiveValue } from '../atoms/sprinkles.css';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const resolveResponsiveProp = <Keys extends string | number>(
  value: OptionalResponsiveValue<Keys>,
  mobileAtoms: Record<Keys, string>,
  tabletAtoms: Record<Keys, string>,
  desktopAtoms: Record<Keys, string>,
  wideAtoms: Record<Keys, string>,
) => {
  if (typeof value === 'string' || typeof value === 'number') {
    return mobileAtoms[value!];
  }

  const normalized = normalizeResponsiveValue(value);
  const [mobile, tablet, desktop, wide] = optimizeResponsiveArray([
    normalized.mobile ?? null,
    normalized.tablet ?? null,
    normalized.desktop ?? null,
    normalized.wide ?? null,
  ]);

  const mobileAtom = mobileAtoms[mobile!];
  const tabletAtom = tabletAtoms[tablet!];
  const desktopAtom = desktopAtoms[desktop!];
  const wideAtom = wideAtoms[wide!];

  return cs(mobileAtom, tabletAtom, desktopAtom, wideAtom);
};
