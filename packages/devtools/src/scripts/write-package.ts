import fs from 'fs';

export const writeToPackage = <D>(filename: string, data: D): Promise<void> => {
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
