/* eslint-disable @typescript-eslint/no-unused-vars */
export enum KeyCode {
  Alt = 'meta',
  Command = 'command',
  Ctrl = 'ctrl',
  DownArrow = 'down',
  Enter = 'enter',
  Escape = 'esc',
  LeftArrow = 'left',
  Mod = 'mod', // On Mac this ends up mapping to command whereas on Windows and Linux it maps to ctrl.
  RightArrow = 'right',
  Shift = 'shift',
  UpArrow = 'up',
}

type KeyStroke = KeyCode | string;

interface Combination {
  combination: KeyStroke[];
}

type ShortcutItem<K> = K extends Record<'combination', KeyStroke[]>
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

const shortcutMap = {
  COMBINATION_EXAMPLE: { combination: [KeyCode.Ctrl, 'f'] },
};

export type CombinationResult = ShortcutMap<typeof shortcutMap>;

declare const o: CombinationResult;

o.COMBINATION_EXAMPLE.combination; // $ExpectType number
