export const flushPromises = (): Promise<void> => new Promise(setImmediate);
