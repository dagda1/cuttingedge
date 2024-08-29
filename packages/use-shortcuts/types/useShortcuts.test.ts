/* eslint-disable @typescript-eslint/no-unused-expressions */
import { KeyCode } from '../src/types/keycodes';
import type { UseShortcutsResults } from '../src/types/types';

const _shortcutMap = {
  FIRST: 'a',
  SECOND: { combination: 'f' },
  THIRD: { combination: [KeyCode.Ctrl, 'a'] },
  FOURTH: { sequence: ['x', 'z'] },
} as const;

export type R = UseShortcutsResults<typeof _shortcutMap>;

declare const o: R;

// $ExpectType string | string[]
o.shortcuts[0].keys;

// $ExpectType "FIRST" | "SECOND" | "THIRD" | "FOURTH"
o.shortcuts[0].action.type;

// $ExpectType string | string[]
o.shortcuts[1].keys;

// $ExpectType "FIRST" | "SECOND" | "THIRD" | "FOURTH"
o.shortcuts[1].action.type;

// $ExpectType string | string[]
o.shortcuts[2].keys;

// $ExpectType "FIRST" | "SECOND" | "THIRD" | "FOURTH"
o.shortcuts[2].action.type;

// $ExpectType string | string[]
o.shortcuts[3].keys;

// $ExpectType "FIRST" | "SECOND" | "THIRD" | "FOURTH"
o.shortcuts[3].action.type;
