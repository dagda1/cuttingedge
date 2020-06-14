import { exec } from 'child_process';

export const run = (cmd: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const command = exec(cmd);
    let result = '';
    command.stdout.on('data', function (data) {
      result += data.toString();
    });
    command.on('close', function () {
      resolve(result);
    });
    command.on('error', function (err) {
      reject(err);
    });
  });
};
