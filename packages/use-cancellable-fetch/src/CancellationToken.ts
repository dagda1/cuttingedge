import { once } from '@cutting/util';

export class CancellationToken {
  signal: AbortSignal;
  promise: Promise<any>;
  reject!: (reason?: any) => void;

  constructor(private controller: AbortController) {
    this.signal = controller.signal;

    this.promise = new Promise<any>((resolve, reject) => {
      once(this.signal, 'abort', reject);
      this.reject = reject;
    });

    // silence unhandled rejection warnings
    this.promise.catch((v) => v);
  }
  abort(reason: any) {
    this.reject(reason);
    this.controller.abort();
  }
}
