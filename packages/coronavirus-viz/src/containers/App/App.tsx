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

type DayData = Result & {
  date: string;
  country: Countries;
  delta: number;
};

// documenter.getpostman.com/view/2568274/SzS8rjbe?version=latest
const baseUrl = 'https://covidapi.info/api/v1/country';

const transform = (results: Results, country: Countries): DayData[] => {
  const data: DayData[] = Object.keys(results.result)
    .map(k => ({
      country,
      date: dayjs(k).format('DD/MM/YYYY'),
      ...results.result[k],
    }))
    .filter(d => d.deaths > 0);

  const result = data.map((d, i) => {
    return {
      ...d,
      delta: i === 0 ? 0 : d.deaths - data[i - 1].deaths,
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
  ])
    .then(async result => {
      const gb = transform(await result[0].json(), Countries.GB);
      const italy = transform(await result[1].json(), Countries.IT);
      const usa = transform(await result[2].json(), Countries.USA);
      const china = transform(await result[3].json(), Countries.China);

      return { gb, italy, usa, china };
    })
    .catch(console.error);
};

export const App: React.FC = () => {
  const { error, isLoading, data } = useAsync(getCountriesData);

  if (isLoading || !data) {
    return <div>Loading.....</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <table style={{ width: '100%' }}>
        <tbody>
          {Object.keys(data).map((k, i) => {
            const country = data[k];
            return (
              <React.Fragment key={i}>
                <tr>
                  <td>{k}</td>
                </tr>
                <tr>
                  {country.map((c: DayData, i: number) => (
                    <React.Fragment key={i}>
                      <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                        {c.date}
                        <br /> confirmed = {c.confirmed}
                        <br /> deaths = {c.deaths}
                        <br /> delta = {c.delta}
                      </td>
                    </React.Fragment>
                  ))}
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
