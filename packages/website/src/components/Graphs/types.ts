import { useCountryCovidData } from './useCountryCovidData';

// https://www.nationsonline.org/oneworld/count ry_code_list.htm
export enum Countries {
  China = 'CHN',
  IT = 'ITA',
  GB = 'GBR',
  USA = 'USA',
  Spain = 'ESP',
  Ireland = 'IRL',
}

export type CountryData = {
  [key in Countries]: {
    longName: string;
      color: string;
  };
};

export type Result = { confirmed: number; deaths: number; recovered: number };

export type Results = {
  count: number;
  result: Result;
};

export type DayData = {
  x: number;
  y: number;
  country: Countries;
};

export type CovidGraphData = ReturnType<typeof useCountryCovidData>;

export const countryData: CountryData = {
  [Countries.China]: {
    longName: 'China',
    color: 'red',
  },
  [Countries.IT]: {
    longName: 'Italy',
    color: '#016CD0',
  },
  [Countries.GB]: {
    longName: 'UK',
    color: 'cyan',
  },
  [Countries.Ireland]: {
    longName: 'Ireland',
    color: '#169B62',
  },
  [Countries.Spain]: {
    longName: 'Spain',
    color: 'yellow',
  },
  [Countries.USA]: {
    longName: 'USA',
    color: '#fff',
  },
};
export const AxisColor = '#fff';
