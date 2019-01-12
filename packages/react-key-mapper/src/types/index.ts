import React from 'react';
import { KeyCode } from './keycodes';

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
