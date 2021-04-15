import { expect, test, describe } from '@jest/globals';
import { isNil } from './isNil';

describe('isNil', () => {
  test.each`
    subject              | expected | message
    ${isNil(undefined)}  | ${true}  | ${'undefined'}
    ${isNil(null)}       | ${true}  | ${'null'}
    ${isNil(NaN)}        | ${false} | ${'NaN'}
    ${isNil('default')}  | ${false} | ${'string'}
    ${isNil({ a: 'a' })} | ${false} | ${'object'}
  `('subject:$subject is $expected, //$message', ({ subject, expected }) => {
    expect(subject).toBe(expected);
  });
});
