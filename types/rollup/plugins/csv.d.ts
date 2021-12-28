import { PluginImpl } from 'rollup';
export declare type CSVOptions = {
  dynamicTyping: boolean;
  header: boolean;
  skipEmptyLines: boolean;
  include: string | RegExp | (string | RegExp)[];
  exclude: string | RegExp | (string | RegExp)[];
};
export declare const csv: PluginImpl;
//# sourceMappingURL=csv.d.ts.map
