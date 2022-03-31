import { expect, it, describe, beforeEach, afterEach, jest } from '@jest/globals';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import type { History } from 'history';
import { render } from '@testing-library/react';
import { useScrollToTop } from './useScrollToTop';

describe('useScrollToTop', () => {
  let history: History;

  beforeEach(() => {
    history = createMemoryHistory();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.clearAllTimers();
  });

  it('should scroll to top on a new page', () => {
    const focus = jest.fn();
    const scrollTo = jest.fn();

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

    jest.runAllTimers();

    expect(scrollTo).toHaveBeenCalled();
    expect(focus).toHaveBeenCalled();
  });
});
