import { act, render, renderHook } from '@testing-library/react';
import type { RefObject } from 'react';
import { useRef } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { useParentSize } from './useParentSize';

const observers: ResizeObserverStub[] = [];
let notifyResize: ResizeObserverCallback;

class ResizeObserverStub implements ResizeObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();

  constructor(callback: ResizeObserverCallback) {
    notifyResize = callback;
    observers.push(this);
  }
}

function triggerResize(width: number, height: number): void {
  const entry = { contentRect: new DOMRectReadOnly(0, 0, width, height) } as ResizeObserverEntry;

  notifyResize([entry], observers[observers.length - 1]);
}

function attachedRef(): RefObject<HTMLDivElement | null> {
  return { current: document.createElement('div') };
}

function Child({ parentRef }: { parentRef: RefObject<HTMLDivElement | null> }): JSX.Element {
  const { width } = useParentSize(parentRef, { initialValues: { width: 0 } });

  return <span>{width}</span>;
}

function Parent(): JSX.Element {
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={parentRef}>
      <Child parentRef={parentRef} />
    </div>
  );
}

function Replaceable({ elementKey }: { elementKey: string }): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useParentSize(ref);

  return <div key={elementKey} ref={ref} data-testid={elementKey} />;
}

function Delayed({ ready }: { ready: boolean }): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useParentSize(ref, { initialValues: { width: 0 } });

  if (!ready) {
    return <div>Loading at {width}</div>;
  }

  return <div ref={ref}>{width}</div>;
}

beforeEach(() => {
  observers.length = 0;
  vi.stubGlobal('ResizeObserver', ResizeObserverStub);
});

describe('useParentSize', () => {
  it('should use initial default contentRect', () => {
    const { result } = renderHook(() => useParentSize(attachedRef()));
    expect(result.current.width).toBeUndefined();
    expect(result.current.height).toBeUndefined();
  });

  it('should use user set initial dimensions', () => {
    const { result } = renderHook(() => useParentSize(attachedRef(), { initialValues: { width: 200, height: 200 } }));
    expect(result.current.width).toBe(200);
    expect(result.current.height).toBe(200);
  });

  it('should return the dimensions of an element', () => {
    const ref = attachedRef();
    const { result } = renderHook(() => useParentSize(ref));
    act(() => {
      triggerResize(200, 200);
    });
    expect(result.current.width).toBe(200);
    expect(result.current.height).toBe(200);
  });

  it('should apply transformation', () => {
    const ref = attachedRef();
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
    const ref = attachedRef();
    const callback = vi.fn();
    renderHook(() => useParentSize(ref, { callback, maxDifference: -1, debounceDelay: 0 }));
    act(() => {
      triggerResize(200, 200);
    });
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should keep one ResizeObserver across resizes', () => {
    const ref = attachedRef();
    renderHook(() => useParentSize(ref, { maxDifference: -1, debounceDelay: 0 }));
    act(() => {
      triggerResize(200, 200);
    });
    act(() => {
      triggerResize(400, 400);
    });
    expect(observers).toHaveLength(1);
  });

  it('should measure an element that an ancestor attaches the ref to', () => {
    const { getByText } = render(<Parent />);
    act(() => {
      triggerResize(200, 100);
    });
    expect(getByText('200')).toBeTruthy();
  });

  it('should observe the new element when the element is replaced', () => {
    const { rerender, getByTestId } = render(<Replaceable elementKey="first" />);
    rerender(<Replaceable elementKey="second" />);
    expect(observers).toHaveLength(2);
    expect(observers[0].disconnect).toHaveBeenCalledTimes(1);
    expect(observers[1].observe).toHaveBeenCalledWith(getByTestId('second'));
  });

  it('should not share a measured size with another hook instance', () => {
    const first = attachedRef();
    renderHook(() => useParentSize(first));
    act(() => {
      triggerResize(200, 100);
    });
    const second = attachedRef();
    const { result } = renderHook(() => useParentSize(second));
    expect(result.current.width).toBeUndefined();
  });

  it('should return the initial values while the ref is not attached to an element', () => {
    const { getByText } = render(<Delayed ready={false} />);
    expect(getByText('Loading at 0')).toBeTruthy();
    expect(observers).toHaveLength(0);
  });

  it('should stop observing when the element is removed', () => {
    const { rerender } = render(<Delayed ready />);
    rerender(<Delayed ready={false} />);
    expect(observers[0].disconnect).toHaveBeenCalledTimes(1);
  });

  it('should observe again when a removed element renders again', () => {
    const { rerender, getByText } = render(<Delayed ready />);
    rerender(<Delayed ready={false} />);
    rerender(<Delayed ready />);
    act(() => {
      triggerResize(200, 100);
    });
    expect(observers).toHaveLength(2);
    expect(getByText('200')).toBeTruthy();
  });

  it('should measure an element that renders after the first render', () => {
    const { rerender, getByText } = render(<Delayed ready={false} />);
    rerender(<Delayed ready />);
    act(() => {
      triggerResize(200, 100);
    });
    expect(getByText('200')).toBeTruthy();
  });
});
