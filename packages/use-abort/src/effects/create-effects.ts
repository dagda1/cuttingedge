import type { Slice } from '@effection/atom';
import type { Runnable, FetchState, FetchJob } from '../types';
import { Effect, map } from './effects';

export function fetcher<T>(): Effect<Record<string, FetchJob<T>>> {
  return (slice) =>
    function* (scope) {
      try {
        const jobs = slice.get();

        for (const [_, job] of Object.entries(jobs)) {
          console.dir(_);
          console.dir(job);
        }
      } catch (err) {}
    };
}

export function createEffects<T>(atom: Slice<FetchState<T>>): Runnable<void> {
  return {
    run(scope) {
      scope.spawn(map(atom.slice('jobs'), fetcher()));
    },
  };
}
