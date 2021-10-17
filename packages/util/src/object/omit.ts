// eslint-disable-next-line @typescript-eslint/ban-types
export const omit = <O extends object, K extends (keyof O)[]>(
  obj: O,
  ...keys: K[]
): Pick<O, Exclude<keyof O, K[number]>> =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k as any))) as Pick<
    O,
    Exclude<keyof O, K[number]>
  >;
