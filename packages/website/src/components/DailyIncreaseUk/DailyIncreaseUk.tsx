import type { FC } from 'react';
import { useCountryCovidData } from 'src/components/Graphs/useCountryCovidData';
import Graph from 'src/components/Graphs/Graph';
import dayjs from 'dayjs';
import { Countries, CountriesStats, CountryData, DayData } from '../Graphs/types';
import { assert } from 'assert-ts';
import { LoadingOverlay } from '@cutting/component-library';

type ExtendedCountry = {
  result: DayData[];
  color: string;
  name: string;
  population: number;
  data: {
    y: number;
    delta: number;
    x: string | number;
    index: number;
    country: CountryData;
    deltaDeaths: number;
  }[];
};

export const DailyIncreaseUk: FC = () => {
  const result = useCountryCovidData();

  if (typeof result.data?.SCO === 'undefined') {
    return <LoadingOverlay busy={true} />;
  }

  const countries = {
    SCO: result.data.SCO,
  };

  for (const c of Object.keys(countries)) {
    const countryCode = c as Countries;
    const country: ExtendedCountry = (countries as CountriesStats)?.[countryCode];
    assert(!!country, `no country found for ${c}`);
    country.data = country.result.map((d) => {
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
      result={{ isSettled: true, data: countries as CountriesStats }}
      labels={({ datum }) => {
        return `${dayjs(datum?.x).format('DD/M  M/YY')}\n total deaths = ${datum.deaths}\n daily increase = ${
          datum.deltaDeaths
        }`;
      }}
    />
  );
};
