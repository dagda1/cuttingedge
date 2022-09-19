import { wait } from './wait';
import { expect, it, describe } from 'vitest';

describe('wait', () => {
  it('should resolve if an html is found', async () => {
    document.body.innerHTML = '<div id="foo">foo</div>';

    const found = await wait('#foo');

    expect(found).toBeTruthy();
  });

  it('should reject and not find if an html element is not found', async () => {
    let found: HTMLElement | undefined;

    try {
      found = await wait('#bar');
    } catch (ex) {
      expect(found).toBeUndefined();
    }
  });
});
