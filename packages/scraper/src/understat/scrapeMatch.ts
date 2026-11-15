import { assert } from '@cutting/assert';

import type { MatchInfo } from './matchSchema';
import { matchInfoSchema } from './matchSchema';

export type { MatchInfo };

function decodeHex(encoded: string): string {
  return encoded.replace(/\\x([0-9A-Fa-f]{2})/g, (_escape, hex: string) => String.fromCharCode(parseInt(hex, 16)));
}

export async function scrapeMatch(matchId: string): Promise<MatchInfo> {
  const response = await fetch(`https://understat.com/match/${matchId}`);
  assert(response.ok, `failed to fetch match ${matchId}: ${response.status}`);

  const html = await response.text();
  const scriptMatch = html.match(/var\s+match_info\s*=\s*JSON\.parse\('(.+?)'\)/);
  if (!scriptMatch) {
    throw new Error(`match_info not found in page for match ${matchId}`);
  }

  const raw = JSON.parse(decodeHex(scriptMatch[1]));

  return matchInfoSchema.parse({
    id: raw.id,
    date: raw.date,
    season: raw.season,
    homeTeam: raw.team_h,
    awayTeam: raw.team_a,
    homeGoals: raw.h_goals,
    awayGoals: raw.a_goals,
    homeXg: raw.h_xg,
    awayXg: raw.a_xg,
    homeShots: raw.h_shot,
    awayShots: raw.a_shot,
    homeShotsOnTarget: raw.h_shotOnTarget,
    awayShotsOnTarget: raw.a_shotOnTarget,
    homeDeep: raw.h_deep,
    awayDeep: raw.a_deep,
    homePpda: raw.h_ppda,
    awayPpda: raw.a_ppda,
    homeWinProb: raw.h_w,
    drawProb: raw.h_d,
    awayWinProb: raw.h_l,
  });
}
