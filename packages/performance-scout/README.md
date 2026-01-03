# Performance Scout

A TypeScript CLI tool that discovers UK Shopify sites and tests their performance using Lighthouse.

## Features

- Discovers candidate Shopify sites from a local file OR Serper API
- Verifies sites are actually Shopify stores
- Runs Lighthouse performance tests (desktop and mobile)
- Filters sites below a configurable performance threshold
- Outputs results as a markdown table

## Setup

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Chrome/Chromium (required by Lighthouse)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Set your Serper API key (required only if using `--use-serper`):

```bash
export SERPER_API_KEY=your_api_key_here
```

### Configuration

Edit `config.json` to adjust settings:

- `THRESHOLD`: Performance score threshold (0-100). Sites scoring below this on desktop OR mobile are included in results. Default: 50
- `MAX_RESULTS`: Maximum number of results to collect. Default: 10

### Candidates File

Add domains (one per line) to `candidates.txt`:

```
example.co.uk
shop.example.com
another-shop.co.uk
```

## Usage

### Scan using candidates.txt (default)

```bash
npm run scan
```

### Scan using Serper API

```bash
npm run scan:serper
```

Or with the flag directly:

```bash
npm run scan -- --use-serper
```

The tool will:

1. Load candidates from either `candidates.txt` (default) or Serper API (if `--use-serper` flag is used)
2. Verify each candidate is a Shopify site
3. Run Lighthouse tests (desktop and mobile) on verified sites
4. Keep only sites scoring below the threshold
5. Stop after finding `MAX_RESULTS` qualifying sites
6. Output a markdown table to `results.md` and console

## Output

Results are saved to `results.md` in the following format:

| Site             | Desktop Perf | Mobile Perf |
| ---------------- | ------------ | ----------- |
| example.co.uk    | 45           | 38          |
| shop.example.com | 52           | 41          |

Performance scores range from 0-100, where higher is better.

## Notes

- Built with TypeScript and runs using tsx (no build step required)
- Serper API results are cached in `.serper-cache.json` to avoid repeated API calls
- Lighthouse tests can take 30-60 seconds per site
- Sites that cannot be reached or verified as Shopify stores are skipped
- If fewer than `MAX_RESULTS` qualifying sites are found, the tool outputs what it has
