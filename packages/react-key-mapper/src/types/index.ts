import React from 'react';
import { KeyCode } from './keycodes';

export type ShortcutHandler = (action: string, event: ExtendedKeyboardEvent) => void;

export type KeyStroke = KeyCode | KeyCode[] | string;

export interface Combination {
  combination: KeyStroke[];
}

export interface Sequence {
  sequence: KeyStroke[];
}

export interface Shortcut {
  [key: string]: KeyStroke | KeyStroke[] | Combination | Combination[] | Sequence | Sequence[];
}

export interface ShortcutMap {
  [key: string]: Shortcut;
}

export type Refable<T> = React.ReactElement<T> & {
  ref: React.RefObject<T>;
};
