import { render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useScrollToTop } from './useScrollToTop';

describe('useScrollToTop', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
    vi.clearAllTimers();
  });

  it('should scroll to top on a new page', () => {
    const focus = vi.fn();
    const scrollTo = vi.fn();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ref: any = {
      current: {
        focus,
      },
    };

    Object.defineProperty(window, 'scrollTo', {
      value: () => scrollTo(),
      writable: true,
    });

    function Comp(): JSX.Element {
      useScrollToTop({ ref });
      return <h1>Foo</h1>;
    }

    render(<Comp />);

    vi.runAllTimers();

    expect(scrollTo).toHaveBeenCalled();
    expect(focus).toHaveBeenCalled();
  });
});
