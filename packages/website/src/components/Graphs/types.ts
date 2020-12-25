// https://www.nationsonline.org/oneworld/country_code_list.htm
export type Countries = 'BRA' | 'ITA' | 'GBR' | 'ESP' | 'USA' | 'SWE';

export type CountryData = {
  longName: string;
  color: string;
  population: number;
};

export type CountriesData = {
  [key in Countries]: CountryData;
};

export type DayStatistics = {
  confirmed: number;
  deaths: number;
  recovered: number;
  date: string;
};

export type CountryStats = {
  count: number;
  result: DayStatistics[];
};

export type Stats = {
  [country in Countries]: CountryStats;
};

export type DayData = {
  delta: number;
  x: number | string;
  y: number;
  index: number;
  country: CountryData;
  deltaDeaths: number;
  population: number;
  deaths: number;
};

export const countryData: CountriesData = {
  ITA: {
    longName: 'Italy',
    color: '#016CD0',
    population: 60000000,
  },
  BRA: {
    longName: 'Brazil',
    color: '#FFFF00',
    population: 210000000,
  },
  ESP: {
    longName: 'Spain',
    color: '#FF0000',
    population: 47000000,
  },
  USA: {
    longName: 'USA',
    color: '#fff',
    population: 383000000,
  },
  SWE: {
    longName: 'Sweden',
    color: '#ffa500',
    population: 11000000,
  },
  GBR: {
    longName: 'UK',
    color: 'cyan',
    population: 67000000,
  },
};
export const AxisColor = '#fff';
