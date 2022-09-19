import { expect, it, describe, beforeEach, afterEach } from 'vitest';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import type { History } from 'history';
import { render } from '@testing-library/react';
import { useScrollToTop } from './useScrollToTop';
import { vi } from 'vitest';

describe('useScrollToTop', () => {
  let history: History;

  beforeEach(() => {
    history = createMemoryHistory();
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

    render(
      <Router location={history.location} navigator={history}>
        <Comp />
      </Router>,
    );

    vi.runAllTimers();

    expect(scrollTo).toHaveBeenCalled();
    expect(focus).toHaveBeenCalled();
  });
});
