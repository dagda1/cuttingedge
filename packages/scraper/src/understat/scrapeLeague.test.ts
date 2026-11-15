import { describe, expect, it } from 'vitest';

import { findSeasons, scrapeSeason } from './scrapeLeague';

describe('findSeasons', () => {
  it('returns every season from 2024 that has kicked off', async () => {
    expect(await findSeasons(new Date('2026-10-24T12:00:00Z'))).toEqual(['2024', '2025', '2026']);
  });

  it('leaves out a season whose first match has not kicked off', async () => {
    expect(await findSeasons(new Date('2026-08-01T12:00:00Z'))).toEqual(['2024', '2025']);
  });
});

describe('scrapeSeason', () => {
  it('marks a season with no unplayed matches as ended', async () => {
    const season = await scrapeSeason('2025');

    expect(season.season).toBe('2025');
    expect(season.firstMatchDate).toBe('2025-08-15 19:00:00');
    expect(season.lastMatchDate).toBe('2026-05-24 15:00:00');
    expect(season.ended).toBe(true);
    expect(season.teams).toHaveLength(20);
    expect(season.teams).toContain('Burnley');
  });

  it('reads the first match date and teams of the 2026 season', async () => {
    const season = await scrapeSeason('2026');

    expect(season.firstMatchDate).toBe('2026-08-21 19:00:00');
    expect(season.teams).toHaveLength(20);
    expect(season.teams).toContain('Coventry');
    expect(season.teams).toContain('Hull');
    expect(season.teams).not.toContain('West Ham');
  });
});
