import { AssertionError } from './AssertionError';

export function assert(condition: unknown, msg?: string): asserts condition {
  if (!condition) {
    throw new AssertionError(msg);
  }
}
