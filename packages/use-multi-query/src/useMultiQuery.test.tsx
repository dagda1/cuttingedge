import { useMultiQuery } from './useMultiQuery';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { renderHook, act } from '@testing-library/react-hooks';

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
);

describe('useMultiQuery', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  describe('single query', () => {
    it('should successfully run a single query', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useMultiQuery(`http://localhost:3000/single`));

      expect(result.current.state).toBe('LOADING');

      await waitForNextUpdate();

      expect(result.current.state).toBe('SUCCEEDED');
      expect(result.current.data).toEqual({ greeting: 'hello there' });
    });

    it('should successfully run a single query on demand', async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useMultiQuery(`http://localhost:3000/single`, { executeOnload: false }),
      );

      expect(result.current.state).toBe('IDLE');

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
        const { result, waitForNextUpdate } = renderHook(() => useMultiQuery(`http://localhost:3000/singles/1`));

        await waitForNextUpdate();

        expect(result.current.data).toEqual({ id: '1' });
      });

      it('should transform a value', async () => {
        const onSuccess = jest.fn();
        const onError = jest.fn();

        const { result, waitForNextUpdate } = renderHook(() =>
          useMultiQuery<{ id: string }, { id?: string; name: string }>(`http://localhost:3000/singles/1`, {
            accumulator: (acc, curr) => ({ ...acc, ...curr }),
            initialData: { name: 'bob' },
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
  });

  describe('multi Query', () => {
    describe('multiple urls', () => {
      it('should successfully run a multi url query', async () => {
        const onQuerySuccess = jest.fn();
        const onSuccess = jest.fn();
        const onError = jest.fn();

        const { result, waitForNextUpdate } = renderHook(() =>
          useMultiQuery(
            [`http://localhost:3000/multi/1`, `http://localhost:3000/multi/2`, `http://localhost:3000/multi/3`],
            {
              initialData: [],
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
          useMultiQuery(
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
              initialData: [],
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

    // eslint-disable-next-line jest/no-focused-tests
    describe.only('multi accumulation', () => {
      it('should accumulate values with default accumulator', async () => {
        const onQuerySuccess = jest.fn();
        const onQueryError = jest.fn();
        const onSuccess = jest.fn();
        const onError = jest.fn();

        const { result, waitForNextUpdate } = renderHook(() =>
          useMultiQuery(
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
              initialData: [],
              onQuerySuccess,
              onSuccess,
              onError,
            },
          ),
        );

        expect(result.current.state).toBe('LOADING');

        await waitForNextUpdate();

        expect(result.current.state).toBe('SUCCEEDED');

        console.dir(result.current.data);

        expect(onQuerySuccess).toBeCalledTimes(3);
        expect(onQueryError).not.toHaveBeenCalled();
        expect(onSuccess).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();

        expect(result.current.data).toEqual([{ answer: 2 }, { answer: 6 }, { answer: 12 }]);
      });
    });
  });
});
