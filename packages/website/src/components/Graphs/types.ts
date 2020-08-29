// https://www.nationsonline.org/oneworld/country_code_list.htm
export enum Countries {
  Canada = 'CAN',
  Brazil = 'BRA',
  IT = 'ITA',
  GB = 'GBR',
  Spain = 'ESP',
  Germany = 'DEU',
  USA = 'USA',
  Sweden = 'SWE',
}

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
  x: any;
  y: number;
  index: number;
  country: CountryData;
};

export const countryData: CountriesData = {
  [Countries.Canada]: {
    longName: 'Canada',
    color: '#FF0000',
    population: 38000000,
  },
  [Countries.Germany]: {
    longName: 'Germany',
    color: '#9400D3',
    population: 84000000,
  },

  [Countries.IT]: {
    longName: 'Italy',
    color: '#016CD0',
    population: 60000000,
  },
  [Countries.Brazil]: {
    longName: 'Brazil',
    color: '#FFFF00',
    population: 210000000,
  },
  [Countries.Spain]: {
    longName: 'Spain',
    color: '#00FF00',
    population: 47000000,
  },
  [Countries.USA]: {
    longName: 'USA',
    color: '#fff',
    population: 383000000,
  },
  [Countries.Sweden]: {
    longName: 'Sweden',
    color: '#ffa500',
    population: 11000000,
  },
  [Countries.GB]: {
    longName: 'UK',
    color: 'cyan',
    population: 67000000,
  },
};
export const AxisColor = '#fff';
