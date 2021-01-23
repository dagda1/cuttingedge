import type { Page } from 'playwright';

export type Closeable = { close: (err?: Error) => void };

export type PlaywrightBrowser = {
  openPage: (url: string) => Promise<Page>;
  close: () => Promise<void>;
};
