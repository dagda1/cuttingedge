export interface Repo {
  name: string;
  description: string;
  link: string;
}

export const repos: Repo[] = [
  {
    name: 'backstage',
    description: 'Active contributor to backstage',
    link: 'https://github.com/backstage/backstage/pulls?q=is%3Apr+author%3A%40me+is%3Amerged',
  },
  {
    name: 'use-get-parent-size',
    description: `Get resize events of an observed DOM element's height, width etc. from a resize-observer.`,
    link: 'https://github.com/dagda1/cuttingedge/tree/main/packages/react-abortable-fetch',
  },
  {
    name: 'use-mathjax',
    description: 'easy mathjax in react',
    link: 'https://github.com/dagda1/cuttingedge/tree/main/packages/use-mathjax',
  },
  {
    name: 'use-shortcuts',
    description: 'Effortlessly create keyboard shortcuts with this react hook.',
    link: 'https://github.com/dagda1/cuttingedge/tree/main/packages/use-shortcuts',
  },
];
