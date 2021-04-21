export interface Repo {
  name: string;
  description: string;
  link: string;
}

export const repos: Repo[] = [
  {
    name: '@cutting/react-abortable-fetch',
    description: 'The useQuery I needed',
    link: 'https://github.com/dagda1/cuttingedge/tree/master/packages/react-abortable-fetch',
  },
  {
    name: 'use-shortcuts',
    description: 'Effortlessly create keyboard shortcuts with this react hook.',
    link: 'https://github.com/dagda1/cuttingedge/tree/master/packages/use-shortcuts',
  },
  {
    name: 'use-mathjax',
    description: 'easy mathjax in react',
    link: 'https://github.com/dagda1/cuttingedge/tree/master/packages/use-mathjax',
  },
  {
    name: 'bigtest',
    description: 'Active contributor to bigtest',
    link: 'https://github.com/thefrontside/bigtest/pulls?q=is%3Amerged+is%3Apr+author%3Adagda1',
  },
];
