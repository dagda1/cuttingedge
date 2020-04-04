import React from 'react';
import { useCountryCovidData } from 'src/components/Graphs/useCountryCovidData';
import Graph from 'src/components/Graphs/Graph';
import regression from 'regression';

export const RateOfChange: React.FC = () => {
  const { data } = useCountryCovidData();

  if (data) {
    Object.keys(data).forEach(c => {
      data[c].data = regression
        .exponential([
          ...data[c].data.map((d: any) => {
            return [d.x, d.delta == 0 ? 1 : d.delta];
          }),
        ])
        .points.map(([x, y]) => ({ x, y }), { r2: 3 });
    });
  }

  return (
    <Graph
      title="Daily Increase in deaths"
      xAxisLabel="Days since first reported death"
      yAxisLabel="Increase in deaths from previous day"
      data={data as any}
    />
  );
};
