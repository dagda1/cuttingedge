import { isNil } from '../object/isNil.js';

export const isNumber = (n: unknown): n is number => !isNil(n) && /^\d+$/g.test((n as string).toString());
