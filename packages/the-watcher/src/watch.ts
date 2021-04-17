import { Operation, Stream } from 'effection';
import type { Process } from '@effection/node';
import { exec, daemon, StdIO } from '@effection/node';
import { sleep } from 'effection';

export function buildAndRun(delay: number): Operation<void> {
  return function* (scope) {
    try {
      yield executeAndOut('clean');
      yield executeAndOut('build');
      yield sleep(delay);

      const server: StdIO = daemon('node dist/start.js').run(scope);
      scope.spawn(writeOut(server.stdout, process.stdout));
      scope.spawn(writeOut(server.stderr, process.stderr));
    } catch (err) {
      console.error(err);
    }

    yield;
  };
}

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

function executeAndOut(command: string): Operation<void> {
  return function* (task) {
    const p: Process = exec(`npm run ${command}`).run(task);
    task.spawn(writeOut(p.stdout, process.stdout));
    task.spawn(writeOut(p.stderr, process.stderr));
    yield p.expect();
  };
}
