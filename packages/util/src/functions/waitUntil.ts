type Predicate = () => boolean;

export function waitUntil(conditionFunction: Predicate, interval = 100): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const intervalId = setInterval(async () => {
      try {
        if (await conditionFunction()) {
          clearInterval(intervalId);
          resolve();
        }
      } catch (error) {
        clearInterval(intervalId);
        reject(error);
      }
    }, interval);
  });
}
