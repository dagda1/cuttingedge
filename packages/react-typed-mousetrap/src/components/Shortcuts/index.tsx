import React, { useRef, useState, useLayoutEffect } from 'react';
import mousetrap from 'mousetrap';
import { ShortcutAction, ShortcutsProps, Shortcut } from '../../types';
import { buildShortcuts } from './buildShortcuts';
import cs from 'classnames';
import invariant from 'invariant';

export const Shortcuts: React.FC<ShortcutsProps> = ({
  scoped = false,
  tabIndex = -1,
  ScopedWrapperComponentType = 'div',
  shortcutMap,
  handler,
  mapKey,
  className,
  children
}) => {
  const ref = useRef<HTMLElement>(null);
  const [shortcuts, setShortcuts] = useState<ShortcutAction[]>();

  useLayoutEffect(() => {
    const trapper = scoped && ref.current ? new mousetrap(ref.current) : mousetrap;

    const map = mapKey ? (shortcutMap[mapKey] as Shortcut) : (shortcutMap as Shortcut);

    const shortcutActions = buildShortcuts(map);

    shortcutActions.forEach((shortcut) => {
      trapper.bind(shortcut.keys, (e: ExtendedKeyboardEvent) => {
        e.preventDefault();
        e.stopPropagation();

        handler(shortcut.action, e);
      });

      shortcut.trapper = trapper;
    });

    setShortcuts(shortcutActions);

    return () => {
      if (!shortcuts) {
        return;
      }

      shortcuts.forEach((shortcut) => {
        if (shortcut.trapper) {
          shortcut.trapper.unbind(shortcut.keys);
        }
      });
    };
    // eslint:disable-next-line
  }, [handler]);

  if (!scoped) {
    invariant(children, 'If a mousetrap scoped component then there should be child mice.');

    return <>{children}</>;
  }

  return (
    <ScopedWrapperComponentType tabIndex={tabIndex} ref={ref} className={cs('mousetrap', className)}>
      {children}
    </ScopedWrapperComponentType>
  );
};
