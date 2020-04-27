import React from 'react';
import { useCountryCovidData } from 'src/components/Graphs/useCountryCovidData';
import Graph from 'src/components/Graphs/Graph';
import regression from 'regression';

export const RateOfChange: React.FC = () => {
  const result = useCountryCovidData({ startDate: '2020-02-01' });

  if (result.data) {
    Object.keys(result.data).forEach(c => {
      const country = result.data![c];

      country.data = regression
        .exponential([
          ...country.result.map((d: any, i: number) => {
            return [i, d.deltaDeaths <= 0 ? 1 : d.deltaDeaths];
          }),
        ])
        .points.map(([x, y]) => ({ x, y }));
    });
  }

  return (
    <Graph
      heading="Rate of change of reported deaths"
      xAxisLabel="Days since first reported death"
      yAxisLabel="Increase in deaths from previous day"
      result={result}
      labels={({ datum }) => `delta from day before = ${Math.round(datum.y)}`}
      xTickFormat={t => `-   ${t}`}
    />
  );
};
