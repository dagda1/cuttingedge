import { expect, it, describe, beforeAll, afterEach, afterAll, jest } from '@jest/globals';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { renderHook, act } from '@testing-library/react-hooks';
import { useFetcher } from './react-fetcher';

let times = 0;

const server = setupServer(
  rest.get('http://localhost:3000/multi/:id', (req, res, ctx) => {
    const id = req.params.id;
    return res(ctx.json({ id }));
  }),

  rest.get('http://localhost:3000/single', (_, res, ctx) => {
    return res(ctx.json({ greeting: 'hello there' }));
  }),

  rest.get('http://localhost:3000/singles/:id', (req, res, ctx) => {
    const id = req.params.id;

    return res(ctx.json({ id }));
  }),

  rest.post('http://localhost:3000/multiply/:left/:right', (req, res, ctx) => {
    const answer = Number(req.params.left) * Number(req.params.right);

    return res(ctx.json({ answer }));
  }),

  rest.get('http://localhost:3000/add/:left/:right', (req, res, ctx) => {
    const answer = Number(req.params.left) + Number(req.params.right);

    return res(ctx.json({ answer }));
  }),

  rest.get('http://localhost:3000/error', (req, res, ctx) => {
    return res(ctx.status(500, 'server error'));
  }),

  rest.get('http://localhost:3000/abortable', (req, rest, ctx) => {
    ctx.delay('infinite');
  }),

  rest.get('http://localhost:3000/flaky-connection', (req, res, ctx) => {
    console.dir({ times });

    if (times < 3) {
      times++;
      return res(ctx.status(500, 'server error'));
    }

    return res(ctx.json({ ok: true }));
  }),
);

