import { CountryStats, DayData, countryData, CountryData, Stats, Countries } from './types';
import { useAbort } from '@cutting/use-abort';
import dayjs from 'dayjs';
import { useCallback, useEffect } from 'react';
import { uniqBy } from '@cutting/util';
import utc from 'dayjs/plugin/utc';
import urlJoin from 'url-join';

dayjs.extend(utc);

// documenter.getpostman.com/view/2568274/SzS8rjbe?version=latest
const baseUrl = 'https://covidapi.info/api/v1/country';

const transform = (results: CountryStats, country: CountryData): DayData[] => {
  const data = results.result.map(({ date, deaths, ...rest }, i) => {
    return {
      x: dayjs.utc(date).format(),
      y: deaths,
      index: i,
      country,
      deaths,
      ...rest,
    };
  });

  const result = data.map((d, i) => {
    return {
      ...d,
      delta: i === 0 ? 0 : d.confirmed - data[i - 1].confirmed,
      deltaDeaths: i === 0 ? 0 : d.y - data[i - 1].y,
    };
  });

  result.shift();

  return (result as unknown) as DayData[];
};

const DefaultStartDate = '2020-03-01'; //;dayjs().subtract(45, 'day').format('YYYY-MM-DD');

export interface CountryDataProps {
  startDate: string;
}

const BreakPoint = 14;

const getCountriesData = async ({ startDate }: CountryDataProps): Promise<Stats> => {
  const results = {} as Stats;

  for (const country of Object.keys(countryData)) {
    const url = urlJoin(baseUrl, country.toUpperCase(), 'timeseries', startDate, dayjs().format('YYYY-MM-DD'));
    const result = await fetch(url, { headers: { Accept: 'application/json' } });

    const data = (await result.json()) as CountryStats;

    data.result = uniqBy(data.result, (a) => a.date).filter(
      (_, i) => i % BreakPoint === 0 || i === data.result.length - 1,
    );
    results[country as Countries] = data;
  }

  return results;
};

export type CountriesStats = {
  [key in Countries]: {
    result: DayData[];
    color: string;
    name: string;
    population: number;
    data: {
      y: number;
      delta: number;
      x: string | number;
      index: number;
      country: CountryData;
      deltaDeaths: number;
      population: number;
    }[];
  };
};

export const useCountryCovidData = (
  { startDate }: CountryDataProps = { startDate: DefaultStartDate },
): { data: CountriesStats | undefined; isSettled: boolean } => {
  const getData = useCallback(() => getCountriesData({ startDate }), [startDate]);

  const { run, data, isSettled } = useAbort<Stats>(getData);

  const ret = {} as CountriesStats;

  useEffect(() => {
    run();
  }, [run]);

  if (isSettled && !!data) {
    for (const country in data) {
      if (!!ret[country as Countries]?.name) {
        continue;
      }

      ret[country as Countries] = {
        result: transform(data[country as Countries], countryData[country as Countries]),
        color: countryData[country as Countries].color,
        name: countryData[country as Countries].longName,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;
    }
  }

  return { data: ret, isSettled };
};
