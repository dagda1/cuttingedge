# lfc.cutting.scot

Liverpool data site. First piece: Iraola's report card against Slot's first two seasons.

## Decided

- New app under `apps/` in this repo, built with Astro, statically rendered.
- Domain: `lfc.cutting.scot`. Hosted on AWS: S3 behind CloudFront.
- Data is scraped locally and committed as JSON. Updating the site is a content push.
- Data access through Astro content collections (`astro-conventions` skill in `~/claude`).
- All scraping lives in this repo as `packages/scraper` (`@cutting/scraper`), one folder per source.

## Report card

Liverpool only. Iraola's league games so far against the same number of games at the
start of Slot's 2024/25 and 2025/26 seasons. Updated periodically.

Mandate being tested: move Liverpool away from Slot's slow, possession-based style to a
pressing, more attacking one.

Start with one chart. The rest follow one at a time.

## First chart

Possession against xG, one dot per Liverpool league match, Slot's two seasons and
Iraola's so far. It tests whether Slot had possession that led to nothing.

Needs, in order:

1. FBref possession scraper in `packages/scraper/src/fbref`.
2. Understat and FBref data joined per match, on date and teams.
3. The Astro app with this one chart.

## Charts

- Pressing: PPDA
- Attacking: xG, shots, shots on target, deep completions
- Defence: xG against, goals against, clean sheets
- Possession: possession % per match
- Possession against xG, one dot per match: did Slot have possession that led to nothing?
- Results: points per game (outcome, not part of the mandate)

## Data

- Understat: PPDA, xG, shots, shots on target, deep completions, goals.
  Scraper is `packages/scraper` (`@cutting/scraper`), under `src/understat`, copied from match-predictor's `packages/etl`.
- FBref: possession per match (`Poss` column, Scores & Fixtures table), matched to
  Understat on date and teams. FBref lost its advanced Opta data in Jan 2026, so it
  does not replace Understat.
  Not scraped yet. Goes in `packages/scraper/src/fbref`.

Not decided:

- FotMob: possession won in the final third, a second pressing stat. Seen as season
  totals only; per match not confirmed.
- Injuries: Transfermarkt, through the `football-injuries` repo
  (`~/projects/football-injuries`). Players missing 1+ game, Slot's two seasons against
  Iraola's weeks so far.

## Design with Impeccable

1. Install: `npx impeccable install` from this repo's root. Choose global:
   `.claude/skills` here is a link to `~/claude/skills`.
2. `/impeccable init` — writes `PRODUCT.md`.
3. `/impeccable shape the Iraola report card page` — interview, then a design brief. No code.
4. Build from the brief with `/spec` and `/build`.
5. Refine one section at a time: `/impeccable critique`, `typeset`, `colorize`, `polish`.
6. `/impeccable live` — pick an element in the browser on the Astro dev server and swap variants.

## Open

- Tempo: not in either source.
- Do oxlint and oxfmt handle `.astro` files?
- Infra: Terraform in the app folder (as `apps/frontendsupport`) or CDK.
- App folder name.
