import { useParentSize } from './useParentSize';
import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

const scheduler = typeof setImmediate === 'function' ? setImmediate : setTimeout;

// eslint-disable-next-line jest/no-export
export function flushPromises(): Promise<unknown> {
  return new Promise((resolve) => {
    scheduler(resolve, 0);
  });
}

it('by default, state defaults every value to -1', async () => {
  const { result } = renderHook(() => useParentSize());

  await act(async () => {
    const div = document.createElement('div');
  });

  expect(result.current[1]).toMatchObject({
    width: 0,
    height: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });
});
