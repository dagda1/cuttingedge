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
          ...data[c].result.map((d: any, i: number) => {
            return [i, d.delta <= 0 ? 1 : d.delta];
          }),
        ])
        .points.map(([x, y]) => ({ x, y }));
    });
  }

  if (!data || isNaN((data as any).CAN.data[0].y)) {
    return null;
  }

  return (
    <Graph
      heading="Rate of change"
      title="Rate of change of confirmed cases"
      xAxisLabel="Days since first reported death"
      yAxisLabel="Increase in confirmed from previous day"
      data={data as any}
      labels={({ datum }) => `delta from day before = ${Math.round(datum.y)}`}
      tickFormat={t => `-   ${t}`}
    />
  );
};
