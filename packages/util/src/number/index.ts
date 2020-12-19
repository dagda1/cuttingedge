import { isNil } from '../object/isNil';

export const isNumber = (n: unknown): n is number => !isNil(n) && /^\d+$/g.test((n as string).toString());
