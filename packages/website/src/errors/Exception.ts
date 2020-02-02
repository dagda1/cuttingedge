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
  constructor(status: any, message?: string, innerException?: any) {
    super(message);

    this.status = status;
    this.message = message || 'Internal Error';
  }

  toString() {
    return `${this.name} (${this.status}): ${this.message}`.trim();
  }
}
