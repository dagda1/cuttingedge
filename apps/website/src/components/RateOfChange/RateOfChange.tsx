import { useCountryCovidData } from '../../components/Graphs/useCountryCovidData';
import Graph from '../../components/Graphs/Graph';
import regression from 'regression';
import type { Countries } from '../Graphs';
import dayjs from 'dayjs';

export function RateOfChange(): JSX.Element {
  const result = useCountryCovidData({ startDate: '2020-01-01' });

  const dates: string[] = result?.data?.GBR?.data.map((x) => dayjs(x.x).format('DD/MM')) || [];

  if (result.data) {
    for (const c of Object.keys(result.data)) {
      const country = result.data?.[c as Countries];

      country.data.shift();

      country.data = regression
        .logarithmic([
          ...country.data.map((d) => {
            return [d.index, d.deltaDeaths] as [number, number];
          }),
        ])
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .points.map(([x, y], i) => ({ x: x - 1, y: i <= 0 ? 0 : y })) as any;
    }
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      yTickFormat={() => ''}
    />
  );
}
