import { describe, expect, it } from 'vitest';

import { escapeHtml } from './escapeHtml';

describe('escapeHtml', () => {
  it('should escape html', () => {
    expect(escapeHtml(`<div>& his "nibs" to be 'herman'</div>`)).toBe(
      '&lt;div&gt;&amp; his &quot;nibs&quot; to be &#039;herman&#039;&lt;/div&gt;',
    );
  });
});
