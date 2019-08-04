import { useRef, useEffect } from 'react';
import { ShortcutAction, UseShortcuts, Shortcut } from '../../types';
import mousetrap = require('mousetrap');
import { buildShortcuts } from '../Shortcuts/buildShortcuts';

export const useShortcuts = ({ shortcutMap, scoped, ref, mapKey, handler }: UseShortcuts) => {
  const shortcutsRef = useRef<ShortcutAction[]>([]);
  const mousetrapRef = useRef<MousetrapStatic | MousetrapInstance>();

  useEffect(() => {
    if (!!mousetrapRef.current) {
      return;
    }

    if (!scoped) {
      mousetrapRef.current = mousetrap;
      return;
    }

    if (!ref) {
      throw new Error('You need to supply a ref for a scoped mousetrap.');
    }

    if (!ref.current) {
      return;
    }

    mousetrapRef.current = new mousetrap(ref.current);

    return () => {
      mousetrapRef.current && mousetrapRef.current.reset();
    };
  }, [ref, scoped]);

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
};
