# @cutting/scraper

Scrapers for football data.

## Understat

Premier League match data from [Understat](https://understat.com): goals, xG, shots, shots on target, deep completions, PPDA and win probabilities per match.

```bash
pnpm --filter @cutting/scraper fetch-data <data-dir> [--force]
```

Writes one `matches-<season>.json` per season into `<data-dir>`. Only matches not already in the file are scraped; `--force` scrapes every match again.

## Tests

The tests call Understat over the network.
