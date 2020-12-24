// https://www.nationsonline.org/oneworld/country_code_list.htm
export type Countries = 'BRA' | 'ITA' | 'GBR' | 'ESP' | 'FRA' | 'USA' | 'SWE' | 'IND';

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
};

export const countryData: CountriesData = {
  FRA: {
    longName: 'France',
    color: '#9400D3',
    population: 66900000,
  },
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
    color: '#00FF00',
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
  IND: {
    longName: 'India',
    color: '#FF0000',
    population: 1353000000000,
  },
  GBR: {
    longName: 'UK',
    color: 'cyan',
    population: 67000000,
  },
};
export const AxisColor = '#fff';
