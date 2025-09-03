import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { useParentSize } from './useParentSize';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let resizeObserverCallback: (entries: any[]) => void;

beforeEach(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  global.ResizeObserver = vi.fn().mockImplementation((cb: any) => {
    resizeObserverCallback = cb;
    return {
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    };
  });
});

const triggerResize = (width: number, height: number) => {
  resizeObserverCallback([
    {
      contentRect: {
        x: 0,
        y: 0,
        top: 0,
        left: 0,
        width,
        height,
        right: width,
        bottom: height,
      },
    },
  ]);
};

describe('useParentSize', () => {
  it('should use initial default contentRect', () => {
    const ref: { current: null | HTMLDivElement } = { current: document.createElement('div') };
    const { result } = renderHook(() => useParentSize(ref));
    expect(result.current.width).toBeUndefined();
    expect(result.current.height).toBeUndefined();
  });

  it('should use user set initial dimensions', () => {
    const ref: { current: null | HTMLDivElement } = { current: document.createElement('div') };
    const { result } = renderHook(() => useParentSize(ref, { initialValues: { width: 200, height: 200 } }));
    expect(result.current.width).toBe(200);
    expect(result.current.height).toBe(200);
  });

  it('should return the dimensions of an element', () => {
    const ref: { current: null | HTMLDivElement } = { current: document.createElement('div') };
    const { result } = renderHook(() => useParentSize(ref));
    act(() => {
      triggerResize(200, 200);
    });
    expect(result.current.width).toBe(200);
    expect(result.current.height).toBe(200);
  });

  it('should apply transformation', () => {
    const ref: { current: null | HTMLDivElement } = { current: document.createElement('div') };
    const { result } = renderHook(() =>
      useParentSize(ref, {
        transformFunc: ({ width, height }) => ({
          width: width && width > 0 ? width / 2 : 0,
          height: height && height > 0 ? height / 2 : 0,
        }),
      }),
    );
    act(() => {
      triggerResize(200, 200);
    });
    expect(result.current.width).toBe(100);
    expect(result.current.height).toBe(100);
  });

  it('should call the callback option', () => {
    const ref: { current: null | HTMLDivElement } = { current: document.createElement('div') };
    const callback = vi.fn();
    renderHook(() => useParentSize(ref, { callback, maxDifference: -1, debounceDelay: 0 }));
    act(() => {
      triggerResize(200, 200);
    });
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
