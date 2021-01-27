import { BrowserType, GenericBrowser, JestPlaywrightConfig, WsEndpointType } from 'jest-playwright-preset';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import PlaywrightRunner from 'jest-playwright-preset/lib/PlaywrightRunner';

export default class PlaywrightReactRunner extends PlaywrightRunner {
  async launchServer(
    config: JestPlaywrightConfig,
    wsEndpoint: WsEndpointType,
    browser: BrowserType,
    instance: GenericBrowser,
  ): Promise<WsEndpointType> {
    return super.launchServer(config, wsEndpoint, browser, instance);
  }
}
