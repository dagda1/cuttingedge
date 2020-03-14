export interface Repo {
  name: string;
  description: string;
  link: string;
}

export const repos: Repo[] = [
  {
    name: 'use-shortcuts',
    description: 'Effortlessly create keyboard shortcuts with this react hook.',
    link: 'https://github.com/dagda1/cuttingedge/tree/master/packages/use-shortcuts',
  },
  {
    name: '@cutting/hooks',
    description: 'Useful reusable hooks',
    link: 'https://github.com/dagda1/cuttingedge/tree/master/packages/hooks',
  },
  {
    name: 'cuttingedge',
    description: 'Source code for this site. SSR, code splitting , hot reloading etc....',
    link: 'https://github.com/dagda1/cuttingedge',
  },
  {
    name: 'styled-gel',
    description: 'Styled-components responsive flexbox grid',
    link: 'https://github.com/dagda1/styled-gel',
  },
];
