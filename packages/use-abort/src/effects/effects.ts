import { Slice } from '@effection/atom';
import { Operation, Task } from 'effection';

export interface Effect<A> {
  (slice: Slice<A>): Operation<void>;
}

export function map<A>(slice: Slice<Record<string, A>>, effect: Effect<A>): Operation<void> {
  return function* (scope) {
    const effects = new Map<string, Task>();

    function synchronize(record: Record<string, A>) {
      const keep = new Set<string>();

      for (const key of Object.keys(record)) {
        if (!effects.has(key)) {
          effects.set(key, scope.spawn(effect(slice.slice(key))));
        }
        keep.add(key);
      }

      for (const [key, effect] of effects.entries()) {
        if (!keep.has(key)) {
          effect.halt();
        }
      }
    }

    synchronize(slice.get());

    yield slice.forEach(synchronize);
  };
}
