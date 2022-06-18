import { expect, it, describe, beforeEach, beforeAll, afterEach, afterAll } from 'vitest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from './react-abortable-fetch';
import { vi } from 'vitest';

let times = 1;

vi.setTimeout(30000);

const scheduler = typeof setImmediate === 'function' ? setImmediate : setTimeout;

function flushPromises(): Promise<unknown> {
  return new Promise((resolve) => {
    scheduler(resolve);
  });
}

const pause = (ms: number) => new Promise((res) => setTimeout(res, ms));

const vendors = {
  data: [
    { id: 1, name: 'bobs' },
    { id: 2, name: 'johns' },
    { id: 3, name: 'janets' },
  ],
};

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
    if (times < 5) {
      times++;
      return res(ctx.status(500, 'server error'));
    }

    return res(ctx.json({ ok: true }));
  }),

  rest.get('http://localhost:3000/long-request', async (req, res, ctx) => {
    await pause(100);

    return res(ctx.json({ ok: true }));
  }),

  rest.get('http://localhost:3000/graphql', (req, res, ctx) => {
    return res(ctx.json({ a: 3 }));
  }),

  rest.get('http://localhost:3000/vendors', (req, res, ctx) => {
    return res(ctx.json(vendors));
  }),

  rest.get('http://localhost:3000/vendors/:id/items', (req, res, ctx) => {
    const data = [
      {
        vendorId: 1,
        items: [{ id: 10, name: "Bob's item" }],
      },
      {
        vendorId: 2,
        items: [{ id: 20, name: "John's item" }],
      },
      {
        vendorId: 3,
        items: [{ id: 30, name: "Janet's item" }],
      },
    ];

    const vendorId = Number(req.params.id);

    const items = data.find((d) => d.vendorId === vendorId);
    return res(ctx.json(items));
  }),

  rest.post('http://localhost:3000/leads', (req, res, ctx) => {
    const { clientId } = req.body as { clientId?: string };

    if (clientId !== 'client') {
      return res(ctx.json({ result: 'fail' }));
    }

    return res(ctx.json({ accessToken: 'yes' }));
  }),
);

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('useFetch', () => {
  beforeAll(() => server.listen());

  beforeEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  afterEach(() => {
    times = 1;
    server.resetHandlers();
  });

  afterAll(() => server.close());

  describe('nested', () => {
    type Vendor = {
      id: number;
      name: string;
      items: { id: number; name: string }[];
    };

    it('should accumulate nested queries', async () => {
      const onSuccess = vi.fn();
      const onError = vi.fn();
      const onAbort = vi.fn();

      const { result, waitFor } = renderHook(() =>
        useFetch<Vendor[], typeof vendors>('http://localhost:3000/vendors', {
          executeOnMount: false,
          onSuccess,
          onError,
          onAbort,
          initialState: [],
          accumulator: async (acc, v, { fetcher }) => {
            for (const vendor of v.data) {
              const request = await fetcher(`http://localhost:3000/vendors/${vendor.id}/items`);

              const items = await request.json();

              acc.push({
                ...vendor,
                ...items,
              });
            }

            return acc;
          },
        }),
      );

      await act(async () => {
        result.current.run();
      });

      await waitFor(() => result.current.data?.length === 3);

      expect(result.current.data).toEqual([
        { id: 1, name: 'bobs', vendorId: 1, items: [{ id: 10, name: "Bob's item" }] },
        { id: 2, name: 'johns', vendorId: 2, items: [{ id: 20, name: "John's item" }] },
        { id: 3, name: 'janets', vendorId: 3, items: [{ id: 30, name: "Janet's item" }] },
      ]);

      expect(onSuccess).toHaveBeenCalled();
      expect(onError).not.toHaveBeenCalled();
      expect(result.current.state).toBe('succeeded');
      expect(onAbort).not.toHaveBeenCalled();
    });
  });

  describe.skip('single query', () => {
    it('should successfully run a single query', async () => {
      const { result, waitFor } = renderHook(() => useFetch(`http://localhost:3000/single`));

      await waitFor(() => result.current.state === 'succeeded' && typeof result.current.data !== 'undefined');

      expect(result.current.state).toBe('succeeded');
      expect(result.current.data).toEqual({ greeting: 'hello there' });
    });

    it('should only call handlers once', async () => {
      const onQuerySuccess = vi.fn();
      const onSuccess = vi.fn();
      const onError = vi.fn();
      const onAbort = vi.fn();

      const { result, waitFor } = renderHook(() =>
        useFetch(`http://localhost:3000/single`, {
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
      expect(result.current.state).toBe('succeeded');
      expect(result.current.data).toEqual({ greeting: 'hello there' });
      expect(onAbort).not.toHaveBeenCalled();
    });

    it('should successfully run a single query on demand', async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useFetch(`http://localhost:3000/single`, { executeOnMount: false }),
      );

      expect(result.current.state).toBe('ready');

      await act(async () => {
        result.current.run();
      });

      await waitForNextUpdate();

      expect(result.current.state).toBe('succeeded');
      expect(result.current.data).toEqual({ greeting: 'hello there' });
    });

    describe('single accumulation', () => {
      it('should accumulate a single value with default accumulator', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch(`http://localhost:3000/singles/1`));

        await waitForNextUpdate();

        expect(result.current.data).toEqual({ id: '1' });
      });

      it('should have simple post api', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
          useFetch({
            url: `http://localhost:3000/multiply/7/6`,
            method: 'POST',
          }),
        );
        await waitForNextUpdate();

        expect(result.current.data).toEqual({ answer: 42 });
      });

      it('should transform a value', async () => {
        const onSuccess = vi.fn();
        const onError = vi.fn();

        const { result, waitForNextUpdate } = renderHook(() =>
          useFetch<{ id?: string; name: string }, { id: string }>(`http://localhost:3000/singles/1`, {
            accumulator: (acc, curr) => ({ ...acc, ...curr }),
            initialState: { name: 'bob' },
            onSuccess,
            onError,
          }),
        );

        expect(result.current.state).toBe('loading');

        await waitForNextUpdate();

        expect(result.current.state).toBe('succeeded');

        expect(result.current.data).toEqual({ id: '1', name: 'bob' });
        expect(onSuccess).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
      });
    });

    describe('single errors', () => {
      it('should return an error object', async () => {
        const onSuccess = vi.fn();
        const onError = vi.fn();

        const { result, waitForNextUpdate } = renderHook(() =>
          useFetch(`http://localhost:3000/error`, {
            onSuccess,
            onError,
            retryAttempts: 0,
          }),
        );

        expect(result.current.state).toBe('loading');

        await waitForNextUpdate();

        expect(result.current.state).toBe('error');

        expect(result.current.error).toBeInstanceOf(Error);

        expect(onSuccess).not.toHaveBeenCalled();
        expect(onError).toHaveBeenCalled();
      });
    });

    describe.skip('single abort', () => {
      it('should abort a single call', async () => {
        const onSuccess = vi.fn();
        const onError = vi.fn();
        const onAbort = vi.fn();

        const { result } = renderHook(() =>
          useFetch(`http://localhost:3000/abortable`, {
            onSuccess,
            onError,
            onAbort,
          }),
        );

        expect(result.current.state).toBe('loading');

        await act(async () => {
          result.current.abort();
        });

        expect(result.current.state).toBe('aborted');

        expect(onAbort).toHaveBeenCalled();
        expect(onSuccess).not.toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
      });
    });

    describe.skip('should reset', () => {
      it('should reset', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
          useFetch(`http://localhost:3000/single`, { executeOnMount: false, initialState: 42 }),
        );

        await act(async () => {
          result.current.run();
        });

        await waitForNextUpdate();

        expect(result.current.state).toBe('succeeded');

        await act(async () => {
          result.current.reset();
        });

        expect(result.current.state).toBe('ready');
      });
    });

    describe.skip('retry', () => {
      it('should retry a failing query', async () => {
        const onSuccess = vi.fn();
        const onError = vi.fn();
        const onAbort = vi.fn();
        const onQueryError = vi.fn();
        const onQuerySuccess = vi.fn();
        const { result, waitForNextUpdate } = renderHook(() =>
          useFetch(`http://localhost:3000/flaky-connection`, {
            executeOnMount: false,
            retryAttempts: 5,
            retryDelay: 50,
            onSuccess,
            onError,
            onAbort,
            onQueryError,
            onQuerySuccess,
          }),
        );

        await act(async () => {
          result.current.run();
        });

        await waitForNextUpdate();

        expect(result.current.error).toBeUndefined();
        expect(result.current.state).toBe('succeeded');
      });
    });

    describe.skip('timeout', () => {
      it('should should abort if request times out', async () => {
        const onSuccess = vi.fn();
        const onError = vi.fn();
        const onAbort = vi.fn();
        vi.useFakeTimers();
        const { result } = renderHook(() =>
          useFetch(`http://localhost:3000/long-request`, {
            executeOnMount: false,
            retryAttempts: 0,
            timeout: 500,
            onSuccess,
            onError,
            onAbort,
          }),
        );

        await act(async () => {
          result.current.run();
          vi.runOnlyPendingTimers();
        });

        await flushPromises();

        expect(result.current.state).toBe('aborted');

        expect(onAbort).toHaveBeenCalled();
        expect(onSuccess).not.toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
      });

      it('should complete if request completes before timeout', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
          useFetch(`http://localhost:3000/long-request`, {
            executeOnMount: false,
            retryAttempts: 0,
            timeout: 300,
          }),
        );

        await act(async () => {
          result.current.run();
        });

        await waitForNextUpdate();

        expect(result.current.state).toBe('succeeded');
      });
    });
  });

  describe('multi Query', () => {
    describe('multiple urls', () => {
      it('should successfully run a multi url query', async () => {
        const onQuerySuccess = vi.fn();
        const onSuccess = vi.fn();
        const onError = vi.fn();

        const { result, waitForNextUpdate } = renderHook(() =>
          useFetch(
            [`http://localhost:3000/multi/1`, `http://localhost:3000/multi/2`, `http://localhost:3000/multi/3`],
            {
              initialState: [],
              onQuerySuccess,
              onSuccess,
              onError,
            },
          ),
        );

        expect(result.current.state).toBe('loading');

        await waitForNextUpdate();

        expect(result.current.state).toBe('succeeded');

        expect(onQuerySuccess).toHaveBeenCalled();
        expect(onSuccess).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
      });
    });

    it('should successfully run a multi FetchRequestInfo query', async () => {
      const onQuerySuccess = vi.fn();
      const onSuccess = vi.fn();
      const onError = vi.fn();

      const { result, waitForNextUpdate } = renderHook(() =>
        useFetch(
          [
            { url: `http://localhost:3000/multiply/1/1`, method: 'POST' },
            { url: `http://localhost:3000/multiply/2/2`, method: 'POST' },
            { url: `http://localhost:3000/multiply/3/3`, method: 'POST' },
          ],
          {
            initialState: [],
            onQuerySuccess,
            onSuccess,
            onError,
          },
        ),
      );

      expect(result.current.state).toBe('loading');

      await waitForNextUpdate();

      expect(result.current.state).toBe('succeeded');

      expect(onQuerySuccess).toHaveBeenCalled();
      expect(onSuccess).toHaveBeenCalled();
      expect(onError).not.toHaveBeenCalled();
      expect(result.current.data).toEqual([{ answer: 1 }, { answer: 4 }, { answer: 9 }]);
    });

    describe('builder syntax', () => {
      it('should successfully run a multi query with builder syntax', async () => {
        const onQuerySuccess = vi.fn();
        const onQueryError = vi.fn();
        const onSuccess = vi.fn();
        const onError = vi.fn();

        const { result, waitForNextUpdate } = renderHook(() =>
          useFetch(
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

        expect(result.current.state).toBe('loading');

        await waitForNextUpdate();

        expect(result.current.state).toBe('succeeded');

        expect(onQuerySuccess).toHaveBeenCalled();
        expect(onQueryError).not.toHaveBeenCalled();
        expect(onSuccess).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
      });
    });

    describe('multi accumulation', () => {
      it('should accumulate values with default accumulator', async () => {
        const onQuerySuccess = vi.fn();
        const onQueryError = vi.fn();
        const onSuccess = vi.fn();
        const onError = vi.fn();

        const { result, waitFor } = renderHook(() =>
          useFetch(
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
              initialState: [] as { answer: number }[],
              onQuerySuccess,
              onSuccess,
              onError,
              executeOnMount: false,
            },
          ),
        );

        expect(result.current.state).toBe('ready');

        await act(async () => {
          result.current.run();
        });

        expect(result.current.state).toBe('loading');

        await waitFor(() => result.current.data?.length === 3, { timeout: 50000 });

        expect(result.current.state).toBe('succeeded');

        expect(onQuerySuccess).toHaveBeenCalledTimes(3);
        expect(onQueryError).not.toHaveBeenCalled();
        expect(onSuccess).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
      });

      it('should accumulate values with custom accumulator', async () => {
        const onQuerySuccess = vi.fn();
        const onQueryError = vi.fn();
        const onError = vi.fn();
        const onSuccess = vi.fn();

        const { result, waitForNextUpdate } = renderHook(() =>
          useFetch<number, { answer: number }>(
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

        expect(result.current.state).toBe('ready');

        await act(async () => {
          result.current.run();
        });

        expect(result.current.state).toBe('loading');

        await waitForNextUpdate();

        expect(result.current.state).toBe('succeeded');

        expect(result.current.data).toEqual(12);
        expect(onQuerySuccess).toHaveBeenCalledTimes(3);
        expect(onQueryError).not.toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();

        expect(result.current.data).toBe(12);
      });
    });

    describe('multiple query error', () => {
      it('should stop the chain when an error occurrs', async () => {
        const onQuerySuccess = vi.fn();
        const onQueryError = vi.fn();
        const onError = vi.fn();
        const onSuccess = vi.fn();

        const { result, waitForNextUpdate } = renderHook(() =>
          useFetch<number, { answer: number }>(
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

        expect(result.current.state).toBe('loading');

        await waitForNextUpdate();

        expect(result.current.state).toBe('error');

        expect(result.current.error).toBeInstanceOf(Error);

        expect(result.current.data).toBeUndefined();
        expect(onQuerySuccess).toHaveBeenCalled();
        expect(onSuccess).not.toHaveBeenCalled();
        expect(onError).toHaveBeenCalled();
        expect(onQueryError).toHaveBeenCalled();
      });
    });

    describe.skip('multiple query abort', () => {
      it('should stop the chain when an error occurrs', async () => {
        const onQuerySuccess = vi.fn();
        const onQueryError = vi.fn();
        const onError = vi.fn();
        const onSuccess = vi.fn();
        const onAbort = vi.fn();

        const { result } = renderHook(() =>
          useFetch<number, { answer: number }>(
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

        expect(result.current.state).toBe('loading');

        await act(async () => {
          result.current.abort();
        });

        expect(result.current.state).toBe('aborted');

        expect(onAbort).toHaveBeenCalled();

        expect(result.current.error).not.toBeDefined();
        expect(result.current.data).not.toBeDefined();

        expect(onQuerySuccess).not.toHaveBeenCalled();
        expect(onSuccess).not.toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
        expect(onQueryError).not.toHaveBeenCalled();
      });
    });
  });

  describe.skip('multi timeout timeout', () => {
    it('should should abort if request times out', async () => {
      const onSuccess = vi.fn();
      const onError = vi.fn();
      const onAbort = vi.fn();
      const onQuerySuccess = vi.fn();

      vi.useFakeTimers();
      const { result, waitForNextUpdate } = renderHook(() =>
        useFetch([`http://localhost:3000/single`, `http://localhost:3000/long-request`], {
          executeOnMount: false,
          retryAttempts: 0,
          timeout: 150,
          onQuerySuccess,
          onSuccess,
          onError,
          onAbort,
        }),
      );

      await act(async () => {
        result.current.run();
        await flushPromises();
      });

      await act(async () => {
        vi.advanceTimersByTime(210);
        await waitForNextUpdate();
      });

      expect(result.current.state).toBe('aborted');

      expect(onAbort).toHaveBeenCalled();
      expect(onSuccess).not.toHaveBeenCalled();
      expect(onError).not.toHaveBeenCalled();
    });

    it('should should complete if request completes before timeout', async () => {
      const onSuccess = vi.fn();
      const onError = vi.fn();
      const onAbort = vi.fn();
      const onQuerySuccess = vi.fn();

      const { result, waitForNextUpdate } = renderHook(() =>
        useFetch(['http://localhost:3000/single', 'http://localhost:3000/long-request'], {
          executeOnMount: false,
          retryAttempts: 0,
          onQuerySuccess,
          onSuccess,
          onError,
          onAbort,
          timeout: 300,
        }),
      );

      await act(async () => {
        result.current.run();
      });

      await waitForNextUpdate();

      expect(result.current.state).toBe('succeeded');

      expect(onQuerySuccess).toHaveBeenCalled();
      expect(onAbort).not.toHaveBeenCalled();
      expect(onSuccess).toHaveBeenCalled();
      expect(onError).not.toHaveBeenCalled();
    });
  });

  describe('run with arguments', () => {
    it('should pass arguments to single run', async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useFetch({ url: `http://localhost:3000/leads`, method: 'POST' }, { executeOnMount: false }),
      );

      expect(result.current.state).toBe('ready');

      act(() => {
        result.current.run({ clientId: 'client' });
      });

      expect(result.current.state).toBe('loading');

      await waitForNextUpdate();

      console.log(result.current.error);

      expect(result.current.state).toBe('succeeded');
      expect(result.current.data).toEqual({ accessToken: 'yes' });
    });
  });
});
