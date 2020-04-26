import React from 'react';
import { useCountryCovidData, countryData } from 'src/components/Graphs';
import Graph from 'src/components/Graphs/Graph';
import dayjs from 'dayjs';

export const Deaths: React.FC = () => {
  const result = useCountryCovidData({ startDate: '2020-03-10' });

  if (result.data) {
    Object.keys(result.data).forEach(c => {
      const country = result.data![c];
      country.data = country.result.map((d: any) => ({
        ...d,
        y: (d.y / countryData[c].population) * 100000,
      }));
    });
  }

  return (
    <Graph
      heading="Confirmed Cases"
      title="Number of confirmed cases (normalised per 100000 people)"
      yAxisLabel="Number of confirmed (per 100000 people)"
      xAxisLabel="days since first reported death"
      result={result}
      labels={({ datum }) =>
        `${dayjs(datum?.x).format('DD/MM/YY')}\n confirmed = ${Math.round(
          datum.y,
        )}\n delta from day before = ${datum.delta}`
      }
    />
  );
};
