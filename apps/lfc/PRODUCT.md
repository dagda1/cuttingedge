# Product

<!-- impeccable:product-schema 1 -->

Source: `plans/lfc-site.md` and an owner interview on 2026-11-15.

## Platform

web

## Stack

Astro, statically rendered. Data access through Astro content collections. Hosted on AWS: S3 behind CloudFront. Domain: `lfc.cutting.scot`.

## Users

- Liverpool supporters who follow the team and want evidence about the new manager.
- The reader knows football statistics such as xG and PPDA. The site does not explain the metrics.
- Second audience: employers and clients who assess the owner's data and frontend work.
- Not decided: the reader's device and how the reader arrives at the site.

## Product Purpose

A Liverpool data site. The first piece is Iraola's report card against Slot's first two seasons.

The report card tests one mandate: move Liverpool away from Slot's slow, possession-based style to a pressing, more attacking style.

Success: the site is a portfolio piece that shows the owner's data and frontend work.

## Positioning

- Liverpool only.
- Like for like: Iraola's league games so far against the same number of games at the start of Slot's 2024/25 and 2025/26 seasons.
- Each chart tests one part of the mandate.
- Results (points per game) are an outcome, not part of the mandate.
- The report card states a verdict for each chart and one overall grade for the mandate.

## Operating Context

- Data is scraped locally and committed as JSON.
- An update to the site is a content push.
- The report card is updated periodically.
- The site starts with one chart. The other charts follow one at a time.

## Capabilities and Constraints

First chart: possession against xG, one dot per Liverpool league match, for Slot's two seasons and Iraola's games so far. It tests whether Slot had possession that led to nothing.

Planned charts:

- Pressing: PPDA
- Attacking: xG, shots, shots on target, deep completions
- Defence: xG against, goals against, clean sheets
- Possession: possession % per match
- Results: points per game

Constraints:

- League matches only.
- The first chart needs Understat and FBref data joined per match on date and teams.
- FBref lost its advanced Opta data in January 2026, so FBref does not replace Understat.

Not decided:

- Tempo: not in either source.
- FotMob possession won in the final third: per-match data not confirmed.
- Injuries from Transfermarkt through the `football-injuries` repo.
- Infra tool: Terraform or CDK.
- App folder name.

## Brand Commitments

- Name: `lfc.cutting.scot`.
- Not decided: voice, logo, and the use of club assets.

## Evidence on Hand

- Understat scraper: `packages/scraper/src/understat` (`@cutting/scraper`). It gives PPDA, xG, shots, shots on target, deep completions and goals per match.
- FBref possession scraper: not written. It goes in `packages/scraper/src/fbref`.
- No scraped JSON is committed for the site yet.
- No written commentary, testimonials or press exist. Future work must not invent them.

## Product Principles

1. Every chart answers one question about the mandate.
2. Compare like for like: the same number of games for each manager.
3. Keep outcome (results) apart from style (the mandate).
4. Ship one chart at a time.
5. Show only data that a named source supplies.
