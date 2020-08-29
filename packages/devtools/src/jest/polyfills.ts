const root = typeof window === 'undefined' ? global : window;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(root as any).scrollTo = () => ({});
