import React from 'react';
import { useCountryCovidData } from 'src/components/Graphs';
import Graph from 'src/components/Graphs/Graph';

export const Deaths: React.FC = () => {
  const { data } = useCountryCovidData();

  return (
    <Graph
      title="Number of deaths from first reported death"
      yAxisLabel="Number of deaths"
      xAxisLabel="days since first reported death"
      data={data as any}
    />
  );
};
