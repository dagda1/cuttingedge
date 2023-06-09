export const wait = (selector: string, breakAt = 10, delay = 100): Promise<HTMLElement> => {
  return new Promise<HTMLElement>((resolve, reject) => {
    const wait = (count = 0) => {
      const el = document.querySelector(selector);

      if (!!el) {
        resolve(el as HTMLElement);
      } else {
        setTimeout(() => {
          if (count < breakAt) {
            wait(count + 1);
          } else {
            reject(new Error(`no element found for ${selector}`));
          }
        }, delay);
      }
    };

    wait();
  });
};
