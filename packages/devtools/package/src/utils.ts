import fs from 'fs';

type FN = (line: string) => void;

export function readLines<F extends FN>(path: string, func: F): Promise<void> {
  return new Promise((resolve, reject) => {
    const input = fs.createReadStream(path);
    let remaining = '';

    input.on('data', function (data) {
      remaining += data;
      let index = remaining.indexOf('\n');
      while (index > -1) {
        const line = remaining.substring(0, index);
        remaining = remaining.substring(index + 1);
        func(line);
        index = remaining.indexOf('\n');
      }
    });

    input.on('end', function () {
      if (remaining.length > 0) {
        func(remaining);
      }

      resolve();
    });

    input.on('error', (err) => {
      reject(err);
      console.error(err);
    });
  });
}
