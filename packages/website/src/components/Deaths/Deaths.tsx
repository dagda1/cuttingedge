import React from 'react';
import { useCountryCovidData, countryData } from 'src/components/Graphs';
import Graph from 'src/components/Graphs/Graph';
import dayjs from 'dayjs';

export const Deaths: React.FC = () => {
  const { data } = useCountryCovidData();

  if (data) {
    Object.keys(data).forEach(c => {
      data[c].data = data[c].data.map((d: any) => ({
        ...d,
        y: (d.y / countryData[c].population) * 100000,
      }));
    });
  }

  return (
    <Graph
      title="Number of deaths from first reported death"
      yAxisLabel="Number of deaths (per 100000 people)"
      xAxisLabel="days since first reported death"
      data={data as any}
      labels={({ datum }) =>
        `${dayjs(datum?.x).format('DD/MM/YY')}\n deaths = ${Math.round(
          datum.y,
        )}\n delta from day before = ${datum.delta}`
      }
    />
  );
};
