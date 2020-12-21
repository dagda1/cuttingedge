import { once } from '@cutting/util';

export class CancellationToken<T> {
  signal: AbortSignal;
  promise: Promise<T>;

  constructor(controller: AbortController) {
    this.signal = controller.signal;

    this.promise = new Promise<T>((_, reject) => {
      once(this.signal, 'abort', reject);
    });

    // silence unhandled rejection warnings
    this.promise.catch((v) => v);
  }
}
