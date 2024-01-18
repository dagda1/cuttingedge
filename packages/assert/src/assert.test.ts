import { describe, beforeAll, it, expect } from 'vitest';
import { assert, configureAssert } from './assert';
const logHistory: string[] = [];
const log = (msg: string) => logHistory.push(msg);

describe('assert', () => {
  beforeAll(() => {
    configureAssert({
      errorReporter: (failureType, error, message, props) => {
        log(`ERROR: ${failureType}, ${error}, ${message}: ${props}`);
      },
      warningReporter: (failureType, message, props) => {
        log(`WARNING: ${failureType}, ${message}: ${props}`);
      },
    });
  });

  describe('assert', () => {
    it('assert true should not fail', () => {
      expect(() => assert(true)).not.toThrowError();
    });
    it('assert false should fail', () => {
      expect(() => assert(false)).toThrowError();
    });
    it('assert undefiined should fail', () => {
      expect(() => assert(undefined)).toThrowError();
    });
    it('assert null should fail', () => {
      expect(() => assert(null)).toThrowError();
    });
    it('assert an empty string should not fail', () => {
      expect(() => assert('')).not.toThrowError();
    });
    it('assert a non-empty string should not fail', () => {
      expect(() => assert('string')).not.toThrowError();
    });
    it('assert an empty array should not fail', () => {
      expect(() => assert([])).not.toThrowError();
    });
    it('assert a non-empty array should not fail', () => {
      expect(() => assert([5])).not.toThrowError();
    });
    it('assert an empty object should not fail', () => {
      expect(() => assert({})).not.toThrowError();
    });
    it('assert a non-empty object should not fail', () => {
      expect(() => assert({ n: 5 })).not.toThrowError();
    });
    it('assert 0 should not fail', () => {
      expect(() => assert(0)).not.toThrowError();
    });
    it('assert 1 should not fail', () => {
      expect(() => assert(1)).not.toThrowError();
    });
  });
});
