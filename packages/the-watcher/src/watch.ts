import { Operation, Stream } from 'effection';
import { spawn } from 'effection';
import { exec } from '@effection/node';

function writeOut(channel: Stream<string>, out: NodeJS.WriteStream) {
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

function* executeAndOut(command: string, cwd: string): Operation<void> {
  const {
    stdout,
    stderr,
    expect: expecting,
  } = yield exec(`yarn ${command}`, {
    cwd,
    env: { ...process.env, WATCHING: true.toString() },
  });
  yield spawn(writeOut(stdout, process.stdout));
  yield spawn(writeOut(stderr, process.stderr));
  yield expecting();
}

export function* buildAndRun(command: string, cwd: string): Operation<void> {
  try {
    yield executeAndOut(command, cwd);
  } catch (err) {
    console.error(err);
  }

  yield;
}
