import type { Operation, Task } from 'effection'
import {run} from 'effection';
import { useEffect, useMemo } from 'react';

export function useOperation<T>(operation: Operation<T>) : Task<T> {

  let task = useMemo<Task<T>>(() => run(operation), []);

  useEffect(() => () => task.halt(), []);

  return task;
}