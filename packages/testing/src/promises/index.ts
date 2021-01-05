const scheduler = typeof setImmediate === 'function' ? setImmediate : setTimeout;

export function flushPromises(): Promise<unknown> {
  return new Promise((resolve) => {
    scheduler(resolve, 0);
  });
}
