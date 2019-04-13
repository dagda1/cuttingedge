import universal from 'react-universal-component';
import importCss from 'babel-plugin-universal-import/importCss';

export interface UniversalProps {
  page: any;
}

const load = (props: UniversalProps) =>
  Promise.all([import(/* webpackChunkName: '[request]' */ `./${props.page}`), importCss(props.page)]).then(
    (proms) => proms[0]
  );

export const UniversalComponent = universal(load, {
  chunkName: (props) => props.page,
  resolve: (props) => (require as any).resolveWeak(`../${props.page}`)
});
