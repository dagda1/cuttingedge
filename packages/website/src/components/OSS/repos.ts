export interface Repo {
  name: string;
  description: string;
  link: string;
}

export const repos: Repo[] = [
  {
    name: 'bigtest',
    description: 'Active contributor to bigtest',
    link: 'https://github.com/thefrontside/bigtest/pulls?q=is%3Amerged+is%3Apr+author%3Adagda1',
  },
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
];
