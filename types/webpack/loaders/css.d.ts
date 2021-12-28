import { RuleSetRule, NewLoader } from 'webpack';
export declare const cssLoaders: (
  isDevelopment: boolean,
  isProduction: boolean,
  isNode: boolean,
  {
    modules,
    importLoaders,
  }: {
    modules: boolean;
    importLoaders: number;
  },
) => NewLoader[];
export declare const createCSSLoaders: ({
  isDevelopment,
  isProduction,
  isNode,
}: {
  isDevelopment: boolean;
  isProduction: boolean;
  isNode: boolean;
}) => RuleSetRule[];
//# sourceMappingURL=css.d.ts.map
