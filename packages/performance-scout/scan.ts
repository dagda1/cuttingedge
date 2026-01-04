#!/usr/bin/env tsx

import { execFile } from 'child_process';
import { existsSync } from 'fs';
import fs from 'fs/promises';
import type { Result as LHResult } from 'lighthouse';
import path from 'path';
import { getJson } from 'serpapi';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const execFileAsync = promisify(execFile);

interface Config {
  DESKTOP_THRESHOLD: number;
  MOBILE_THRESHOLD: number;
  SEO_THRESHOLD: number;
  MAX_RESULTS: number;
  crawledVerticals: string[];
}

const config: Config = JSON.parse(await fs.readFile(path.join(__dirname, 'config.json'), 'utf-8'));
const DESKTOP_THRESHOLD = config.DESKTOP_THRESHOLD;
const MOBILE_THRESHOLD = config.MOBILE_THRESHOLD;
const SEO_THRESHOLD = config.SEO_THRESHOLD;
const MAX_RESULTS = config.MAX_RESULTS;

const COMPLETED_FILE = path.join(__dirname, 'completed.md');
const CONFIG_FILE = path.join(__dirname, 'config.json');

const useSerper = process.argv.includes('--use-serper');
const verticalArg = process.argv.find((arg) => arg.startsWith('--vertical='));
const vertical = verticalArg ? verticalArg.split('=')[1] : null;

async function loadCompletedDomains(): Promise<Set<string>> {
  if (!existsSync(COMPLETED_FILE)) {
    return new Set();
  }
  const content = await fs.readFile(COMPLETED_FILE, 'utf-8');
  const domains = content
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
  return new Set(domains);
}

async function addCompletedDomain(domain: string): Promise<void> {
  await fs.appendFile(COMPLETED_FILE, `${domain}\n`);
}

async function loadCandidatesFromFile(): Promise<string[]> {
  const candidatesPath = path.join(__dirname, 'candidates.txt');
  if (!existsSync(candidatesPath)) {
    return [];
  }
  const content = await fs.readFile(candidatesPath, 'utf-8');
  return content
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

async function saveConfig(): Promise<void> {
  await fs.writeFile(CONFIG_FILE, JSON.stringify(config, null, 2) + '\n');
}

async function fetchSerperCandidates(completedDomains: Set<string>): Promise<string[]> {
  const apiKey = process.env.SERPER_API_KEY;
  if (!apiKey) {
    throw new Error('SERPER_API_KEY environment variable is required');
  }

  if (!vertical) {
    throw new Error('--vertical=<keyword> is required when using --use-serper');
  }

  if (config.crawledVerticals.includes(vertical)) {
    console.log(`Vertical "${vertical}" already crawled, exiting.`);
    process.exit(0);
  }

  console.log(`Fetching candidates from Serper API for vertical: ${vertical}...`);

  let query = `"cdn.shopify.com" ${vertical} site:.uk`;
  for (const domain of completedDomains) {
    query += ` -site:${domain}`;
  }

  console.log(`Query: ${query}`);
  console.log(`Query length: ${query.length} characters`);

  const domains: string[] = [];
  const resultsPerPage = 10;
  const totalRequests = Math.ceil(MAX_RESULTS / resultsPerPage);

  for (let i = 0; i < totalRequests && domains.length < MAX_RESULTS; i++) {
    const start = i * resultsPerPage;
    console.log(`Fetching results ${start + 1}-${start + resultsPerPage}...`);

    const response = await getJson({
      engine: 'google',
      q: query,
      api_key: apiKey,
      num: resultsPerPage,
      start,
    });

    if (response.organic_results) {
      for (const result of response.organic_results) {
        if (result.link && domains.length < MAX_RESULTS) {
          try {
            const url = new URL(result.link);
            const domain = url.hostname.replace(/^www\./, '');
            if (!domains.includes(domain)) {
              domains.push(domain);
            }
          } catch (e) {
            console.error(`Invalid URL from Serper: ${result.link}`, e instanceof Error ? e.message : String(e));
          }
        }
      }
    }

    if (!response.organic_results || response.organic_results.length === 0) {
      console.log(`No more results after ${start} results`);
      break;
    }
  }

  console.log(`Fetched ${domains.length} domains from Serper API`);
  return domains;
}

async function verifyShopify(domain: string): Promise<boolean> {
  try {
    const url = `https://${domain}/`;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; PerformanceScout/1.0)',
      },
    });

    clearTimeout(timeout);

    if (!response.ok) {
      return false;
    }

    const html = await response.text();
    const lowerHtml = html.toLowerCase();

    const hasShopifySignal =
      lowerHtml.includes('cdn.shopify.com') ||
      lowerHtml.includes('myshopify.com') ||
      lowerHtml.includes('/cdn/shop') ||
      lowerHtml.includes('powered by shopify');

    return hasShopifySignal;
  } catch (error) {
    console.error(error);
    console.error(`Error verifying ${domain}:`, error instanceof Error ? error.message : String(error));
    return false;
  }
}

