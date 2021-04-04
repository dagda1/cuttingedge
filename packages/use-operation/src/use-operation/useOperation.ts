import type { Operation, Task } from 'effection';
import { run } from 'effection';
import { useEffect, useMemo } from 'react';

export function useOperation<T>(operation: Operation<T>): Task<T> {
  const task = useMemo<Task<T>>(() => run(operation), [operation]);

  useEffect(() => {
    return () => {
      task.halt();
    };
  }, [task]);

  return task;
}
