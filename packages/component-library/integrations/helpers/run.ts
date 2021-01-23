import playwright from 'playwright';
import http from 'http';
import path from 'path';
import handler from 'serve-handler';

const PORT = 1122;

type Close = { close: (err?: Error) => void };

function createServer(options: { port: number }): Promise<Close> {
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

async function createBrowser() {
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

export async function run(): Promise<void> {
  const [server, browser] = await Promise.all([createServer({ port: PORT }), createBrowser()]);
  try {
  } finally {
    await Promise.all([browser.close(), server.close()]);
  }
}

run().catch((error) => {
  console.error('test: ', error);
  process.exit(1);
});
