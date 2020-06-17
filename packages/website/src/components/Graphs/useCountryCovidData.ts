import { CountryStats, DayData, countryData, CountryData } from './types';
import { useAbort } from '@cutting/use-abort';

import dayjs from 'dayjs';
import { useCallback, useEffect } from 'react';
const utc = require('dayjs/plugin/utc');

dayjs.extend(utc);

// documenter.getpostman.com/view/2568274/SzS8rjbe?version=latest
const baseUrl = 'https://covidapi.info/api/v1/country';

export type R = {
  x: string;
  y: number;
  index: number;
  country: CountryData;
  deaths: number;
  confirmed: number;
  recovered: number;
  delta: number;
  deltaDeaths: number;
};

const transform = (results: CountryStats, country: CountryData): DayData[] => {
  const data: R[] = [];

  const added = new Set<string>();
  results.result.forEach(({ date, deaths, confirmed, ...rest }, i) => {
    if (!confirmed) {
      debugger;
    }
    if (added.has(date) === false) {
      data.push({
        x: date,
        y: deaths as number,
        index: i,
        country,
        deaths,
        confirmed,
        delta: i === 0 ? confirmed : confirmed - data[i - 1].confirmed,
        deltaDeaths: i === 0 ? 0 : deaths - data[i - 1].y,
        ...rest,
      });
    }
    added.add(date);
  });

  console.log(data);

  return data;
};

// const DefaultStartDate = dayjs().subtract(90, 'day').format('YYYY-MM-DD');
const DefaultStartDate = '2020-03-17';

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

  const { run, data, isSettled } = useAbort<CountriesStats>(getData);

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

  return { data, isSettled };
};
