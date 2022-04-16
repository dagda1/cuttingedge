import { describe, it, expect } from '@jest/globals';
import path from 'path';
import { check } from './index';

const bad = path.join(process.cwd(), './fixtures/bad.js');
const good = path.join(process.cwd(), './fixtures/good.js');

describe('action', () => {
  it('should identify side effects', async () => {
    expect(await check(bad)).toEqual({ shaken: false });
  });

  it('should idenfity side effect free', async () => {
    expect(await check(good)).toEqual({ shaken: true });
  });
});
