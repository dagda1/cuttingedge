import fs from 'fs';
export const writeToPackage = (filename, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, JSON.stringify(data, null, 2), function (err) {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
};
//# sourceMappingURL=write-package.js.map