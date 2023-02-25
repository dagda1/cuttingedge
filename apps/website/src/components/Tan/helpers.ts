import { breakpoints } from '@cutting/component-library';
import type { Dimensions } from '@cutting/use-get-parent-size';

export function getUnitCircleRadius({ width, height }: Dimensions): number {
  if (width >= breakpoints.desktop) {
    return height / 1.25;
  }

  if (width >= breakpoints.tablet) {
    return height / 2;
  }

  return height / 2.5;
}

export function getHeightTranslation({ width, height }: Dimensions): number {
  if (width >= breakpoints.tablet) {
    return 0;
  }

  return height / 4;
}
