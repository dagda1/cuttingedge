import mousetrap from 'mousetrap';
import { useEffect, useRef } from 'react';
import { UseShortcuts, ShortcutAction, UseShortcutsResult } from './types';
import { buildShortcuts } from './buildShortcuts';
import { clearArray } from './utils/clearArray';

export const useShortcuts = <E extends HTMLElement = HTMLElement>({
  shortcutMap,
  ref,
  handler,
}: UseShortcuts<E>): UseShortcutsResult => {
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

    return (): void => {
      mousetrapRef.current && mousetrapRef.current.reset();
    };
  }, [ref]);

  useEffect(() => {
    if (!mousetrapRef.current) {
      return;
    }

    const shortcuts = shortcutsRef.current;
    const trapper = mousetrapRef.current;

    const shortcutActions = buildShortcuts(shortcutMap);

    shortcutActions.forEach(shortcut => {
      trapper.bind(shortcut.keys, (e: ExtendedKeyboardEvent) => {
        e.stopPropagation();

        handler(shortcut.action, e);
      });

      shortcut.trapper = trapper;
    });

    clearArray(shortcuts);

    shortcuts.push(...shortcutActions);

    return (): void => {
      shortcuts.forEach(shortcut => {
        if (shortcut.trapper) {
          shortcut.trapper.unbind(shortcut.keys);
        }

        trapper.reset();
      });
    };
  }, [handler, ref, shortcutMap]);

  // for testing
  return { shortcuts: shortcutsRef.current };
};
