import React from 'react';
import { KeyCode } from './keycodes';

export interface UseShortcuts {
  shortcutMap: ShortcutMap;
  mapKey?: string;
  handler: ShortcutHandler;
  ref?: React.RefObject<HTMLElement>;
}

export interface UseShortcutsResult {
  shortcuts: ShortcutAction[];
}

export interface ShortcutAction {
  keys: string | string[];
  action: string;
  trapper?: MousetrapStatic | MousetrapInstance;
}

export type ShortcutHandler = (action: string, event: ExtendedKeyboardEvent) => void;

export type KeyStroke = KeyCode | string;

export interface Combination {
  combination: KeyStroke[];
}

export interface Sequence {
  sequence: KeyStroke[];
}

export type ShortcutItem = KeyStroke | KeyStroke[] | Combination | Sequence;

export interface Shortcut {
  [key: string]: ShortcutItem;
}

export type ShortcutMap =
  | {
      [key: string]: Shortcut;
    }
  | Shortcut;
