import React from 'react';
import { useCountryCovidData } from 'src/components/Graphs/useCountryCovidData';
import Graph from 'src/components/Graphs/Graph';

export const IncreseFromPreviousDay: React.FC = () => {
  const { data } = useCountryCovidData();

  if (data) {
    console.log(Object.keys(data));

    Object.keys(data).forEach(c => {
      data[c];
      data[c].data = data[c].data.map((d: any) => ({ ...d, y: d.delta }));
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
