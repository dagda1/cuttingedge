import ResizeObserver from 'resize-observer-polyfill';

jest.mock('resize-observer-polyfill');

export const resize = (width: number, height: number): void => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ResizeObserver.mockImplementation((cb) => {
    cb([{ contentRect: { width, height } }]);
    return { observe: jest.fn(), disconnect: jest.fn(), unobserve: jest.fn() };
  });
};
