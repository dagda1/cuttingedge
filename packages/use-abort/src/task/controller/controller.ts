export interface Controller<R> extends PromiseLike<R> {
  halt(): void;
}
