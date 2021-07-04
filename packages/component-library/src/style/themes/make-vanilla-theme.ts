import type { Tokens } from './tokens';
import { tokens as baseTokens } from './tokens';
import deepmerge from 'deepmerge';

export const makeVanillaTheme = (tokens: Partial<Tokens> = {}): Tokens => {
  return deepmerge(baseTokens, tokens);
};
