// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Plugin = { apply: (arg0: any) => void } | ((this: any, arg1: any) => void);

export const isPlugin = (a: unknown): a is Plugin => typeof a === 'object';
