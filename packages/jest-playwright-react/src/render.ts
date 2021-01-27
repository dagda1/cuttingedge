/* eslint-disable @typescript-eslint/no-unused-vars */
import type { JestPlaywrightConfig } from 'jest-playwright-preset';
import { host, port } from './constants';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('jest-playwright-react');

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function render(_, options: JestPlaywrightConfig) {
  debug('-------------------');
  debug('in node render');
  debug('-------------------');
  const { currentTestName } = expect.getState();
  debug(`rendering for testname ${currentTestName}`);

  const url = `http://${host}:${port}?test=${encodeURIComponent(currentTestName)}`;

  page.on('console', (msg) => {
    console.log(`event "console" from "${currentTestName}"`);

    // const msgType = msg.type();
    // const msgText = msg.text();
    // const consoleLogType =
    //   msgType === 'warning'
    //     ? 'warn'
    //     : ['error', 'log', 'debug', 'dir', 'info', 'trace'].includes(msgType)
    //     ? msgType
    //     : 'log';
    // // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // (console as any)[consoleLogType](msgText);
  });

  page.on('pageerror', (msg) => {
    console.error(`event "pageerror" from "${currentTestName}"`, msg);
  });

  await page.setViewportSize({ width: 800, height: 600 });

  debug(`page.goto ${url}`);
  await page.goto(url);

  return page;
}
