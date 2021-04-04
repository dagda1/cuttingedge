import type { Runnable, FetchJob, FetchContext } from '../types';
import { Effect, map } from './effects';

export function fetcher<T>(): Effect<Record<string, FetchJob<T>>> {
  return (slice) =>
    function* () {
      try {
        const jobs = slice.get();

        for (const [_, job] of Object.entries(jobs)) {
          console.dir(_);
          console.dir(job);
        }
      } catch (err) {}
    };
}

export function createEffects(atom: FetchContext['atom']): Runnable<void> {
  return {
    run(scope) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      scope.spawn(map(atom.slice('jobs'), fetcher() as any));
    },
  };
}
