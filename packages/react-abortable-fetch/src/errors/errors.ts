export class NetworkError extends Error {
  public constructor(message = '') {
    super(message);
  }
}

export class ParserError extends Error {
  public constructor(message = '') {
    super(message);
  }
}

export class ResponseError<E = never> extends Error {
  public readonly body: E | null;

  public readonly bodyParseError: ParserError | null;

  public readonly status: number;

  public constructor(message = '', status: number, body: E | null, parserError?: ParserError) {
    super(message);

    this.status = status;

    this.body = body;

    this.bodyParseError = parserError ?? null;
  }
}

export type FetchError<E = never> = NetworkError | ParserError | ResponseError<E>;
