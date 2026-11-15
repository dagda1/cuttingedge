import { load } from 'cheerio';

async function fetchAndParseLinksFromParent(url, parentSelector) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = load(html);

    const links = [];
    $(`${parentSelector} a`).each((index, element) => {
      const link = $(element).attr('href');
      links.push(link);
    });

    return links;
  } catch (error) {
    console.error('Failed to fetch and parse the URL:', error);
    return [];
  }
}

async function warmCache(links) {
  try {
    for (const url of links) {
      const nextUrl = `https://frontendrescue.com${url}`;

      console.log(`loading url ${nextUrl}`);

      const response = await fetch(nextUrl);

      console.log(`response ${response.ok} ${response.status} from ${nextUrl}`);
    }
  } catch (err) {
    console.error('failed to load url', err);
  }
}

const parentElementSelector = 'main ul';
fetchAndParseLinksFromParent('https://frontendrescue.com/posts', parentElementSelector).then(warmCache);
