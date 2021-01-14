import type { RefObject } from 'react';
import mousetrap, { ExtendedKeyboardEvent, MousetrapInstance, MousetrapStatic } from 'mousetrap';
import { useEffect, useRef } from 'react';
// import { UseShortcuts, ShortcutAction, UseShortcutsResult } from './types/types';
import { buildShortcuts } from './buildShortcuts';
import { clearArray } from './utils/clearArray';
import { Combination, KeyStroke } from './types/types';
import { KeyCode } from './types/keycodes';
type ObjectType = Record<string, unknown>;

export type ShortcutItem<K> = K extends Record<'combination', KeyStroke[]>
  ? Combination
  : // : K extends Record<'sequence', KeyStroke[]>
    // ? Sequence
    // : K extends ArrayLike<KeyStroke>
    // ? KeyStroke[]
    // : K extends string
    // ? KeyStroke
    never;

type ShortcutMap<S extends Record<string, unknown>> = {
  [K in keyof S]: ShortcutItem<S[K]>;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useShortcuts = <
  S extends ObjectType = never,
  E extends HTMLElement = HTMLElement,
  H extends ObjectType = never
>({
  shortcutMap,
  ref,
  handler,
}: {
  shortcutMap: ShortcutMap<S>;
  ref: RefObject<E>;
  handler: H;
}) => {
  const shortcutsRef = useRef<E>([]);
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

    shortcutActions.forEach((shortcut) => {
      trapper.bind(shortcut.keys, (e: ExtendedKeyboardEvent) => {
        e.stopPropagation();

        handler(shortcut.action, e);
      });

      shortcut.trapper = trapper;
    });

    clearArray(shortcuts);

    shortcuts.push(...shortcutActions);

    return (): void => {
      shortcuts.forEach((shortcut) => {
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