async function runLighthouse(
  domain: string,
  isDesktop: boolean = false,
): Promise<{ performance: number | null; seo: number | null }> {
  const url = `https://${domain}`;
  const args = [url, '--only-categories=performance,seo', '--output=json', '--quiet', '--chrome-flags=--headless'];

  if (isDesktop) {
    args.push('--preset=desktop');
  }

  try {
    const { stdout } = await execFileAsync('lighthouse', args, { maxBuffer: 10 * 1024 * 1024 });
    const result = JSON.parse(stdout) as LHResult;
    const perfScore = result.categories?.performance?.score;
    const seoScore = result.categories?.seo?.score;
    return {
      performance: perfScore !== null && perfScore !== undefined ? Math.round(perfScore * 100) : null,
      seo: seoScore !== null && seoScore !== undefined ? Math.round(seoScore * 100) : null,
    };
  } catch (error) {
    console.error(
      `Lighthouse error for ${domain} (${isDesktop ? 'desktop' : 'mobile'}):`,
      error instanceof Error ? error.message : String(error),
    );
    return { performance: null, seo: null };
  }
}

async function testSite(domain: string) {
  console.log(`Testing ${domain}...`);

  const [desktopResult, mobileResult] = await Promise.all([runLighthouse(domain, true), runLighthouse(domain, false)]);

  return {
    domain,
    desktopScore: desktopResult.performance,
    mobileScore: mobileResult.performance,
    seoScore: mobileResult.seo,
  };
}

async function main(): Promise<void> {
  console.log('Performance Scout - Starting scan...\n');

  const completedDomains = await loadCompletedDomains();
  console.log(`Loaded ${completedDomains.size} completed domains\n`);

  let allCandidates: string[];
  if (useSerper) {
    console.log('Using Serper API as candidate source\n');
    allCandidates = await fetchSerperCandidates(completedDomains);
  } else {
    console.log('Using candidates.txt as candidate source\n');
    allCandidates = await loadCandidatesFromFile();
  }

  console.log(`Total candidates to check: ${allCandidates.length}\n`);

  const outputPath = path.join(__dirname, 'results.md');
  const fileExists = existsSync(outputPath);
  const needsHeader = !fileExists || (await fs.readFile(outputPath, 'utf-8')).length === 0;

  if (needsHeader) {
    await fs.writeFile(
      outputPath,
      '| Site | Desktop Perf | Mobile Perf | SEO |\n|------|--------------|-------------|-----|\n',
    );
  }

  const results: Awaited<ReturnType<typeof testSite>>[] = [];

  for (const domain of allCandidates) {
    if (useSerper && completedDomains.has(domain)) {
      console.log(`${domain} already completed, skipping.\n`);
      continue;
    }

    console.log(`Verifying ${domain} is a Shopify site...`);
    const isShopify = await verifyShopify(domain);

    if (!isShopify) {
      console.log(`${domain} is not a Shopify site, skipping.\n`);
      if (!completedDomains.has(domain)) {
        await addCompletedDomain(domain);
        completedDomains.add(domain);
      }
      continue;
    }

    console.log(`${domain} verified as Shopify site.`);
    const testResult = await testSite(domain);

    if (!completedDomains.has(domain)) {
      await addCompletedDomain(domain);
      completedDomains.add(domain);
    }

    const desktop = testResult.desktopScore !== null ? testResult.desktopScore : 'N/A';
    const mobile = testResult.mobileScore !== null ? testResult.mobileScore : 'N/A';
    const seo = testResult.seoScore !== null ? testResult.seoScore : 'N/A';

    const meetsThreshold =
      testResult.desktopScore !== null &&
      testResult.mobileScore !== null &&
      testResult.seoScore !== null &&
      (testResult.desktopScore < DESKTOP_THRESHOLD ||
        testResult.mobileScore < MOBILE_THRESHOLD ||
        testResult.seoScore < SEO_THRESHOLD);

    if (meetsThreshold) {
      results.push(testResult);
      const row = `| ${testResult.domain} | ${desktop} | ${mobile} | ${seo} |\n`;
      console.log(`Writing to ${outputPath}: ${row.trim()}`);
      await fs.appendFile(outputPath, row);
      console.log(
        `Added ${domain} to results (${results.length}) - Desktop: ${desktop}, Mobile: ${mobile}, SEO: ${seo}\n`,
      );
    } else {
      console.log(`${domain} scores too high, skipping - Desktop: ${desktop}, Mobile: ${mobile}, SEO: ${seo}\n`);
    }
  }

  if (useSerper && vertical) {
    config.crawledVerticals.push(vertical);
    await saveConfig();
    console.log(`Added "${vertical}" to crawled verticals.`);
  }

  console.log(`\n=== Scan Complete ===`);
  console.log(`Total results: ${results.length}`);
  console.log(`Results saved to ${outputPath}`);
}

main().catch(console.error);
