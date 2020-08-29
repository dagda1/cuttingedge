export const isNumber = (n: unknown): n is number => /^\d+$/g.test(n as string);
