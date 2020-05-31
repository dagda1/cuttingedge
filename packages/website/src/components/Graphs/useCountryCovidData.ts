import { CountryStats, DayData, countryData, CountryData } from './types';
import { useAbort, AbortableStates } from '@cutting/use-abort';

import dayjs from 'dayjs';
import { useCallback, useEffect } from 'react';
const utc = require('dayjs/plugin/utc');

dayjs.extend(utc);

// documenter.getpostman.com/view/2568274/SzS8rjbe?version=latest
const baseUrl = 'https://covidapi.info/api/v1/country';

const transform = (results: CountryStats, country: CountryData): DayData[] => {
  const data = results.result.map(({ date, deaths, ...rest }, i) => {
    return {
      x: (dayjs as any).utc(date).format(),
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

  return result;
};

const DefaultStartDate = dayjs().subtract(45, 'day').format('YYYY-MM-DD');

export interface CountryDataProps {
  startDate?: string;
}

const getCountriesData = async ({ startDate }: CountryDataProps): Promise<CountryStats> => {
  const headers = { Accept: 'application/json' };
  const results: Partial<CountryStats> = {};

  for (const country of Object.keys(countryData)) {
    const result = await fetch(
      `${baseUrl}/${country.toUpperCase()}/timeseries/${startDate}/${dayjs().format('YYYY-MM-DD')}`,
      { headers },
    );

    results[country] = await result.json();
  }

  return results as CountryStats;
};

export type CountriesStats = {
  data: DayData[];
  color: string;
  name: string;
};

export const useCountryCovidData = ({ startDate }: CountryDataProps = { startDate: DefaultStartDate }) => {
  const getData = useCallback(() => getCountriesData({ startDate }), [startDate]);

  const { run, state, data, counter, error, isSettled } = useAbort<CountriesStats>(getData);

  useEffect(() => {
    run();
  }, [run]);

  if (isSettled) {
    for (const country in data) {
      if (data[country].name) {
        continue;
      }

      data[country] = {
        result: transform(data[country], countryData[country]),
        color: countryData[country].color,
        name: countryData[country].longName,
      };
    }
  }

  console.log({ data, isSettled, counter, state, error });

  return { data, isSettled };
};
