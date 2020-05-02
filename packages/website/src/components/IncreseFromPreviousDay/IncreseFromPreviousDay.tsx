import React from 'react';
import { useCountryCovidData } from 'src/components/Graphs/useCountryCovidData';
import Graph from 'src/components/Graphs/Graph';
import dayjs from 'dayjs';
import { countryData } from '../Graphs/types';

export const IncreseFromPreviousDay: React.FC = () => {
  const result = useCountryCovidData();

  if (result.data) {
    Object.keys(result.data).forEach(c => {
      const country = result.data![c];
      country.data = country.result.map((d: any) => ({
        ...d,
        y: (d.deltaDeaths / countryData[c].population) * 100000,
      }));
    });
  }

  return (
    <Graph
      heading="Daily Increase in deaths"
      xAxisLabel="Days since first reported death"
      yAxisLabel="Increase in deaths from previous day (per 100000 people)"
      result={result}
      labels={({ datum }) => {
        console.log(datum);
        return `${dayjs(datum?.x).format('DD/MM/YY')}\n deaths cases = ${
          datum.deaths
        }\n delta from day before = ${datum.deltaDeaths}`;
      }}
    />
  );
};
