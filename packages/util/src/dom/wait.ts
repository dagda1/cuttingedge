export const wait = (selector: string): Promise<HTMLElement> => {
  return new Promise<HTMLElement>((resolve, reject) => {
    const waitForEl = (selector: string, count = 0) => {
      const el = document.querySelector(selector);

      if (!!el) {
        resolve(el as HTMLElement);
      } else {
        setTimeout(() => {
          count++;

          if (count < 10) {
            waitForEl(selector, count);
          } else {
            reject(new Error('no'));
          }
        }, 100);
      }
    };

    waitForEl(selector);
  });
};
