// https://www.nationsonline.org/oneworld/country_code_list.htm
export type Countries = 'ITA' | 'GBR' | 'USA' | 'SWE' | 'SCO' | 'TUR' | 'IND';

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

export type CountryResult = { color: string; name: string; data: DayData[] };

export type CountriesResult = Record<Countries, CountryResult>;

export const countryData: CountriesData = {
  // DEU: {
  //   longName: 'Germany',
  //   color: '#038D44',
  //   population: 83000000,
  // },
  TUR: {
    longName: 'Turkey',
    color: '#038D44',
    population: 82000000,
  },
  // FRA: {
  //   longName: 'France',
  //   color: 'pink',
  //   population: 67000000,
  // },
  ITA: {
    longName: 'Italy',
    color: '#99ccff',
    population: 60000000,
  },
  // BRA: {
  //   longName: 'Brazil',
  //   color: '#FEDF00',
  //   population: 210000000,
  // },
  IND: {
    longName: 'India',
    color: '#964B00',
    population: 1366000000,
  },
  USA: {
    longName: 'USA',
    color: '#BF0A30',
    population: 383000000,
  },
  SWE: {
    longName: 'Sweden',
    color: '#FEDF00',
    population: 11000000,
  },
  SCO: {
    longName: 'Scotland',
    color: '#2C67B7',
    population: 5550000,
  },
  // ESP: {
  //   longName: 'Spain',
  //   color: '#00FF00',
  //   population: 47000000,
  // },
  GBR: {
    longName: 'UK',
    color: '#fff',
    population: 67000000,
  },
};

export const AxisColor = '#fff';
