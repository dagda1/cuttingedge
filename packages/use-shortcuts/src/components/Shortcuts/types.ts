import type { RefObject, FC } from 'react';
import { ShortcutHandler } from '../../types/types';

export interface ShortcutsProps<
  R extends Record<PropertyKey, unknown>,
  E extends HTMLElement = HTMLElement,
  C = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> {
  tabIndex?: number;
  className?: string;
  dataSelector?: string;
  shortcutMap: R;
  handler: ShortcutHandler<keyof R>;
  ref?: RefObject<E>;

  ScopedWrapperComponentType?: FC<C> | string;
}
