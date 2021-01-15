import type { RefObject } from 'react';
import { ExtendedKeyboardEvent, MousetrapInstance, MousetrapStatic } from 'mousetrap';

export type UseShortcuts<R extends Record<string, unknown>, E extends HTMLElement = HTMLElement> = {
  shortcutMap: R;
  handler: ShortcutHandler<keyof R>;
  ref?: RefObject<E>;
};

export interface ShortcutAction<T extends PropertyKey> {
  keys: string | string[];
  action: Action<T>;
  trapper?: MousetrapStatic | MousetrapInstance;
}

export type UseShortcutsResults<R extends Record<string, unknown>> = { shortcuts: ShortcutAction<keyof R>[] };

export interface Action<T extends PropertyKey> {
  type: T;
}

export type ShortcutHandler<T extends PropertyKey> = (action: Action<T>, event: ExtendedKeyboardEvent) => void;

export type Combinator<T, C extends 'combination' | 'sequence'> = T extends Record<C, string | string[]>
  ? C extends 'combination' | 'sequence'
    ? Record<C, string | string[]>
    : never
  : never;

export type Combination<R> = Combinator<R, 'combination'>;
export type Sequence<R> = Combinator<R, 'sequence'>;

export type KeyStrokes = string | string[];
