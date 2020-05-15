import { once } from '@cutting/util';

export class CancellationToken {
  signal: AbortSignal;
  promise: Promise<any>;

  constructor(controller: AbortController) {
    this.signal = controller.signal;

    this.promise = new Promise<any>((_, reject) => {
      const abort = (e: any) => {
        console.log(e);

        reject(e);
      };
      once(this.signal, 'abort', abort);
    });

    // silence unhandled rejection warnings
    this.promise.catch((v) => v);
  }
}
