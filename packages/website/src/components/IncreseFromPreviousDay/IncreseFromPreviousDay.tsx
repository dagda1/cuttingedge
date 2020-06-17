import React from 'react';
import { useCountryCovidData } from 'src/components/Graphs/useCountryCovidData';
import Graph from 'src/components/Graphs/Graph';
import dayjs from 'dayjs';
import { countryData } from '../Graphs/types';

export const IncreseFromPreviousDay: React.FC = () => {
  const result = useCountryCovidData();

  if (result.data) {
    Object.keys(result.data).forEach((c) => {
      const country = result.data![c];
      country.data = country.result
        .map((d: any) => {
          const delta = (d.deltaDeaths / countryData[c].population) * 100000;

          return {
            ...d,
            y: delta <= 0 ? 0 : delta,
          };
        })
        .filter((_: any, i: number) => i === 0 || i % 10 === 0 || i === country.result.length - 1);
    });

    console.log(result.data);
  }

  return (
    <Graph
      heading="Daily Increase in deaths"
      xAxisLabel="Days since first reported death"
      yAxisLabel="Increase in deaths from previous day (per 100000 people)"
      result={result}
      labels={({ datum }) => {
        return `${dayjs(datum?.x).format('DD/MM/YY')}\n deaths cases = ${datum.deaths}\n delta from day before = ${
          datum.deltaDeaths
        }`;
      }}
    />
  );
};
