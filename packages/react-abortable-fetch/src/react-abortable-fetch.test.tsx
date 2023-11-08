import { HttpResponse, delay, http } from 'msw';
import { expect, it, describe, beforeEach, beforeAll, afterEach, afterAll, vi } from 'vitest';
import { setupServer } from 'msw/node';
import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from './react-abortable-fetch';

let times = 1;

console.log(globalThis.fetch);

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
  http.get('http://localhost:3000/multi/:id', ({ params }) => {
    const id = params.id;
    return HttpResponse.json({ id });
  }),

  http.get('http://localhost:3000/single', () => {
    HttpResponse.json({ greeting: 'hello there' });
  }),

  http.get('http://localhost:3000/singles/:id', ({ params }) => {
    const id = params.id;

    return HttpResponse.json({ id });
  }),

  http.post('http://localhost:3000/multiply/:left/:right', ({ params }) => {
    const answer = Number(params.left) * Number(params.right);

    return HttpResponse.json({ answer });
  }),

  http.get('http://localhost:3000/add/:left/:right', ({ params }) => {
    const answer = Number(params.left) + Number(params.right);

    return HttpResponse.json({ answer });
  }),

  http.get('http://localhost:3000/error', () => {
    return new HttpResponse(null, { status: 500, statusText: 'server error' });
  }),

  http.get('http://localhost:3000/abortable', async () => {
    delay('infinite');
  }),

  http.get('http://localhost:3000/flaky-connection', () => {
    if (times < 5) {
      times++;
      return new HttpResponse(null, { status: 500, statusText: 'server error' });
    }

    return HttpResponse.json({ ok: true });
  }),

  http.get('http://localhost:3000/long-request', async () => {
    await pause(100);

    return HttpResponse.json({ ok: true });
  }),

  http.get('http://localhost:3000/graphql', () => {
    return HttpResponse.json({ a: 3 });
  }),

  http.get('http://localhost:3000/vendors', () => {
    return HttpResponse.json(vendors);
  }),

  http.get('http://localhost:3000/vendors/:id/items', ({ params }) => {
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

    const vendorId = Number(params.id);

    const items = data.find((d) => d.vendorId === vendorId);
    return HttpResponse.json(items);
  }),

  http.post('http://localhost:3000/leads', ({ request }) => {
    const { clientId } = request.json() as { clientId?: string };

    if (clientId !== 'client') {
      return HttpResponse.error();
    }

    return HttpResponse.json({ accessToken: 'yes' });
  }),
);

describe('useFetch', () => {
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

  beforeEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  afterEach(() => {
    times = 1;
    server.resetHandlers();
  });

  afterAll(() => server.close());

  describe('single query', () => {
    it('should successfully run a single query', async () => {
      const { result, waitFor } = renderHook(() => useFetch(`http://localhost:3000/single`));

      await waitFor(() => result.current.state === 'succeeded' && typeof result.current.data !== 'undefined');

      expect(result.current.state).toBe('succeeded');
      expect(result.current.data).toEqual({ greeting: 'hello there' });
    });

    it.skip('should only call handlers once', async () => {
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

    it.skip('should successfully run a single query on demand', async () => {
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

    describe.skip('single accumulation', () => {
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

    describe.skip('single errors', () => {
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

  describe.skip('nested', () => {
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

  describe.skip('multi Query', () => {
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

  describe.skip('run with arguments', () => {
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
