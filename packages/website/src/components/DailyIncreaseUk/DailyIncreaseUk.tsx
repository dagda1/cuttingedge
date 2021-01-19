import type { FC } from 'react';
import { useCountryCovidData } from 'src/components/Graphs/useCountryCovidData';
import Graph from 'src/components/Graphs/Graph';
import dayjs from 'dayjs';
import { Countries, CountryData, DayData } from '../Graphs/types';
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
  }[];
};

export const DailyIncreaseUk: FC = () => {
  const result = useCountryCovidData();

  if (result.data?.GBR) {
    const countries = {
      GBR: result.data.GBR,
      SCO: result.data.SCO,
    };
    for (const c of Object.keys(countries)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const country: ExtendedCountry = (countries as any)?.[c as Countries];
      assert(!!country, `no country found for ${c}`);
      country.data = country.result.map((d) => {
        return {
          ...d,
          y: d.deltaDeaths <= 0 ? 0 : d.deltaDeaths,
        };
      });
    }
  }

  return (
    <Graph
      heading="Daily Increase in UK and Scotland deaths"
      xAxisLabel="Days since first reported death"
      yAxisLabel="Increase in deaths from previous day"
      result={result}
      labels={({ datum }) => {
        return `${dayjs(datum?.x).format('DD/MM/YY')}\n total deaths = ${datum.deaths}\n daily increase = ${
          datum.deltaDeaths
        }`;
      }}
    />
  );
};
