export const origin = (): string =>
  `${location.protocol}//${location.hostname}${window.location.port ? ':' + window.location.port : ''}`;
