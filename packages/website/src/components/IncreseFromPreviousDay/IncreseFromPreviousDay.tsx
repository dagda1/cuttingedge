import React from 'react';
import { useCountryCovidData } from 'src/components/Graphs/useCountryCovidData';
import Graph from 'src/components/Graphs/Graph';
import dayjs from 'dayjs';
import { countryData } from '../Graphs/types';

export const IncreseFromPreviousDay: React.FC = () => {
  const result = useCountryCovidData({ startDate: '2020-03-01' });

  if (result.data) {
    Object.keys(result.data).forEach(c => {
      const country = result.data![c];
      country.data = country.result.map((d: any) => ({
        ...d,
        confirmed: d.y,
        y: (d.delta / countryData[c].population) * 100000,
      }));
    });
  }

  return (
    <Graph
      heading="Daily Increase in confirmed cases"
      xAxisLabel="Days since first reported death"
      yAxisLabel="Increase in confirmed cases from previous day (Normalised per 100000 people)"
      result={result}
      labels={({ datum }) => {
        return `${dayjs(datum?.x).format('DD/MM/YY')}\n confirmed cases = ${
          datum.confirmed
        }\n delta from day before = ${datum.delta}`;
      }}
    />
  );
};
