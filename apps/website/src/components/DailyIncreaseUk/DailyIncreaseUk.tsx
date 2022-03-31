import { useCountryCovidData } from '../../components/Graphs/useCountryCovidData';
import Graph from '../../components/Graphs/Graph';
import dayjs from 'dayjs';
import type { Countries, CountriesResult } from '../Graphs/types';
import { assert } from 'assert-ts';
import { LoadingOverlay } from '@cutting/component-library';

export function DailyIncreaseUk(): JSX.Element {
  const result = useCountryCovidData();

  if (typeof result.data?.SCO === 'undefined') {
    return <LoadingOverlay busy={true} darkMode={true} />;
  }

  const countries = {
    SCO: result.data.SCO,
  };

  for (const c of Object.keys(countries)) {
    const countryCode = c as Countries;
    const country = (countries as CountriesResult)?.[countryCode];
    assert(!!country, `no country found for ${c}`);
    country.data = country.data.map((d) => {
      return {
        ...d,
        y: d.deltaDeaths <= 0 ? 0 : d.deltaDeaths,
      };
    });
  }

  return (
    <Graph
      heading="Daily Increase in Scottish deaths"
      xAxisLabel="Days since first reported death"
      yAxisLabel="Increase in deaths from previous day"
      result={{ data: countries as CountriesResult }}
      labels={({ datum }) => {
        return `${dayjs(datum?.x).format('DD/M  M/YY')}\n total deaths = ${datum.deaths}\n daily increase = ${
          datum.deltaDeaths
        }`;
      }}
    />
  );
}
