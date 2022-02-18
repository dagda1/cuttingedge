import { createModel } from 'xstate/lib/model';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createQueryMachine = <D>({ initialData }: { initialData: D }) => {
  const initialSate: {
    data: D;
    error?: Error | undefined;
  } = {
    data: initialData,
    error: undefined,
  };
  const model = createModel(
    {
      ...initialSate,
    },
    {
      events: {
        START: () => ({}),
        SUCCESS: ({ payload }: { payload: D }) => ({ payload }),
        RESET: () => ({}),
        ABORT: () => ({}),
        ERROR: ({ error }: { error: Error }) => ({ error }),
      },
    },
  );

  const machine = model.createMachine({
    id: 'fetch',
    initial: 'ready',
    context: model.initialContext,
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    tsTypes: {} as import('./machine.typegen').Typegen0,
    states: {
      ready: {
        on: {
          START: 'loading',
        },
      },
      loading: {
        on: {
          SUCCESS: {
            target: 'succeeded',
            actions: model.assign({
              data: (_, e) => e.payload,
              error: undefined,
            }),
          },
          ERROR: {
            target: 'error',
            actions: model.assign({
              error: (_, event) => event.error,
            }),
          },
          ABORT: {
            target: 'aborted',
          },
        },
      },
      succeeded: {
        on: {
          RESET: {
            target: 'ready',
            actions: model.reset(),
          },
        },
      },
      error: {
        on: {
          RESET: {
            target: 'ready',
            actions: model.reset(),
          },
        },
      },
      aborted: {
        on: {
          RESET: {
            target: 'ready',
            actions: model.reset(),
          },
        },
      },
    },
  });

  return machine;
};
