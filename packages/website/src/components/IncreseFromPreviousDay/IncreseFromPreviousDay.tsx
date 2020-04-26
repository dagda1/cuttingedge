import React from 'react';
import { useCountryCovidData } from 'src/components/Graphs/useCountryCovidData';
import Graph from 'src/components/Graphs/Graph';
import dayjs from 'dayjs';
import { countryData } from '../Graphs/types';

export const IncreseFromPreviousDay: React.FC = () => {
  const { data } = useCountryCovidData({ startDate: '2020-03-01' });

  if (data) {
    Object.keys(data).forEach(c => {
      data[c];
      data[c].data = data[c].result.map((d: any) => ({
        ...d,
        confirmed: d.y,
        y: (d.delta / countryData[c].population) * 100000,
      }));
    });
  }

  return (
    <Graph
      heading="Increase in confirmed cases"
      title="Daily Increase in confirmed cases"
      xAxisLabel="Days since first reported death"
      yAxisLabel="Increase in confirmed cases from previous day"
      data={data as any}
      labels={({ datum }) => {
        return `${dayjs(datum?.x).format('DD/MM/YY')}\n confirmed cases = ${
          datum.confirmed
        }\n delta from day before = ${datum.delta}`;
      }}
    />
  );
};
