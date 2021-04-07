// https://www.nationsonline.org/oneworld/country_code_list.htm
// export type Countries = 'BRA' | 'ITA' | 'GBR' | 'USA' | 'SWE' | 'FRA' | 'SCO';

export type Countries = 'GBR' | 'SCO';

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
  // FRA: {
  //   longName: 'France',
  //   color: 'pink',
  //   population: 67000000,
  // },
  // ITA: {
  //   longName: 'Italy',
  //   color: 'purple',
  //   population: 60000000,
  // },
  // BRA: {
  //   longName: 'Brazil',
  //   color: '#FEDF00',
  //   population: 210000000,
  // },
  // USA: {
  //   longName: 'USA',
  //   color: '#BF0A30',
  //   population: 383000000,
  // },
  // SWE: {
  //   longName: 'Sweden',
  //   color: '#038D44',
  //   population: 11000000,
  // },
  SCO: {
    longName: 'Scotland',
    color: '#2C67B7',
    population: 5550000,
  },
  // ESP: {
  //   longName: 'Spain',
  //   color: 'purple',
  //   population: 47000000,
  // },
  GBR: {
    longName: 'UK',
    color: '#fff',
    population: 67000000,
  },
};

export type CountriesStats = {
  [key in Countries]: {
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
      population: number;
    }[];
  };
};

export const AxisColor = '#fff';
