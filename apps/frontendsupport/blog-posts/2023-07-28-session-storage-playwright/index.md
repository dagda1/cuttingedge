---
meta:
  title: Store authentication state across Playwright tests in applications that use sessionStorage
  description: I found the Playwright docs helpful but confusing about how to store authentication state across tests if your application stores tokens in sessionStorage.
  date: "2023-07-31T00:00:00.000Z"
  image: "https://res.cloudinary.com/ddospxsc8/image/upload/v1690741574/playwright_iofvmm.png"
  tags: ["playwright", "testing"]
---

[Playwright](https://playwright.dev/) is my choice for end-to-end (e2e) testing. A common problem in any end-to-end testing framework is authenticating or logging in a user before each test. However, Playwright has a great solution by giving an API to store the authenticated browser state in the page context's [storageState](https://playwright.dev/docs/api/class-apirequestcontext#api-request-context-storage-state). The `storageState` contains a snapshot of the current cookies and localStorage.

If this authenticated browser state, e.g. an authentication token, is stored in localStorage or cookies, then Playright [has you covered](https://playwright.dev/docs/auth#core-concepts).

If, however, you use `sessionStorage`, then unfortunately, this is not covered. The [docs](https://playwright.dev/docs/auth#session-storage) say that using sessionStoarge to store authentication tokens is rare, which differs from my experience.

The docs do, though, give a [code snippet](https://playwright.dev/docs/auth#session-storage)(below) that took me a while to understand, and it is really two snippets, one for persisting the sessionStorage and one for rehydrating the sessionStorage before each test.

```ts
// Get session storage and store as env variable
const sessionStorage = await page.evaluate(() =>
  JSON.stringify(sessionStorage)
);
fs.writeFileSync(
  "playwright/.auth/session.json",
  JSON.stringify(sessionStorage),
  "utf-8"
);

// Set session storage in a new context
const sessionStorage = JSON.parse(
  fs.readFileSync("playwright/.auth/session.json", "utf-8")
);
await context.addInitScript((storage) => {
  if (window.location.hostname === "example.com") {
    for (const [key, value] of object.entries(storage))
      window.sessionStorage.setItem(key, value);
  }
}, sessionStorage);
```

I will give step-by-step instructions that remove the confusion and ambiguity.

## Project references

The first step in persisting authentication state across tests is to create a test that logs the user in and uses [Playright project dependencies](https://playwright.dev/docs/next/test-projects#dependencies) to ensure that the login test runs before any other.

Project dependencies are a list of projects that need to run before the tests in another project run.

```ts:./playwright.config.ts
projects: [
  {
    name: 'setup',
    testMatch: '**/*.setup.ts',
  },
  {
    name: 'e2e tests logged in',
    testMatch: '**/*.spec.ts',
    dependencies: ['setup'],
  },
],
```

With this configuration, any tests that match the `'**/*.setup.ts'` glob will run before any tests that match the `'**/*.spec.ts'` glob.

## Store authentication state in sessionStorage

Below is the test file, `login.setup.ts`, that logs the user in:

```ts {1,4,14-19} showLineNumbers
import { test as setup, expect } from "@playwright/test";
import fs from "fs";

const STORAGE_STATE = path.join(__dirname, "playwright/.auth/auth.json");

setup("authenticate", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("textbox", { name: "SOEID" }).fill("test");
  await page.getByRole("textbox", { name: "Password" }).fill("test");
  await page.keyboard.press("Enter");

  await expect(page.locator('[href*="/parodos"]')).toBeVisible();

  const sessionStorage = await page.evaluate(() =>
    JSON.stringify(sessionStorage)
  );

  fs.writeFileSync(STORAGE_STATE, JSON.stringify(sessionStorage), "utf-8");
});
```

I've aliased the Playwright `test` object to `setup` to make it clear that this test is different from the rest:

```ts
import { test as setup, expect } from "@playwright/test";
```

The first task in persisting the sessionStorage is to persist a snapshot of the current sessionStorage to a file at the following location:

```ts
export const STORAGE_STATE = path.join(__dirname, "playwright/.auth/auth.json");
```

After the test runs, the following code retrieves the sessionStorage state and saves it to a file in the path specified above:

```ts
const sessionStorage = await page.evaluate(() =>
  JSON.stringify(sessionStorage)
);

fs.writeFileSync(STORAGE_STATE, JSON.stringify(sessionStorage), "utf-8");
```

[page.evaluate()](https://playwright.dev/docs/evaluating) can execute the javascript to retrieve the current sessionStorage state from the browser.

## Rehydrating sessionStorage before each test

We want to avoid copying and pasting similar code in each test that requires the user to be logged in. We want to avoid including the code to read in the file and setting the sessionStorage in every test without resorting to sloppy copy and paste.

Playwright's [fixtures](https://playwright.dev/docs/test-fixtures) establish an environment for each test, giving the test everything it needs

Below is the `sessionStorage.ts` fixture that retrieves the previously saved sessionStorage state from the file and then initializes the browser sessionStorage with the JSON in the file.

```ts:sessionStorage.ts
import fs from 'fs';
import { test as base } from '@playwright/test';
import { STORAGE_STATE } from '../playwright.config';

export const test = base.extend({
  context: async ({ context }, use) => {
    const sessionStorage = JSON.parse(fs.readFileSync(STORAGE_STATE, 'utf-8'));

    await context.addInitScript(storage => {
      for (const [key, value] of object.entries(JSON.parse(storage))) {
        window.sessionStorage.setItem(key, value);
      }
    }, sessionStorage);

    use(context);
  },
});
```

The code above uses the context's [`addInitScript function`](https://playwright.dev/docs/api/class-browsercontext#browser-context-add-init-script), which can add a client-side script to the current page.

The script turns the file contents into a JSON object and updates the browser sessionStoage with the contents.

With this in place, we can run and pass tests without calling any additional code.

```ts
import { expect } from "@playwright/test";
import { test } from "./sessionStorage";

test.describe("/parodos", () => {
  test("should render projects page", async ({ page }) => {
    await page.goto(`/`);

    await expect(page.locator('[href*="/parodos"]')).toBeVisible();

    page.locator('[href*="/parodos"]').click();

    await page.waitForSelector("data-testid=header-title");

    expect(page.url()).toContain(`/parodos`);

    await page.getByRole("button", { name: "Add new project" }).click();

    await page.waitForSelector("data-testid=create-project");
  });
});
```

The critical thing to note is that we are importing the extended test from the fixture file and not from Playright itself:

```ts
import { test } from "./sessionStorage";
```

## Epilogue

It is a pity that Playwright's `storageState` does not support sessionStorage but it is possible with the steps outlined above.
