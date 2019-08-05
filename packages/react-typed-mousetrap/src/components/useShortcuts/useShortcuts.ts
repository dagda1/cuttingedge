import { useRef, useEffect } from 'react';
import { ShortcutAction, UseShortcuts, Shortcut, UseShortcutsResult } from '../../types';
import mousetrap = require('mousetrap');
import { buildShortcuts } from '../Shortcuts/buildShortcuts';
import { clearArray } from '../../utils';

export const useShortcuts = ({ shortcutMap, ref, mapKey, handler }: UseShortcuts): UseShortcutsResult => {
  const shortcutsRef = useRef<ShortcutAction[]>([]);
  const mousetrapRef = useRef<MousetrapStatic | MousetrapInstance>();

  useEffect(() => {
    if (!!mousetrapRef.current) {
      return;
    }

    if (!ref) {
      mousetrapRef.current = mousetrap;
      return;
    }

    if (!ref.current) {
      return;
    }

    mousetrapRef.current = new mousetrap(ref.current);

    return () => {
      mousetrapRef.current && mousetrapRef.current.reset();
    };
  }, [ref]);

  useEffect(() => {
    if (!mousetrapRef.current) {
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

    clearArray(shortcuts);

    shortcuts.push(...shortcutActions);

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
  }, [handler, mapKey, ref, shortcutMap]);

  // for testing
  return { shortcuts: shortcutsRef.current };
};
