import { createFilter } from '@rollup/pluginutils';
import Papa from 'papaparse';
export const csv = () => {
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
//# sourceMappingURL=csv.js.map