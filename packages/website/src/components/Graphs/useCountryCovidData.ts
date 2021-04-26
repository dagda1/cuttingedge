import { CountryStats, DayData, CountryData, countryData, Countries, DayStatistics, CountriesResult } from './types';
import { useFetch } from '@cutting/react-abortable-fetch';
import dayjs from 'dayjs';
import { uniqBy } from '@cutting/util';
import utc from 'dayjs/plugin/utc';
import urlJoin from 'url-join';
import assert from 'assert-ts';
import { useEffect, useState } from 'react';

dayjs.extend(utc);

// documenter.getpostman.com/view/2568274/SzS8rjbe?version=latest
const baseUrl = 'https://covidapi.info/api/v1/country';

export const transform = (results: CountryStats, country: CountryData): DayData[] => {
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

export const BreakPoint = 14;

export const useCountryCovidData = (
  { startDate }: CountryDataProps = { startDate: DefaultStartDate },
): { data: CountriesResult | undefined } => {
  const [finalData, setFinalData] = useState<CountriesResult>();

  const urls = Object.keys(countryData)
    .filter((c) => c !== 'SCO')
    .map((c) => urlJoin(baseUrl, c.toUpperCase(), 'timeseries', startDate, dayjs().format('YYYY-MM-DD')));

  const { data } = useFetch<CountriesResult, CountryStats>(urls, {
    accumulator: (acc, current, info) => {
      current.result = uniqBy(current.result, (a) => a.date);

      assert(typeof info === 'string', `unexpected info ${info}`);

      const country = info.split('/')[6] as Countries;

      const countryDetails = countryData[country];

      acc[country] = {
        data: transform(current, countryDetails).filter((d, i) => {
          const diff = dayjs().diff(dayjs(d.x), 'd');
          return diff <= 10 || i % BreakPoint === 0;
        }),
        color: countryDetails.color,
        name: countryDetails.longName,
      };

      return acc;
    },
    initialState: {} as CountriesResult,
    executeOnMount: true,
  });

  const { data: scotsData } = useFetch<
    CountriesResult,
    { result: { records: { Deaths: number; CumulativeCases: number; Date: string }[] } }
  >(
    'https://www.opendata.nhs.scot/api/3/action/datastore_search?resource_id=287fc645-4352-4477-9c8c-55bc054b7e76&limit=1000&sort=Date%20desc',
    {
      fetchType: 'fetchJsonp',
      executeOnMount: true,
      initialState: {} as CountriesResult,
      accumulator: (acc, current) => {
        const scotlandStats: DayStatistics[] = [];
        for (const record of current.result.records.reverse()) {
          const rawDate = record.Date.toString();
          const date = `${rawDate.substr(0, 4)}-${rawDate.substr(4, 2)}-${rawDate.substr(6, 2)}`;

          scotlandStats.push({
            date,
            deaths: record.Deaths,
            recovered: 0,
            confirmed: record.CumulativeCases,
          });
        }

        acc.SCO = {
          data: transform({ result: scotlandStats }, countryData.SCO),
          color: countryData.SCO.color,
          name: countryData.SCO.longName,
        };

        return acc;
      },
    },
  );

  useEffect(() => {
    if (!!finalData || !scotsData?.SCO?.data?.length || !data?.GBR?.data?.length) {
      return;
    }

    const recognisedDates = data?.GBR?.data.map((x) => x.x) || [];

    scotsData.SCO.data = scotsData.SCO.data.filter((d) => recognisedDates.includes(d.x));

    setFinalData({ ...data, ...scotsData });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.GBR?.data?.length, scotsData?.SCO?.data?.length]);

  return { data: finalData };
};
