import PlaywrightEnvironment from 'jest-playwright-preset/lib/PlaywrightEnvironment';

class PlaywrightReactEnvironment extends PlaywrightEnvironment {
  async setup(): Promise<void> {
    await super.setup();
    // Your setup
  }

  async teardown(): Promise<void> {
    // Your teardown
    await super.teardown();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async handleTestEvent(event: any): Promise<void> {
    console.dir(event, { detph: 33 });
    // if (event.name === 'test_done' && event.test.errors.length > 0) {
    //   const parentName = event.test.parent.name.replace(/\W/g, '-');
    //   const specName = event.test.name.replace(/\W/g, '-');

    //   await this.global.page.screenshot({
    //     path: `screenshots/${parentName}_${specName}.png`,
    //   });
    // }
  }
}

export default PlaywrightReactEnvironment;
