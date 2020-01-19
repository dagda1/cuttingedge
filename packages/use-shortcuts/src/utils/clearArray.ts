export const clearArray = <T>(a: T[]): void => {
  if (!a) {
    return;
  }

  while (a.length) {
    a.pop();
  }
};
