/* eslint-disable @typescript-eslint/no-explicit-any */
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

type UnionToTuple<T> = (
  (T extends any ? (t: T) => T : never) extends infer U
    ? (U extends any ? (u: U) => any : never) extends (v: infer V) => any
      ? V
      : never
    : never
) extends (_: any) => infer W
  ? [...UnionToTuple<Exclude<T, W>>, W]
  : [];

type KeyStroke = KeyCode | string;

type GetKeys<T extends { combination?: any }> = {
  [K in keyof T]: K extends 'combination' ? GetKeys<T['combination']> : K;
};

type ShortcutItem<T> = T extends Record<'combination', KeyStroke | KeyStroke[]>
  ? { [K in keyof T as 'keys']: GetKeys<T[K]> }
  : // : K extends Record<'sequence', KeyStroke[]>
  // ? Sequence
  // : K extends ArrayLike<KeyStroke>
  // ? KeyStroke[]
  T extends string
  ? KeyStroke
  : never;

type ShortcutMap<S extends Record<string, unknown>> = {
  [K in keyof S]: S[K] extends string ? { keys: S[K]; action: { type: K } } : ShortcutItem<S[K]>;
}[keyof S];

const shortcutMap = {
  FIRST: 'a',
  COMBINATION_EXAMPLE: { combination: 'f' },
} as const;

export type CombinationResult = UnionToTuple<ShortcutMap<typeof shortcutMap>>;

declare const o: CombinationResult;

// $ExpectType "a"
o[0].keys;

// $ExpectType "FIRST"
o[0].action.type;

// $ExpectType "f"
o[1].keys;
