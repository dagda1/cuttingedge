import playwright from 'playwright';
import fs from 'fs-extra';
import http from 'http';
import path from 'path';
import type { Express } from 'express';
import express from 'express';
import { AddressInfo } from 'net';

const port = 3090;
const host = '0.0.0.0';

type CloseServer = { close: (err?: Error) => void };

function startServer(app: Express): Promise<CloseServer> {
  const server = http.createServer(app);

  function close() {
    // eslint-disable-next-line no-console
    console.info('http: server is stopping');

    return new Promise<void>((resolve, reject) => {
      server.close((error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  return new Promise<CloseServer>((resolve, reject) => {
    server.once('error', reject);

    server.listen(port, host, () => {
      const addressInfo = server.address() as AddressInfo;
      console.info(`http: ready on http://${addressInfo.address}:${addressInfo.port}`);

      resolve({ close });
    });
  });
}

async function createApp() {
  const app = express();
  const rootPath = path.join(__dirname, '../../../../');
  const umdPath = '/umd.js';

  let index = await fs.readFile(path.join(rootPath, 'examples/cdn/index.html'), 'utf8');
  index = index.replace('https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js', umdPath);
  index = index.replace(
    'function App() {',
    `
const {
  Button,
  Dialog,
} = MaterialUI;

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Super Secret Password</Button>
      <Dialog open={open}>
        1-2-3-4-5
      </Dialog>
    </React.Fragment>
  );
     `,
  );
  app.get('/', (req, res) => {
    res.send(index);
  });

  const umd = await fs.readFile(
    path.join(rootPath, 'packages/material-ui/build/umd/material-ui.development.js'),
    'utf8',
  );
  app.get(umdPath, (req, res) => {
    res.send(umd);
  });

  return app;
}

async function startBrowser() {
  // eslint-disable-next-line no-console
  console.info('browser: start');
  const browser = await playwright.chromium.launch({
    args: [
      '--single-process', // Solve mono-thread issue on CircleCI
      // https://github.com/GoogleChrome/puppeteer/blob/5d6535ca0c82efe2ca50450818d5fb20aa015658/docs/troubleshooting.md#setting-up-chrome-linux-sandbox
      '--no-sandbox', // Solve user security sandboxing issue.
      // '--disable-web-security', // Solve weird crossorigin anonymous issue on CircleCI
    ],
  });
  const page = await browser.newPage();
  page.on('pageerror', (err) => {
    throw err;
  });

  function close() {
    // eslint-disable-next-line no-console
    console.info('browser:server is stopping');
    return browser.close();
  }

  return { page, close };
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const close = { close() {} };

async function run() {
  let server: typeof close | CloseServer = close;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  let closeBrowser = () => {};
  try {
    const app = await createApp();
    server = await startServer(app);

    const { page, close } = await startBrowser();
    closeBrowser = close;

    await page.goto(`http://${host}:${port}`);
    const button = await page.$('button');
    expect(await button.textContent()).toBe('Super Secret Password');
    await button.click();
    expect(await page.textContent('body')).toContain('1-2-3-4-5');
  } finally {
    await Promise.all([closeBrowser(), server.close()]);
  }
}

run().catch((error) => {
  console.error('test: ', error);
  process.exit(1);
});
