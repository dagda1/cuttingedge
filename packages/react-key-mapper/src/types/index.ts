import React from 'react';
import { KeyCode } from './keycodes';

export interface ShortcutsProps {
  mapKey: string;
  shortcutMap: ShortcutMap;
  handler: ShortcutHandler;
  scoped?: boolean;
  tabIndex?: number;
}

export interface ShortcutAction {
  keys: string | string[];
  action: string;
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

export interface ShortcutMap {
  [key: string]: Shortcut;
}

export type Refable<T> = React.ReactElement<T> & {
  ref: React.RefObject<T>;
};
