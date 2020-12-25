import type { FC } from 'react';
import { useCountryCovidData } from 'src/components/Graphs/useCountryCovidData';
import Graph from 'src/components/Graphs/Graph';
import dayjs from 'dayjs';
import { Countries, CountryData, countryData, DayData } from '../Graphs/types';
import { assert } from 'assert-ts';

type ExtendedCountry = {
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

export const IncreseFromPreviousDay: FC = () => {
  const result = useCountryCovidData();

  if (result.data) {
    for (const c of Object.keys(result.data)) {
      const country: ExtendedCountry = result.data?.[c as Countries];
      assert(!!country, `no country found fro ${c}`);
      country.data = country.result.map((d) => {
        const delta = (d.deltaDeaths / countryData[c as Countries].population) * 100000;

        if (isNaN(delta)) {
          console.log({ d, c, country, delta });
        }

        return {
          ...d,
          y: delta <= 0 ? 0 : delta,
        };
      });
    }
  }

  return (
    <Graph
      heading="Daily Increase in deaths"
      xAxisLabel="Days since first reported death"
      yAxisLabel="Increase in deaths from previous day (per 100000 people)"
      result={result}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      labels={({ datum }) => {
        return `${dayjs(datum?.x).format('DD/MM/YY')}\n deaths cases = ${datum.deaths}\n delta from day before = ${
          datum.deltaDeaths
        }`;
      }}
    />
  );
};
