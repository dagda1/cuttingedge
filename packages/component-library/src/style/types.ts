import { Properties } from 'csstype';
import { simplePseudos } from './simple-pseudos';

export type BasicCSSProperties = Properties<string | number>;
export type SimplePseudos = typeof simplePseudos;
export interface CSSKeyframes {
  [time: string]: BasicCSSProperties;
}
type CSSProperties = BasicCSSProperties & {
  '@keyframes'?: CSSKeyframes | string;
};
type PseudoProperties = {
  [key in SimplePseudos[number]]?: CSSProperties;
};

type CSSPropertiesAndPseudos = CSSProperties & PseudoProperties;

interface SelectorMap {
  [selector: string]: CSSProperties;
}

export interface StyleWithSelectors extends CSSPropertiesAndPseudos {
  selectors?: SelectorMap;
}
export interface MediaQueries<StyleType> {
  '@media'?: {
    [query: string]: StyleType;
  };
}
export interface FeatureQueries<StyleType> {
  '@supports'?: {
    [query: string]: StyleType;
  };
}
export type Style = StyleWithSelectors & MediaQueries<StyleWithSelectors> & FeatureQueries<StyleWithSelectors>;
