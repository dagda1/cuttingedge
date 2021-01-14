import { useShortcuts } from '@cutting/use-shortcuts';
import { KeyCode } from '@cutting/use-shortcuts';
const shortcutMap = {
  FIRST: 'a',
  SECOND: { combination: 'f' },
  THIRD: { combination: [KeyCode.Ctrl, 'a'] },
  FOURTH: { sequence: ['x', 'z'] },
} as const;

declare const o = useShortcuts({ shortcutMap });

// $ExpectType "a"
o.shortcuts[0].keys;

// $ExpectType "FIRST"
o.shortcuts[0].action.type;

// $ExpectType "f"
o.shortcuts[1].keys;

// $ExpectType "SECOND"
o.shortcuts[1].action.type;

// $ExpectType "ctrl+a"
o.shortcuts[2].keys;

// $ExpectType "THIRD"
o.shortcuts[2].action.type;

// $ExpectType "x z"
o.shortcuts[3].keys;

// $ExpectType "FOURTH"
o.shortcuts[3].action.type;
