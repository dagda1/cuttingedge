import { PluginImpl } from 'rollup';
import { createFilter } from '@rollup/pluginutils';
import Papa from 'papaparse';

export type CSVOptions = {
  dynamicTyping: boolean;
  header: boolean;
  skipEmptyLines: boolean;
  include: string | RegExp | (string | RegExp)[];
  exclude: string | RegExp | (string | RegExp)[];
};

export const csv: PluginImpl = () => {
  const filter = createFilter('**/*.csv');

  return {
    name: 'csv',

    transform(code, id) {
      if (!filter(id)) {
        return null;
      }

      const parsed = Papa.parse(code, {
        header: true,
        skipEmptyLines: true,
      });

      return {
        code: `export default ${JSON.stringify(parsed.data)};`,
        map: { mappings: '' },
      };
    },
  };
};
