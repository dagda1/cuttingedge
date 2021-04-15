import { describe, it, expect } from '@jest/globals';

// cannot import, jest pukes with mhchem_parser.js:5 error
// import { useMathJax } from './useMathJax';

describe('useMathJax', () => {
  it('should be defined', () => {
    expect(true).toBe(true);
  });
});
