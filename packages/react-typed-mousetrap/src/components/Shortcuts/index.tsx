import React, { useRef, useEffect } from 'react';
import mousetrap from 'mousetrap';
import { ShortcutAction, ShortcutsProps, Shortcut } from '../../types';
import { buildShortcuts } from './buildShortcuts';
import cs from 'classnames';
import invariant from 'invariant';

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
  const shortcutsRef = useRef<ShortcutAction[]>([]);
  const mousetrapRef = useRef<MousetrapStatic | MousetrapInstance>();

  useEffect(() => {
    if (!ref.current || !!mousetrapRef.current) {
      return;
    }

    if (!scoped) {
      mousetrapRef.current = mousetrap;
      return;
    }

    mousetrapRef.current = new mousetrap(ref.current);

    return () => {
      mousetrapRef.current && mousetrapRef.current.reset();
    };
  }, [scoped]);

  useEffect(() => {
    if (!ref.current || !mousetrapRef.current) {
      return;
    }

    const shortcuts = shortcutsRef.current;
    const trapper = mousetrapRef.current;

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

    return () => {
      if (!shortcuts) {
        return;
      }

      shortcuts.forEach((shortcut) => {
        if (shortcut.trapper) {
          shortcut.trapper.unbind(shortcut.keys);
        }

        trapper.reset();
      });
    };
  }, [handler, mapKey, scoped, shortcutMap]);

  if (!scoped) {
    invariant(children, 'If a mousetrap scoped component then there should be child mice.');

    return <>{children}</>;
  }

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
