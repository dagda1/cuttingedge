import React, { useRef } from 'react';
import cs from 'classnames';
import { assert } from 'assert-ts';
import { useShortcuts } from '@cutting/use-shortcuts';
import { ShortcutsProps } from './types';

export const Shortcuts: React.FC<ShortcutsProps> = ({
  scoped = false,
  tabIndex = -1,
  ScopedWrapperComponentType = 'div',
  shortcutMap,
  handler,
  className,
  dataSelector = 'keyboard-shortcuts',
  children,
}) => {
  const ref = useRef<HTMLElement>(null);

  useShortcuts({
    shortcutMap,
    handler,
    ref,
  });

  if (!scoped) {
    return <>{children}</>;
  }

  assert(!!children, 'If a mousetrap scoped component then there should be child mice.');

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
