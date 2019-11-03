import universal from 'react-universal-component';
import importCss from 'babel-plugin-universal-import/importCss';

export interface UniversalProps {
  page: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const load = (props: UniversalProps): Promise<any> =>
  Promise.all([
    import(/* webpackChunkName: '[request]' */ `./${props.page}`),
    importCss(props.page),
  ]).then((proms) => proms[0]);

export const UniversalComponent = universal(load, {
  chunkName: (props) => props.page,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolve: (props) => (require as any).resolveWeak(`../${props.page}`),
});
