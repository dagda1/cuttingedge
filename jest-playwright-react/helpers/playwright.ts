import playwright from 'playwright';
import http from 'http';
import path from 'path';
import handler from 'serve-handler';
import { Closeable, PlaywrightBrowser } from '../types/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function createServer(options: { port: number }): Promise<Closeable> {
  const { port } = options;
  const server = http.createServer((request, response) => {
    return handler(request, response, { public: path.join(process.cwd(), './demo/public') });
  });

  function close() {
    return new Promise<void>((resolve, reject) => {
      server.close((error) => {
        if (error !== undefined) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  return new Promise((resolve) => {
    server.listen(port, () => {
      resolve({ close });
    });
  });
}

export async function createBrowser(): Promise<PlaywrightBrowser> {
  const browser = await playwright.chromium.launch();

  return {
    openPage: async (url: string) => {
      const page = await browser.newPage();
      await page.goto(url);

      return page;
    },
    close: () => browser.close(),
  };
}
