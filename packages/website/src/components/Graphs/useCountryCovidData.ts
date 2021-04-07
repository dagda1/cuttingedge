import { CountryStats, DayData, CountryData, CountriesStats, countryData, Countries, DayStatistics } from './types';
import { useAbort } from '@cutting/use-abort';
import dayjs from 'dayjs';
import { uniqBy } from '@cutting/util';
import utc from 'dayjs/plugin/utc';
import urlJoin from 'url-join';
import assert from 'assert-ts';

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

  const result = data
    .map((d, i) => {
      return {
        ...d,
        delta: i === 0 ? 0 : d.confirmed - data[i - 1].confirmed,
        deltaDeaths: i === 0 ? 0 : d.y - data[i - 1].y,
      };
    })
    .filter((d, i) => {
      const diff = dayjs().diff(dayjs(d.x), 'd');
      return diff <= 10 || i % BreakPoint === 0 || i === data.length - 1;
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
): { data: CountriesStats | undefined; isSettled: boolean } => {
  const urls = Object.keys(countryData)
    .filter((c) => c !== 'SCO')
    .map((c) => urlJoin(baseUrl, c.toUpperCase(), 'timeseries', startDate, dayjs().format('YYYY-MM-DD')));

  const { data, isSettled } = useAbort<CountryStats, CountriesStats>(urls, {
    accumulator: (acc, current, info) => {
      current.result = uniqBy(current.result, (a) => a.date);

      assert(typeof info === 'string', `unexpected info ${info}`);

      const country = info.split('/')[6] as Countries;

      const countryDetails = countryData[country];

      acc[country] = {
        result: transform(current, countryDetails),
        color: countryDetails.color,
        name: countryDetails.longName,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;

      return acc;
    },
    initialData: {} as CountriesStats,
    executeOnload: true,
  });

  // const recognisedDates = data?.GBR.result.map((x) => x.x);

  const { data: scotsData, isSettled: isScotsSettled } = useAbort(
    'https://www.opendata.nhs.scot/api/3/action/datastore_search?resource_id=287fc645-4352-4477-9c8c-55bc054b7e76&limit=30000',
    {
      fetchType: 'fetchJsonp',
      executeOnload: true,
      initialData: {},
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      accumulator: (acc: any, current: any) => {
        const scotlandStats: DayStatistics[] = [];
        // const recognisedDates = results.GBR.result.map((x) => x.date);
        for (const record of current.result.records) {
          const rawDate = record.Date.toString();
          const date = `${rawDate.substr(0, 4)}-${rawDate.substr(4, 2)}-${rawDate.substr(6, 2)}`;

          scotlandStats.push({
            date,
            deaths: record.Deaths,
            recovered: 0,
            confirmed: record.CumulativeCases,
          });
        }

        const scotland = countryData.SCO;

        acc.SCO = {
          result: transform({ count: scotlandStats.length, result: scotlandStats }, scotland),
          color: scotland.color,
          name: scotland.longName,
        };

        return acc;
      },
    },
  );

  const merged = { ...data, ...scotsData };

  console.dir({ merged });

  return { data: merged, isSettled: isSettled || isScotsSettled };
};
