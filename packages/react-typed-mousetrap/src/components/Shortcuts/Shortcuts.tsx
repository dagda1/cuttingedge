import React, { useRef } from 'react';
import { ShortcutsProps } from '../../types';
import cs from 'classnames';
import invariant from 'invariant';
import { useShortcuts } from '../useShortcuts/useShortcuts';

export const Shortcuts: React.FunctionComponent<ShortcutsProps> = ({
  scoped = false,
  tabIndex = -1,
  ScopedWrapperComponentType = 'div',
  shortcutMap,
  handler,
  mapKey,
  className,
  dataSelector = 'keyboard-shortcuts',
  children
}) => {
  const ref = useRef<HTMLElement>(null);

  useShortcuts({
    scoped,
    shortcutMap,
    handler,
    mapKey,
    ref
  });

  if (!scoped) {
    return <>{children}</>;
  }

  invariant(children, 'If a mousetrap scoped component then there should be child mice.');

  return (
    <ScopedWrapperComponentType
      data-selector={dataSelector}
      tabIndex={tabIndex}
      ref={ref}
      className={cs('mousetrap', className)}
    >
      {children}
    </ScopedWrapperComponentType>
  );
};
