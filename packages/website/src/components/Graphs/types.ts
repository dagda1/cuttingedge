import { useCountryCovidData } from './useCountryCovidData';

// https://www.nationsonline.org/oneworld/country_code_list.htm
export enum Countries {
  Canada = 'Can',
  // China = 'CHN',
  Ireland = 'IRL',
  IT = 'ITA',
  GB = 'GBR',
  Spain = 'ESP',
  Sweden = 'SWE',
  USA = 'USA',
}

export type CountryData = {
  [key in Countries]: {
    longName: string;
    color: string;
  };
};

export type DayStatistics = {
  confirmed: number;
  deaths: number;
  recovered: number;
  date: string;
};

export type Results = {
  count: number;
  result: DayStatistics[];
};

export type DayData = {
  x: string;
  y: number;
  country: Countries;
};

export type CovidGraphData = ReturnType<typeof useCountryCovidData>;

export const countryData: CountryData = {
  [Countries.Canada]: {
    longName: 'Canada',
    color: 'red',
  },
  [Countries.Sweden]: {
    longName: 'Sweden',
    color: 'purple',
  },

  [Countries.IT]: {
    longName: 'Italy',
    color: '#016CD0',
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
  [Countries.GB]: {
    longName: 'UK',
    color: 'cyan',
  },
};
export const AxisColor = '#fff';
