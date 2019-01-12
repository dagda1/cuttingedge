import React from 'react';
import { KeyCode } from './keycodes';

export interface Combination {
  combination: KeyCode[];
}

export interface Sequence {
  sequence: KeyCode[];
}

export interface ShortcutMapItem {
  [key: string]: KeyCode | KeyCode[] | Combination | Combination[] | Sequence | Sequence[];
}

export interface ShortcutMap {
  [key: string]: ShortcutMapItem;
}

export type Refable<T> = React.ReactElement<T> & {
  ref: React.RefObject<T>;
};

export interface Shortcut {
  keySequence: string;
  action: (...args: any[]) => any;
}

export type CreateShortcuts = (props: any, instance?: React.ReactNode) => Shortcut[];
