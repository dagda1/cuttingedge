import { z } from 'zod';

export const matchInfoSchema = z.object({
  id: z.string().regex(/^\d+$/),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/),
  season: z.string().regex(/^\d+$/),
  homeTeam: z.string().min(1),
  awayTeam: z.string().min(1),
  homeGoals: z.coerce.number().int(),
  awayGoals: z.coerce.number().int(),
  homeXg: z.coerce.number(),
  awayXg: z.coerce.number(),
  homeShots: z.coerce.number().int(),
  awayShots: z.coerce.number().int(),
  homeShotsOnTarget: z.coerce.number().int(),
  awayShotsOnTarget: z.coerce.number().int(),
  homeDeep: z.coerce.number().int(),
  awayDeep: z.coerce.number().int(),
  homePpda: z.coerce.number(),
  awayPpda: z.coerce.number(),
  homeWinProb: z.coerce.number(),
  drawProb: z.coerce.number(),
  awayWinProb: z.coerce.number(),
});

export type MatchInfo = z.infer<typeof matchInfoSchema>;
