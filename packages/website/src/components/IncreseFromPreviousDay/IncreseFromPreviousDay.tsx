import React from 'react';
import { useCountryCovidData } from 'src/components/Graphs/useCountryCovidData';
import Graph from 'src/components/Graphs/Graph';
import dayjs from 'dayjs';

export const IncreseFromPreviousDay: React.FC = () => {
  const { data } = useCountryCovidData();

  if (data) {
    Object.keys(data).forEach(c => {
      data[c];
      data[c].data = data[c].data.map((d: any) => ({
        ...d,
        deaths: d.y,
        y: d.delta,
      }));
    });
  }

  return (
    <Graph
      title="Daily Increase in deaths"
      xAxisLabel="Days since first reported death"
      yAxisLabel="Increase in deaths from previous day"
      data={data as any}
      labels={({ datum }) =>
        `${dayjs(datum?.x).format('DD/MM/YY')}\n deaths = ${
          datum.deaths
        }\n delta from day before = ${datum.delta}`
      }
    />
  );
};
