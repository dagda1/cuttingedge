import type { FC } from 'react';
import { useCountryCovidData } from 'src/components/Graphs/useCountryCovidData';
import Graph from 'src/components/Graphs/Graph';
import regression from 'regression';
import { Countries } from '../Graphs';
import dayjs from 'dayjs';

export const RateOfChange: FC = () => {
  const result = useCountryCovidData({ startDate: '2020-01-01' });

  if (!result?.data?.BRA) {
    return null;
  }

  const dates: string[] = result.data['BRA']?.result.map((x) => dayjs(x.x).format('DD/MM'));

  for (const c of Object.keys(result.data)) {
    const country = result.data?.[c as Countries];

    country.data = regression
      .logarithmic([
        ...country.result.map((d) => {
          return [d.index, d.deltaDeaths] as [number, number];
        }),
      ])
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .points.map(([x, y], i) => ({ x: x - 1, y: i === 0 ? 0 : y < 0 ? 0 : y })) as any;
  }

  return (
    <Graph
      heading="Rate of change of reported deaths"
      xAxisLabel="Days since first reported death"
      yAxisLabel="Daily increase in deaths"
      result={result}
      xTickFormat={(i) => {
        return dates[Number(i)];
      }}
    />
  );
};
