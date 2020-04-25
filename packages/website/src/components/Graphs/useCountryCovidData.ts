import {
  Results,
  Countries,
  DayData,
  countryData,
  CountriesData,
  CountryData,
} from './types';
import { useAsync } from 'react-async';

import dayjs from 'dayjs';
import { useCallback } from 'react';
const utc = require('dayjs/plugin/utc');

dayjs.extend(utc);

// documenter.getpostman.com/view/2568274/SzS8rjbe?version=latest
const baseUrl = 'https://covidapi.info/api/v1/country';

const transform = (results: Results, country: CountryData): DayData[] => {
  const data = results.result.map((day, i) => {
    return {
      x: (dayjs as any).utc(day.date).format(),
      y: day.confirmed,
      index: i,
      country,
    };
  });

  const result = data.map((d, i) => {
    return {
      ...d,
      delta: i === 0 ? 0 : d.y - data[i - 1].y,
    };
  });

  return result;
};

const DefaultStartDate = dayjs()
  .subtract(30, 'day')
  .format('YYYY-MM-DD');

export interface CountryDataProps {
  startDate?: string;
}

const getCountriesData = async ({ startDate }: CountryDataProps) => {
  const headers = { Accept: 'application/json' };
  const results: any = {};

  for (const country of Object.keys(countryData)) {
    const result = await fetch(
      `${baseUrl}/${country.toUpperCase()}/timeseries/${startDate}/${dayjs().format(
        'YYYY-MM-DD',
      )}`,
      { headers },
    );

    results[country] = {
      data: transform(await result.json(), countryData[country]),
      color: countryData[country].color,
      name: countryData[country].longName,
    };
  }

  return results;
};

export const useCountryCovidData = (
  { startDate }: CountryDataProps = { startDate: DefaultStartDate },
) => {
  const getData = useCallback(() => getCountriesData({ startDate }), [
    startDate,
  ]);

  return useAsync(getData);
};
