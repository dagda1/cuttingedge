export class Exception extends Error {
  public name = 'HTTP_EXCEPTION';
  public message: string;
  public type = 'HTTP_EXCEPTION';
  public status: number;

  /**
   *
   * @param status
   * @param message
   */
  constructor(status: number, message?: string) {
    super(message);

    this.status = status;
    this.message = message || 'Internal Error';
  }

  toString(): string {
    return `${this.name} (${this.status}): ${this.message}`.trim();
  }
}
