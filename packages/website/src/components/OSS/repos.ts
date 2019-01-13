export interface Repo {
  name: string;
  description: string;
  link: string;
}

export const repos: Repo[] = [
  {
    name: 'react-typed-mousetrap',
    description: 'Declaratively manage keyboard shortcuts on react components.',
    link: 'https://github.com/dagda1/cuttingedge/tree/master/packages/react-typed-mousetrap'
  },
  {
    name: 'styled-gel',
    description: 'Styled-components responsive flexbox grid',
    link: 'https://github.com/dagda1/styled-gel'
  },
  { name: 'cuttingedge', description: 'Source code for this site', link: 'https://github.com/dagda1/cuttingedge' },
  {
    name: 'knex-csv',
    description: 'Add transformations to a csv upload',
    link: 'https://github.com/dagda1/knex-csv-transformer'
  }
];
