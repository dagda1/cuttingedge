import { access, mkdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { z } from 'zod';

import type { MatchInfo } from './matchSchema';
import { matchInfoSchema } from './matchSchema';
import { findSeasons, scrapeLeagueMatchIds } from './scrapeLeague';
import { scrapeMatch } from './scrapeMatch';

export type FetchMode = 'incremental' | 'force';

const matchesArraySchema = z.array(matchInfoSchema);

async function loadExisting(filePath: string): Promise<MatchInfo[]> {
  const exists = await access(filePath).then(
    () => true,
    (error: NodeJS.ErrnoException) => {
      if (error.code === 'ENOENT') {
        return false;
      }
      throw error;
    },
  );
  if (!exists) {
    return [];
  }
  const raw = await readFile(filePath, 'utf-8');

  return matchesArraySchema.parse(JSON.parse(raw));
}

async function fetchSeason(dataDir: string, season: string, mode: FetchMode): Promise<void> {
  const filePath = join(dataDir, `matches-${season}.json`);
  const existing = mode === 'force' ? [] : await loadExisting(filePath);
  const existingIds = new Set(existing.map((match) => match.id));

  console.log(`\n${season} season: ${existing.length} existing matches`);

  const newIds = await scrapeLeagueMatchIds(season, existingIds);
  if (newIds.length === 0) {
    console.log('No new matches');
    return;
  }

  console.log(`${newIds.length} new matches to scrape`);

  const newMatches: MatchInfo[] = [];
  for (const [index, id] of newIds.entries()) {
    process.stdout.write(`\rScraping match ${index + 1}/${newIds.length} (${id})`);
    newMatches.push(await scrapeMatch(id));
  }

  const all = [...existing, ...newMatches];
  await writeFile(filePath, JSON.stringify(all, null, 2));
  console.log(`\nWrote ${all.length} matches to ${filePath} (+${newMatches.length} new)`);
}

export async function fetchMatches(dataDir: string, mode: FetchMode): Promise<void> {
  await mkdir(dataDir, { recursive: true });

  for (const season of await findSeasons(new Date())) {
    await fetchSeason(dataDir, season, mode);
  }
}
