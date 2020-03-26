/* eslint-disable no-console */
// eslint:disable
import React from 'react';
import { useAsync } from 'react-async';
import dayjs from 'dayjs';

require('../../styles/global.module.scss');

// https://www.nationsonline.org/oneworld/country_code_list.htm
enum Countries {
  China = 'CHN',
  IT = 'ITA',
  GB = 'GBR',
  USA = 'USA',
}

type Result = { confirmed: number; deaths: number; recovered: number };

type Results = {
  count: number;
  result: Result;
};

type DayData = Result & { date: string; country: Countries };

// documenter.getpostman.com/view/2568274/SzS8rjbe?version=latest
const baseUrl = 'https://covidapi.info/api/v1/country';

const transform = (results: Results, country: Countries): DayData[] => {
  const data: DayData[] = Object.keys(results.result).map(k => ({
    date: dayjs(k).format('DD/MM/YYYY'),
    ...results.result[k],
  }));

  return data;
};

const getCountriesData = () => {
  const headers = { Accept: 'application/json' };

  return Promise.all([
    fetch(`${baseUrl}/${Countries.GB}`, { headers }),
    fetch(`${baseUrl}/${Countries.IT}`, { headers }),
    fetch(`${baseUrl}/${Countries.USA}`, { headers }),
    fetch(`${baseUrl}/${Countries.China}`, { headers }),
  ]).then(async result => {
    const gb = transform(await result[0].json(), Countries.GB);
    const italy = transform(await result[1].json(), Countries.IT);
    const usa = transform(await result[2].json(), Countries.USA);
    const china = transform(await result[3].json(), Countries.China);

    return { gb, italy, usa, china };
  });
};

export const App: React.FC = () => {
  const { error, isLoading, data } = useAsync(getCountriesData);

  if (isLoading || !data) {
    return <div>Loading.....</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log(data);

  return <h1>Foo</h1>;
};
