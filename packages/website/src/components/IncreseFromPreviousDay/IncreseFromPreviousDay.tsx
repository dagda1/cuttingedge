import type { FC } from 'react';
import { useCountryCovidData } from 'src/components/Graphs/useCountryCovidData';
import Graph from 'src/components/Graphs/Graph';
import dayjs from 'dayjs';
import { Countries } from '../Graphs/types';

export const IncreseFromPreviousDay: FC = () => {
  const result = useCountryCovidData();
  const data = result.data;

  if (data) {
    for (const c of Object.keys(data)) {
      const country = data[c as Countries];
      country.data = country.result.map((d) => {
        const delta = (d.deltaDeaths / country.population) * 100000;

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
      labels={({ datum }: { datum: any }) => {
        return `${dayjs(datum?.x).format('DD/MM/YY')}\n deaths cases = ${datum.deaths}\n delta from day before = ${
          datum.deltaDeaths
        }`;
      }}
    />
  );
};
