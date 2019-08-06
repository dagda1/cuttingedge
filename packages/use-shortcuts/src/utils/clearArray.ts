export const clearArray = <T>(a: T[]) => {
  if (!a) {
    return;
  }

  while (a.length) {
    a.pop();
  }
};
