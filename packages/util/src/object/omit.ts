export const omit = <O, K extends keyof O>(obj: O, ...keys: K[]): Omit<O, K> =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k as K))) as unknown as Omit<O, K>;
