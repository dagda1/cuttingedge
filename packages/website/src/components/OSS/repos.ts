export interface Repo {
  name: string;
  description: string;
  link: string;
}

export const repos: Repo[] = [
  {
    name: 'styled-gel',
    description: 'Styled-components responsive flexbox grid',
    link: 'https://github.com/dagda1/styled-gel'
  },
  { name: 'd3-geometry', description: 'D3, React and Redux', link: 'https://github.com/dagda1/d3-geometry' },
  { name: 'cuttingedge', description: 'Source code for this site', link: 'https://github.com/dagda1/cuttingedge' },
  {
    name: 'knex-csv',
    description: 'Add transformations to a csv upload',
    link: 'https://github.com/dagda1/knex-csv-transformer'
  }
];
