import React from 'react';
import { useCountryCovidData, countryData } from 'src/components/Graphs';
import Graph from 'src/components/Graphs/Graph';
import dayjs from 'dayjs';
declare const __BROWSER__: any;

export const Deaths: React.FC = () => {
  if (true) {
    return null;
  }
  const result = useCountryCovidData();

  if (result.data) {
    Object.keys(result.data).forEach((c) => {
      const country = result.data![c];
      country.data = country.result.map((d: any) => ({
        ...d,
        deaths: d.y,
        y: (d.y / countryData[c].population) * 100000,
      }));
    });
  }

  return (
    <Graph
      heading="Number of deaths"
      yAxisLabel="Number of deaths (per 100000 people)"
      xAxisLabel="days since first reported death"
      result={result}
      labels={({ datum }) =>
        `${dayjs(datum?.x).format('DD/MM/YY')}\n deaths = ${Math.round(datum.deaths)}\n delta from day before = ${
          datum.delta
        }`
      }
    />
  );
};
