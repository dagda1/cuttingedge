export { useShortcuts } from './useShortcuts';
export { KeyCode } from './types/keycodes';
export type {
  UseShortcuts,
  UseShortcutsResult,
  ShortcutAction,
  ShortcutHandler,
  Combination,
  Sequence,
  ShortcutItem,
  ShortcutMap,
  Action,
  KeyStroke,
} from './types';
export { clearArray } from './utils/clearArray';
export { isCombination, isSequence } from './utils/guards';
