import { BrowserType, GenericBrowser, JestPlaywrightConfig, WsEndpointType } from 'jest-playwright-preset';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { PlaywrightRunner } from 'jest-playwright-preset/lib/PlaywrightRunner';

export class PlaywrightReactRunner extends PlaywrightRunner {
  async launchServer(
    config: JestPlaywrightConfig,
    wsEndpoint: WsEndpointType,
    browser: BrowserType,
    instance: GenericBrowser,
  ): Promise<WsEndpointType> {
    console.dir(config);
    console.dir(wsEndpoint);
    console.dir(instance);

    return super.launchServer(config, wsEndpoint, browser, instance);
  }
}
