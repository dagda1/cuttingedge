import { useMultiQuery } from './useMultiQuery';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { renderHook, act } from '@testing-library/react-hooks';

const server = setupServer(
  rest.get('http://localhst:3000/single', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'hello there' }));
  }),
);

describe('useMultiQuery', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  describe('single query', () => {
    it('should successfully run a single query', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useMultiQuery(`http://localhst:3000/single`));

      expect(result.current.state).toBe('LOADING');

      await waitForNextUpdate();

      expect(result.current.state).toBe('SUCCEEDED');
      expect(result.current.data).toEqual({ greeting: 'hello there' });
    });

    it('should successfully run a single query on demand', async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useMultiQuery(`http://localhst:3000/single`, { executeOnload: false }),
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
  });
});
