import { Results, Countries, DayData, countryData } from './types';
import { useAsync } from 'react-async';

import dayjs from 'dayjs';

// documenter.getpostman.com/view/2568274/SzS8rjbe?version=latest
const baseUrl = 'https://covidapi.info/api/v1/country';

const transform = (results: Results, country: Countries): DayData[] => {
  const data = Object.keys(results.result)
    .map((k, i) => {
      return {
        x: i + 1,
        y: results.result[k].deaths,
        date: dayjs(k).format('DD/MM/YYYY'),
      };
    })
    .filter(d => d.y > 1)
    .map(({ y, ...rest }, i) => ({ ...rest, x: i + 1, y, country }));

  const result = data.map((d, i) => {
    return {
      ...d,
      delta: i === 0 ? 0 : d.y - data[i - 1].y,
    };
  });

  return result;
};

const getCountriesData = () => {
  const headers = { Accept: 'application/json' };

  return Promise.all([
    fetch(`${baseUrl}/${Countries.GB}`, { headers }),
    fetch(`${baseUrl}/${Countries.IT}`, { headers }),
    fetch(`${baseUrl}/${Countries.USA}`, { headers }),
    fetch(`${baseUrl}/${Countries.China}`, { headers }),
    fetch(`${baseUrl}/${Countries.Spain}`, { headers }),
    fetch(`${baseUrl}/${Countries.Ireland}`, { headers }),
  ])
    .then(async result => {
      const gb = {
        data: transform(await result[0].json(), Countries.GB),
        color: countryData[Countries.GB].color,
        name: countryData[Countries.GB].longName,
      };
      const italy = {
        data: transform(await result[1].json(), Countries.IT),
        color: countryData[Countries.IT].color,
        name: countryData[Countries.IT].longName,
      };
      const usa = {
        data: transform(await result[2].json(), Countries.USA),
        color: countryData[Countries.USA].color,
        name: countryData[Countries.USA].longName,
      };
      const china = {
        data: transform(await result[3].json(), Countries.China),
        color: countryData[Countries.China].color,
        name: countryData[Countries.China].longName,
      };
      const spain = {
        data: transform(await result[4].json(), Countries.Spain),
        color: countryData[Countries.Spain].color,
        name: countryData[Countries.Spain].longName,
      };
      const ireland = {
        data: transform(await result[5].json(), Countries.Ireland),
        color: countryData[Countries.Ireland].color,
        name: countryData[Countries.Ireland].longName,
      };

      return {
        [Countries.GB]: gb,
        [Countries.IT]: italy,
        [Countries.USA]: usa,
        [Countries.China]: china,
        [Countries.Spain]: spain,
        [Countries.Ireland]: ireland,
      };
    })
    .catch(console.error);
};

export const useCountryCovidData = () => {
  return useAsync(getCountriesData);
};
