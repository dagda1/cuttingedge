/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { KeyCode } from './keycodes';

export interface Action<T extends string = any> {
  type: T;
}

export interface UseShortcuts {
  shortcutMap: ShortcutMap;
  handler: ShortcutHandler;
  ref?: React.RefObject<HTMLElement>;
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

export type ShortcutItem = KeyStroke | KeyStroke[] | Combination | Sequence;

export interface ShortcutMap {
  [key: string]: ShortcutItem;
}
