import React from 'react';
import { useCountryCovidData } from 'src/components/Graphs/useCountryCovidData';
import Graph from 'src/components/Graphs/Graph';
import regression from 'regression';

export const RateOfChange: React.FC = () => {
  const { data } = useCountryCovidData({ startDate: '2020-02-01' });

  if (data) {
    Object.keys(data).forEach(c => {
      data[c].data = regression
        .exponential([
          ...data[c].data.map((d: any, i: number) => {
            return [i, d.delta <= 0 ? 1 : d.delta];
          }),
        ])
        .points.map(([x, y]) => ({ x, y }));
    });
  }

  return (
    <Graph
      title="Rate of change"
      xAxisLabel="Days since first reported death"
      yAxisLabel="Increase in confirmed from previous day"
      data={data as any}
      labels={({ datum }) => `delta from day before = ${Math.round(datum.y)}`}
      tickFormat={t => `-   ${t}`}
    />
  );
};
