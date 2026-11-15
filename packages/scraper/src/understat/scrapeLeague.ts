import { assert } from '@cutting/assert';
import { z } from 'zod';

const FIRST_SEASON = 2024;

const leagueEntrySchema = z.object({
  id: z.string(),
  isResult: z.boolean(),
  datetime: z.string(),
});

const teamSchema = z.object({ title: z.string() });

const leagueDataSchema = z.object({
  teams: z.union([z.record(z.string(), teamSchema), z.array(teamSchema)]),
  dates: z.array(leagueEntrySchema),
});

export interface SeasonSummary {
  season: string;
  firstMatchDate: string;
  lastMatchDate: string;
  ended: boolean;
  teams: string[];
}

type LeagueEntry = z.infer<typeof leagueEntrySchema>;

async function fetchLeagueData(season: string): Promise<z.infer<typeof leagueDataSchema>> {
  const response = await fetch(`https://understat.com/getLeagueData/EPL/${season}`, {
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      Referer: `https://understat.com/league/EPL/${season}`,
    },
  });
  assert(response.ok, `failed to fetch league data for season ${season}: ${response.status}`);

  return leagueDataSchema.parse(await response.json());
}

function toUnderstatDate(date: Date): string {
  return date.toISOString().slice(0, 19).replace('T', ' ');
}

function sortedDates(entries: LeagueEntry[]): string[] {
  return entries.map((entry) => entry.datetime).sort();
}

export async function findSeasons(now: Date): Promise<string[]> {
  const kickedOff = toUnderstatDate(now);
  const seasons: string[] = [];

  for (let year = FIRST_SEASON; ; year += 1) {
    const season = String(year);
    const data = await fetchLeagueData(season);
    const dates = sortedDates(data.dates);

    if (dates.length === 0 || dates[0] > kickedOff) {
      return seasons;
    }

    seasons.push(season);
  }
}

export async function scrapeSeason(season: string): Promise<SeasonSummary> {
  const data = await fetchLeagueData(season);
  const dates = sortedDates(data.dates);
  assert(dates.length > 0, `season ${season} has no matches`);

  return {
    season,
    firstMatchDate: dates[0],
    lastMatchDate: dates[dates.length - 1],
    ended: data.dates.every((entry) => entry.isResult),
    teams: Object.values(data.teams)
      .map((team) => team.title)
      .sort(),
  };
}

export async function scrapeLeagueMatchIds(season: string, existingIds: Set<string>): Promise<string[]> {
  const data = await fetchLeagueData(season);

  return data.dates.filter((entry) => entry.isResult && !existingIds.has(entry.id)).map((entry) => entry.id);
}