describe('useFetcher', () => {
  beforeAll(() => server.listen());

  afterEach(() => {
    times = 0;
    server.resetHandlers();
  });

  afterAll(() => server.close());

  describe('single query', () => {
    it('should successfully run a single query', async () => {
      const { result, waitFor } = renderHook(() => useFetcher(`http://localhost:3000/single`));

      await waitFor(() => typeof result.current.data !== 'undefined');

      expect(result.current.state).toBe('SUCCEEDED');
      expect(result.current.data).toEqual({ greeting: 'hello there' });
    });

    it('should only call handlers once', async () => {
      const onQuerySuccess = jest.fn();
      const onSuccess = jest.fn();
      const onError = jest.fn();
      const onAbort = jest.fn();

      const { result, waitFor } = renderHook(() =>
        useFetcher(`http://localhost:3000/single`, {
          onError,
          onSuccess,
          onQuerySuccess,
          onAbort,
        }),
      );

      await waitFor(() => typeof result.current.data !== 'undefined');

      expect(onQuerySuccess).toHaveBeenCalledTimes(1);
      expect(onSuccess).toHaveBeenCalled();
      expect(onError).not.toHaveBeenCalled();
      expect(result.current.state).toBe('SUCCEEDED');
      expect(result.current.data).toEqual({ greeting: 'hello there' });
      expect(onAbort).not.toBeCalled();
    });

    it('should successfully run a single query on demand', async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useFetcher(`http://localhost:3000/single`, { executeOnMount: false }),
      );

      expect(result.current.state).toBe('READY');

      await act(async () => {
        result.current.run();
      });

      expect(result.current.state).toBe('LOADING');

      await waitForNextUpdate();

      expect(result.current.state).toBe('SUCCEEDED');
      expect(result.current.data).toEqual({ greeting: 'hello there' });
    });

    describe('single accumulation', () => {
      it('should accumulate a single value with default accumulator', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetcher(`http://localhost:3000/singles/1`));

        await waitForNextUpdate();

        expect(result.current.data).toEqual({ id: '1' });
      });

      it('should transform a value', async () => {
        const onSuccess = jest.fn();
        const onError = jest.fn();

        const { result, waitForNextUpdate } = renderHook(() =>
          useFetcher<{ id: string }, { id?: string; name: string }>(`http://localhost:3000/singles/1`, {
            accumulator: (acc, curr) => ({ ...acc, ...curr }),
            initialState: { name: 'bob' },
            onSuccess,
            onError,
          }),
        );

        expect(result.current.state).toBe('LOADING');

        await waitForNextUpdate();

        expect(result.current.state).toBe('SUCCEEDED');

        expect(result.current.data).toEqual({ id: '1', name: 'bob' });
        expect(onSuccess).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
      });
    });

    describe('single errors', () => {
      it('should return an error object', async () => {
        const onSuccess = jest.fn();
        const onError = jest.fn();

        const { result, waitForNextUpdate } = renderHook(() =>
          useFetcher(`http://localhost:3000/error`, {
            onSuccess,
            onError,
            retryAttempts: 0,
          }),
        );

        expect(result.current.state).toBe('LOADING');

        await waitForNextUpdate();

        expect(result.current.state).toBe('ERROR');

        expect(result.current.error).toBeInstanceOf(Error);

        expect(onSuccess).not.toHaveBeenCalled();
        expect(onError).toHaveBeenCalled();
      });
    });

    describe('single abort', () => {
      it('should abort a single call', async () => {
        const onSuccess = jest.fn();
        const onError = jest.fn();
        const onAbort = jest.fn();

        const { result } = renderHook(() =>
          useFetcher(`http://localhost:3000/abortable`, {
            onSuccess,
            onError,
            onAbort,
          }),
        );

        expect(result.current.state).toBe('LOADING');

        await act(async () => {
          result.current.abort();
        });

        expect(result.current.state).toBe('ABORTED');

        expect(onAbort).toHaveBeenCalled();
        expect(onSuccess).not.toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
      });
    });

    describe('should reset', () => {
      it('should reset', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
          useFetcher(`http://localhost:3000/single`, { executeOnMount: false }),
        );

        await act(async () => {
          result.current.run();
        });

        await waitForNextUpdate();

        expect(result.current.state).toBe('SUCCEEDED');

        await act(async () => {
          result.current.reset();
        });

        expect(result.current.state).toBe('READY');
      });
    });

    // eslint-disable-next-line jest/no-focused-tests
    describe.only('retry', () => {
      it('should retry a failing query', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
          useFetcher(`http://localhost:3000/flaky-connection`, { executeOnMount: false }),
        );

        await act(async () => {
          result.current.run();
        });

        await waitForNextUpdate();

        expect(result.current.error).toBeUndefined();
        expect(result.current.state).toBe('SUCCEEDED');
      });
    });
  });

  describe('multi Query', () => {
    describe('multiple urls', () => {
      it('should successfully run a multi url query', async () => {
        const onQuerySuccess = jest.fn();
        const onSuccess = jest.fn();
        const onError = jest.fn();

        const { result, waitForNextUpdate } = renderHook(() =>
          useFetcher(
            [`http://localhost:3000/multi/1`, `http://localhost:3000/multi/2`, `http://localhost:3000/multi/3`],
            {
              initialState: [],
              onQuerySuccess,
              onSuccess,
              onError,
            },
          ),
        );

        expect(result.current.state).toBe('LOADING');

        await waitForNextUpdate();

        expect(result.current.state).toBe('SUCCEEDED');

        expect(onQuerySuccess).toHaveBeenCalled();
        expect(onSuccess).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
      });
    });

    describe('builder syntax', () => {
      it('should successfully run a multi query with builder syntax', async () => {
        const onQuerySuccess = jest.fn();
        const onQueryError = jest.fn();
        const onSuccess = jest.fn();
        const onError = jest.fn();

        const { result, waitForNextUpdate } = renderHook(() =>
          useFetcher(
            (fetchClient) => {
              for (const i of [...Array.from({ length: 3 }).keys()]) {
                fetchClient.addFetchRequest(`http://localhost:3000/multi/${(i + 1) * 100}`, {
                  onQuerySuccess,
                  onQueryError,
                });
              }

              return fetchClient;
            },
            {
              initialState: [],
              onQuerySuccess,
              onSuccess,
              onError,
            },
          ),
        );

        expect(result.current.state).toBe('LOADING');

        await waitForNextUpdate();

        expect(result.current.state).toBe('SUCCEEDED');

        expect(onQuerySuccess).toHaveBeenCalled();
        expect(onQueryError).not.toHaveBeenCalled();
        expect(onSuccess).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
      });
    });

    describe('multi accumulation', () => {
      it('should accumulate values with default accumulator', async () => {
        const onQuerySuccess = jest.fn();
        const onQueryError = jest.fn();
        const onSuccess = jest.fn();
        const onError = jest.fn();

        const { result, waitFor } = renderHook(() =>
          useFetcher(
            (fetchClient) => {
              fetchClient.addFetchRequest('http://localhost:3000/multiply/1/2', {
                method: 'POST',
                onQuerySuccess,
                onQueryError,
              });

              fetchClient.addFetchRequest('http://localhost:3000/multiply/2/3', {
                method: 'POST',
                onQuerySuccess,
                onQueryError,
              });

              fetchClient.addFetchRequest('http://localhost:3000/multiply/3/4', {
                method: 'POST',
                onQuerySuccess,
                onQueryError,
              });

              return fetchClient;
            },
            {
              initialState: [],
              onQuerySuccess,
              onSuccess,
              onError,
              executeOnMount: false,
            },
          ),
        );

        expect(result.current.state).toBe('READY');

        await act(async () => {
          result.current.run();
        });

        expect(result.current.state).toBe('LOADING');

        await waitFor(() => result.current.data?.length === 3, { timeout: 50000 });

        expect(result.current.state).toBe('SUCCEEDED');

        expect(onQuerySuccess).toBeCalledTimes(3);
        expect(onQueryError).not.toHaveBeenCalled();
        expect(onSuccess).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
      });

      it('should accumulate values with custom accumulator', async () => {
        const onQuerySuccess = jest.fn();
        const onQueryError = jest.fn();
        const onError = jest.fn();
        const onSuccess = jest.fn();

        const { result, waitForNextUpdate } = renderHook(() =>
          useFetcher<{ answer: number }, number>(
            ['http://localhost:3000/add/1/1', 'http://localhost:3000/add/2/2', 'http://localhost:3000/add/3/3'],
            {
              initialState: 0,
              accumulator: (acc, current) => acc + current.answer,
              onQuerySuccess,
              onSuccess,
              onError,
              executeOnMount: false,
            },
          ),
        );

        expect(result.current.state).toBe('READY');

        await act(async () => {
          result.current.run();
        });

        expect(result.current.state).toBe('LOADING');

        await waitForNextUpdate();

        expect(result.current.state).toBe('SUCCEEDED');

        expect(result.current.data).toEqual(12);
        expect(onQuerySuccess).toBeCalledTimes(3);
        expect(onQueryError).not.toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();

        expect(result.current.data).toBe(12);
      });
    });

    describe('multiple query error', () => {
      it('should stop the chain when an error occurrs', async () => {
        const onQuerySuccess = jest.fn();
        const onQueryError = jest.fn();
        const onError = jest.fn();
        const onSuccess = jest.fn();

        const { result, waitForNextUpdate } = renderHook(() =>
          useFetcher<{ answer: number }, number>(
            [
              'http://localhost:3000/single',
              'http://localhost:3000/single',
              'http://localhost:3000/error',
              'http://localhost:3000/single',
            ],
            {
              executeOnMount: false,
              initialState: 0,
              onQuerySuccess,
              onQueryError,
              onSuccess,
              onError,
              retryAttempts: 0,
            },
          ),
        );

        await act(async () => {
          result.current.run();
        });

        expect(result.current.state).toBe('LOADING');

        await waitForNextUpdate();

        expect(result.current.state).toBe('ERROR');

        expect(result.current.error).toBeInstanceOf(Error);

        expect(result.current.data).toBeUndefined();
        expect(onQuerySuccess).toHaveBeenCalled();
        expect(onSuccess).not.toBeCalled();
        expect(onError).toHaveBeenCalled();
        expect(onQueryError).toHaveBeenCalled();
      });
    });

    describe('multiple query abort', () => {
      it('should stop the chain when an error occurrs', async () => {
        const onQuerySuccess = jest.fn();
        const onQueryError = jest.fn();
        const onError = jest.fn();
        const onSuccess = jest.fn();
        const onAbort = jest.fn();

        const { result } = renderHook(() =>
          useFetcher<{ answer: number }, number>(
            [
              'http://localhost:3000/single',
              'http://localhost:3000/single',
              'http://localhost:3000/abortable',
              'http://localhost:3000/single',
            ],
            {
              executeOnMount: false,
              initialState: 0,
              onQuerySuccess,
              onQueryError,
              onSuccess,
              onError,
              onAbort,
            },
          ),
        );

        await act(async () => {
          result.current.run();
        });

        expect(result.current.state).toBe('LOADING');

        await act(async () => {
          result.current.abort();
        });

        expect(result.current.state).toBe('ABORTED');

        expect(onAbort).toHaveBeenCalled();

        expect(result.current.error).not.toBeDefined();
        expect(result.current.data).not.toBeDefined();

        expect(onQuerySuccess).not.toHaveBeenCalled();
        expect(onSuccess).not.toBeCalled();
        expect(onError).not.toHaveBeenCalled();
        expect(onQueryError).not.toHaveBeenCalled();
      });
    });
  });
});
