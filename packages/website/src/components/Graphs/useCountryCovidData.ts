import { Results, Countries, DayData, countryData } from './types';
import { useAsync } from 'react-async';

import dayjs from 'dayjs';
const utc = require('dayjs/plugin/utc');

dayjs.extend(utc);

// documenter.getpostman.com/view/2568274/SzS8rjbe?version=latest
const baseUrl = 'https://covidapi.info/api/v1/country';

const transform = (results: Results, country: Countries): DayData[] => {
  const data = results.result.map((day, i) => {
    console.log(day);
    return {
      x: (dayjs as any).utc(day.date).format(),
      y: day.deaths,
      index: i,
      country: country,
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

const startDate = '2020-03-13';

const getCountriesData = async () => {
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
      data: transform(await result.json(), Countries[country]),
      color: countryData[country].color,
      name: countryData[country].longName,
    };

    // console.log(results[country].data);
  }

  return results;
};

export const useCountryCovidData = () => {
  return useAsync(getCountriesData);
};
