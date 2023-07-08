import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { mkdir, readFile, writeFile } from '~/utils/fs.server';
import { URL } from '~/utils/url.server';
import { process } from '~/utils/process.server';
import { puppeteer } from '~/utils/puppeteer.server';
import { join } from '~/utils/path.server';
import { assert } from 'assert-ts';

const defaultViewport = {
  height: 1200,
  width: 630,
};

export const loader: LoaderFunction = async ({ request }) => {
  const isContainer = process.env.OS_ENV === 'container';
  const url = new URL(request.url).searchParams.get('url');

  assert(!!url, `no url in /ogimage`);

  const slug = url?.replace(/\//g, '') || 'home';

  console.log(slug);

  const headers: HeadersInit = {
    'Content-Type': 'image/png',
    // can be `inline` or `attachment`
    'Content-Disposition': `inline; filename="${slug}_ogimage.png"`,
    'x-content-type-options': 'nosniff',
  };

  const ogCache = join(process.cwd(), '.cache', 'ogimages');
  const imagePath = `${ogCache}/${slug}_ogimage.png`;

  const pptrCache = join(process.cwd(), '.cache', 'pptr');

  await Promise.all([
    mkdir(pptrCache, { recursive: true }).catch(() => {}),
    mkdir(ogCache, { recursive: true }).catch(() => {}),
  ]);
  const cachedImage = await readFile(imagePath).catch(() => {});

  if (cachedImage) {
    return new Response(cachedImage, { headers });
  }
  const launchBrowser = puppeteer.launch({
    args: [
      '--font-render-hinting=none', // from https://docs.browserless.io/blog/2020/09/30/puppeteer-print.html#use-a-special-launch-flag
      '--disable-dev-shm-usage',
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
    userDataDir: pptrCache,
    ...(isContainer && { executablePath: 'google-chrome-stable' }),
  });
  const browser = await launchBrowser;
  const page = await browser.newPage();

  await page.setCacheEnabled(false);

  await page.setViewport(defaultViewport);

  await page.setUserAgent(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.198 Safari/537.36',
  );

  await page.setCacheEnabled(false);

  await page.goto(url.toString(), { waitUntil: 'networkidle0', timeout: 50000 });

  const element = await page.$('#ogimage');

  if (!element) {
    console.error("Could'nt get #ogimage");
    throw json({ error: 'Error creating the image' }, 500);
  }

  const boundingBox = await element.boundingBox();

  if (!boundingBox) {
    console.error("Could'nt get element.boundingBox");
    throw json({ error: 'Error creating the image' }, 500);
  }

  let screenshot = await page?.screenshot({
    omitBackground: true,
    type: 'png',
    clip: { ...boundingBox, height: boundingBox.height },
  });

  await element.dispose();
  await browser.close();

  if (typeof screenshot === 'undefined') {
    throw json({ error: 'Error creating the image' }, 500);
  }

  // would be cool if we could `Response` without returning so we could cache after sending the response to the browser
  await writeFile(imagePath, screenshot);

  return new Response(screenshot, { headers });
};
