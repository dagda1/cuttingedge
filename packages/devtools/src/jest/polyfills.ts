const root = typeof window === 'undefined' ? global : window;

root.scrollTo = () => ({});
