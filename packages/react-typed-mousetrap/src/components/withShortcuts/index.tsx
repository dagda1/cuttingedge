import React from 'react';
import { Shortcuts } from '../Shortcuts';
import { ShortcutsProps } from '../../types';
import { getDisplayName } from '../../utils/getDisplayName';

export const defaultOptions: Partial<ShortcutsProps> = {
  scoped: false,
  tabIndex: -1
};

export const withShortcuts = function<T>(options: ShortcutsProps) {
  const merged = { ...defaultOptions, ...options };

  return (Component: React.ComponentType<T>) => {
    const WithShortcuts: React.FunctionComponent<T> = (props: T) => (
      <Shortcuts {...merged}>
        <Component {...props} />
      </Shortcuts>
    );

    WithShortcuts.displayName = getDisplayName(WithShortcuts);

    return WithShortcuts;
  };
};
