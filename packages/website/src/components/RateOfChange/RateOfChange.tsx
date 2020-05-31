import React from 'react';
import { useCountryCovidData } from 'src/components/Graphs/useCountryCovidData';
import Graph from 'src/components/Graphs/Graph';
import regression from 'regression';
declare const __BROWSER__: any;

export const RateOfChange: React.FC = () => {
  if (!__BROWSER__) {
    return null;
  }

  const result = useCountryCovidData({ startDate: '2020-01-01' });

  if (result.data) {
    Object.keys(result.data).forEach((c) => {
      const country = result.data![c];

      country.data = regression
        .exponential([
          ...country.result.map((d: any, i: number) => {
            return [i, d.deltaDeaths <= 0 ? 0.00000000001 : d.deltaDeaths];
          }),
        ])
        .points.map(([x, y]) => ({ x, y }));
    });
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
