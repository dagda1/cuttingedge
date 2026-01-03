Create a Node.js (ESM) CLI tool that:

- Discovers candidate UK Shopify sites:
  - Primary: read candidate domains from candidates.txt (one per line, domains only)
  - Optional: if SERPER_API_KEY exists, fetch more candidates via Serper “search” API for query: '"cdn.shopify.com" site:.uk' and add unique domains.
- For each candidate, verify Shopify by fetching https://<domain>/ and checking for common Shopify signals (cdn.shopify.com, myshopify.com, /cdn/shop, “Powered by Shopify”).
- Run Lighthouse CLI twice per accepted site:
  - Desktop: lighthouse https://<domain> --preset=desktop --only-categories=performance --output json --quiet --chrome-flags="--headless"
  - Mobile: lighthouse https://<domain> --only-categories=performance --output json --quiet --chrome-flags="--headless"
- Parse the JSON from stdout, extract categories.performance.score, convert to 0–100.
- Keep only sites where (desktop < THRESHOLD) OR (mobile < THRESHOLD), where THRESHOLD comes from config.json (default 50).
- Stop once you have 10 rows (configurable MAX_RESULTS in config.json).
- Output a markdown table:
  | Site | Desktop Perf | Mobile Perf |
- Add package.json scripts: "scan": "node ./scan.mjs"
- Include README with setup + how to run.
