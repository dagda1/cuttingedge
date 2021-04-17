import { Operation, Stream } from 'effection';
import type { Process } from '@effection/node';
import { exec } from '@effection/node';
import { sleep } from 'effection';

function writeOut(channel: Stream<string>, out: NodeJS.WriteStream): Operation<undefined> {
  return channel.forEach(function (data) {
    return new Promise((resolve, reject) => {
      out.write(data, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  });
}

function executeAndOut(command: string, cwd: string): Operation<void> {
  return function* (task) {
    const p: Process = exec(`${command}`, { cwd }).run(task);
    task.spawn(writeOut(p.stdout, process.stdout));
    task.spawn(writeOut(p.stderr, process.stderr));
    yield p.expect();
  };
}

export function buildAndRun(pkgCommand: string, command: string, cwd: string, delay = 500): Operation<void> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return function* (scope) {
    try {
      yield executeAndOut(command, cwd);
      yield sleep(delay);

      yield executeAndOut(pkgCommand, process.cwd());
    } catch (err) {
      console.error(err);
    }

    yield;
  };
}
