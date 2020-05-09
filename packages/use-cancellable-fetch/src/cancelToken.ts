export interface Canceler {
  (message?: string): void;
}

export interface CancelExecutor {
  (cancel: Canceler): void;
}

interface ResolvePromise {
  (reason?: Cancel): void;
}

export class Cancel {
  message?: string;

  constructor(message?: string) {
    this.message = message;
  }
}

export interface CancelTokenSource {
  token: CancelToken;
  cancel: Canceler;
}

export function isCancel(value: any): boolean {
  return value instanceof Cancel;
}

export class CancelToken {
  promise: Promise<Cancel>;
  reason?: Cancel;

  constructor(executor: CancelExecutor) {
    let resolvePromise: ResolvePromise;

    this.promise = new Promise<Cancel>((resolve) => {
      resolvePromise = resolve;
    });

    executor((message) => {
      if (this.reason) {
        return;
      }
      this.reason = new Cancel(message);
      resolvePromise(this.reason);
    });
  }

  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  static source(): CancelTokenSource {
    let cancel!: Canceler;
    const token = new CancelToken((c) => {
      cancel = c;
    });
    return {
      cancel,
      token,
    };
  }
}
