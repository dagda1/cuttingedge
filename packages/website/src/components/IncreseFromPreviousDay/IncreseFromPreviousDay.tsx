import type { FC } from 'react';
import { useCountryCovidData } from 'src/components/Graphs/useCountryCovidData';
import Graph from 'src/components/Graphs/Graph';
import dayjs from 'dayjs';
import { Countries, countryData, CountryResult } from '../Graphs/types';
import { assert } from 'assert-ts';

export const IncreseFromPreviousDay: FC = () => {
  const result = useCountryCovidData();

  if (result.data) {
    for (const c of Object.keys(result.data)) {
      const country: CountryResult = result.data?.[c as Countries];
      assert(!!country, `no country found for ${c}`);
      country.data = country.data.map((d) => {
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
      yAxisLabel="Increase in deaths from previous day (per 100,000 people)"
      result={result}
      labels={({ datum }) => {
        return `${dayjs(datum?.x).format('DD/MM/YY')}\n total deaths = ${datum.deaths}\n daily increase = ${
          datum.deltaDeaths
        }`;
      }}
    />
  );
};
