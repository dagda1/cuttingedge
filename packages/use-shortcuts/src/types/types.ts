/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExtendedKeyboardEvent, MousetrapInstance, MousetrapStatic } from 'mousetrap';
import { KeyCode } from './keycodes';

export interface Action<T extends string = any> {
  type: T;
}

export interface UseShortcuts<E extends HTMLElement = HTMLElement> {
  shortcutMap: ShortcutMap;
  handler: ShortcutHandler;
  ref?: React.RefObject<E>;
}

export interface UseShortcutsResult {
  shortcuts: ShortcutAction[];
}

export interface ShortcutAction<T extends string = any> {
  keys: string | string[];
  action: Action<T>;
  trapper?: MousetrapStatic | MousetrapInstance;
}

export type ShortcutHandler<T extends string = any> = (action: Action<T>, event: ExtendedKeyboardEvent) => void;

export type KeyStroke = KeyCode | string;

export interface Combination {
  combination: KeyStroke[];
}

export interface Sequence {
  sequence: KeyStroke[];
}

export type ShortcutItem<K> = K extends Record<'combination', KeyStroke[]>
  ? Combination
  : K extends Record<'sequence', KeyStroke[]>
  ? Sequence
  : K extends ArrayLike<KeyStroke>
  ? KeyStroke[]
  : K extends string
  ? KeyStroke
  : never;

export interface ShortcutMap {
  [key: string]: ShortcutItem<any>;
}
