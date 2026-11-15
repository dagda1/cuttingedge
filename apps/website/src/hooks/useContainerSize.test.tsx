import { act, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { useContainerSize } from './useContainerSize';

let notifyResize: ResizeObserverCallback;

class ResizeObserverStub implements ResizeObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();

  constructor(callback: ResizeObserverCallback) {
    notifyResize = callback;
  }
}

function resizeTo(width: number, height: number): void {
  const entry = { contentRect: new DOMRectReadOnly(0, 0, width, height) } as ResizeObserverEntry;

  notifyResize([entry], new ResizeObserverStub(notifyResize));
}

function Container(): JSX.Element {
  const { containerRef, width, height } = useContainerSize({ debounceDelay: 0 });

  return <div ref={containerRef}>{`${width} by ${height}`}</div>;
}

describe('useContainerSize', () => {
  beforeEach(() => {
    vi.stubGlobal('ResizeObserver', ResizeObserverStub);
  });

  it('starts at zero width and height', () => {
    render(<Container />);

    expect(screen.getByText('0 by 0')).toBeTruthy();
  });

  it('returns the size the container is resized to', () => {
    render(<Container />);

    act(() => resizeTo(200, 100));

    expect(screen.getByText('200 by 100')).toBeTruthy();
  });
});
