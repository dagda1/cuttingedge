import cs from 'classnames';
import type { PropsWithChildren } from 'react';
import { useRef } from 'react';

import { useShortcuts } from '../../useShortcuts';
import type { ShortcutsProps } from './types';

export function Shortcuts<R extends Record<PropertyKey, unknown>, E extends HTMLElement = HTMLElement>({
  tabIndex = -1,
  ScopedWrapperFunctionComponent = 'div',
  shortcutMap,
  handler,
  className,
  dataSelector = 'keyboard-shortcuts',
  children,
}: PropsWithChildren<ShortcutsProps<R, E>>): JSX.Element {
  const ref = useRef<HTMLElement>(null);

  useShortcuts({
    shortcutMap,
    handler,
    ref,
  });

  return (
    <ScopedWrapperFunctionComponent
      data-testid={dataSelector}
      tabIndex={tabIndex}
      ref={ref}
      className={cs('mousetrap', className)}
    >
      {children}
    </ScopedWrapperFunctionComponent>
  );
}
