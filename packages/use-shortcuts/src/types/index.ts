import React from 'react';
import { KeyCode } from './keycodes';
import { FunctionComponent, ComponentClass } from 'react';

export interface UseShortcuts {
  shortcutMap: ShortcutMap;
  mapKey?: string;
  handler: ShortcutHandler;
  ref?: React.RefObject<HTMLElement>;
}

export interface UseShortcutsResult {
  shortcuts: ShortcutAction[];
}

export interface ShortcutsProps<
  TScopedWrapperComponentType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> extends Omit<UseShortcuts, 'ref'> {
  tabIndex?: number;
  className?: string;
  dataSelector?: string;
  scoped?: boolean;

  ScopedWrapperComponentType?:
    | FunctionComponent<TScopedWrapperComponentType>
    | ComponentClass<TScopedWrapperComponentType>
    | string;
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

export type Refable<T> = React.ReactElement<T> & {
  ref: React.RefObject<T>;
};
