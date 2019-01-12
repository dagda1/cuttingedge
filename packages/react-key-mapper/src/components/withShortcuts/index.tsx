import React from 'react';
import { Shortcuts } from '../Shortcuts';
import { ShortcutMap, ShortcutHandler } from '../../types';

export const withShortcuts = function<T>(shortcutMap: ShortcutMap, key: string, handler: ShortcutHandler) {
  return (Component: React.ComponentType<T>) => (props: T) => (
    <Shortcuts shortcutMap={shortcutMap} mapKey={key} handler={handler}>
      <Component {...props} />
    </Shortcuts>
  );
};
