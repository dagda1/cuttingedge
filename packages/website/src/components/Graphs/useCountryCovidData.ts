import { CountryStats, DayData, countryData, CountryData, Stats, Countries, DayStatistics } from './types';
import { useAbort } from '@cutting/use-abort';
import dayjs from 'dayjs';
import { useCallback, useEffect } from 'react';
import { uniqBy } from '@cutting/util';
import utc from 'dayjs/plugin/utc';
import urlJoin from 'url-join';
import fetchJsonp from 'fetch-jsonp';

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

  return (result as unknown) as DayData[];
};

const DefaultStartDate = '2020-03-01'; //;dayjs().subtract(45, 'day').format('YYYY-MM-DD');

export interface CountryDataProps {
  startDate: string;
}

const BreakPoint = 14;

export const getScotishData = async (): Promise<DayStatistics[]> => {
  const response = await fetchJsonp(
    'https://www.opendata.nhs.scot/api/3/action/datastore_search?resource_id=287fc645-4352-4477-9c8c-55bc054b7e76&limit=30000',
  );

  const data = await response.json();

  const results: DayStatistics[] = [];

  for (const record of data.result.records) {
    const rawDate = record.Date.toString();
    const date = `${rawDate.substr(0, 4)}-${rawDate.substr(4, 2)}-${rawDate.substr(6, 2)}`;

    results.push({
      date,
      deaths: record.Deaths,
      recovered: 0,
      confirmed: record.CumulativeCases,
    });
  }

  return results;
};

const getCountriesData = async ({ startDate }: CountryDataProps): Promise<Stats> => {
  const results = {} as Stats;

  for (const country of Object.keys(countryData)) {
    if (country === 'SCO') {
      continue;
    }

    const url = urlJoin(baseUrl, country.toUpperCase(), 'timeseries', startDate, dayjs().format('YYYY-MM-DD'));
    const result = await fetch(url, { headers: { Accept: 'application/json' } });

    const data = (await result.json()) as CountryStats;

    data.result = uniqBy(data.result, (a) => a.date);

    results[country as Countries] = data;
  }

  const scotsData = await getScotishData();

  const recognisedDates = results.GBR.result.map((x) => x.date);

  const normalisedScotsData = scotsData.filter((d) => recognisedDates.includes(d.date));

  results.SCO = {
    count: normalisedScotsData.length,
    result: normalisedScotsData,
  };

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

      const countryStats = data[country as Countries];
      const countryDetails = countryData[country as Countries];

      ret[country as Countries] = {
        result: transform(countryStats, countryDetails).filter(
          (_, i) => i % BreakPoint === 0 || i === countryStats.result.length - 1,
        ),
        color: countryDetails.color,
        name: countryDetails.longName,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;
    }
  }

  return { data: ret, isSettled };
};
