import type { FC } from 'react';
import { useCountryCovidData, countryData, Countries } from 'src/components/Graphs';
import Graph from 'src/components/Graphs/Graph';
import dayjs from 'dayjs';

export const Deaths: FC = () => {
  const result = useCountryCovidData();

  if (result.data) {
    for (const c of Object.keys(result.data)) {
      const countryCode = c as Countries;
      const country = result.data?.[countryCode];

      country.data = country.data.map((d) => ({
        ...d,
        deaths: d.y,
        y: (d.y / countryData[countryCode].population) * 100000,
      }));
    }
  }

  return (
    <Graph
      heading="Total deaths"
      yAxisLabel="Total deaths (per 100,000 people)"
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
