import type { FC } from 'react';
import { useCountryCovidData } from 'src/components/Graphs/useCountryCovidData';
import Graph from 'src/components/Graphs/Graph';
import regression from 'regression';
import { Countries } from '../Graphs';

export const RateOfChange: FC = () => {
  const result = useCountryCovidData({ startDate: '2020-01-01' });

  if (!result) {
    return null;
  }

  if (result.data) {
    for (const c of Object.keys(result.data)) {
      const country = result.data?.[c as Countries];

      country.data = regression
        .exponential([
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...country.result.map((d: any, i: number) => {
            return [i, d.deltaDeaths <= 0 ? 0.00000000001 : d.deltaDeaths];
          }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ] as any)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .points.map(([x, y]) => ({ x, y })) as any;
    }
  }

  return (
    <Graph
      heading="Rate of change of reported deaths"
      xAxisLabel="Days since first reported death"
      yAxisLabel=""
      result={result}
      xTickFormat={(t) => `-   ${t}`}
    />
  );
};
