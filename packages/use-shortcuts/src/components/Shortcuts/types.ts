import type { DetailedHTMLProps, FC, HTMLAttributes, RefObject } from 'react';

import type { ShortcutHandler } from '../../types/types';

export interface ShortcutsProps<
  R extends Record<PropertyKey, unknown>,
  E extends HTMLElement = HTMLElement,
  C = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
> {
  tabIndex?: number;
  className?: string;
  dataSelector?: string;
  shortcutMap: R;
  handler: ShortcutHandler<keyof R>;
  ref?: RefObject<E>;

  ScopedWrapperFunctionComponent?: FC<C> | string;
}
