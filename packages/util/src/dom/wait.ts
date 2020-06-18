export const wait = (selector: string) => {
  return new Promise<HTMLElement>((resolve, reject) => {
    const waitForEl = (selector: string, count = 0) => {
      const el = document.querySelector(selector) as HTMLElement;

      if (!!el) {
        resolve(el);
      } else {
        setTimeout(() => {
          count++;

          if (count < 10) {
            waitForEl(selector, count);
          } else {
            reject();
          }
        }, 100);
      }
    };

    waitForEl(selector);
  });
};
