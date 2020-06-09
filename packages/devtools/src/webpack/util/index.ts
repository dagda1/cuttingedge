import { exec as spawn } from 'child_process';

export const run = (cmd: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const command = spawn(`${cmd}`);
    let result = '';
    command.stdout.on('data', function (data) {
      result += data.toString();
    });
    command.on('close', function () {
      resolve(result);
    });
    command.on('error', function (err) {
      console.error(console.error());
      reject(err);
    });
  });
};
