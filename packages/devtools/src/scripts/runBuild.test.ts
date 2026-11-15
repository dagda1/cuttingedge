import { afterEach, describe, expect, it, vi } from 'vitest';

import { logger } from './logger';
import { runBuild } from './runBuild';

function stubProcessExit() {
  return vi.spyOn(process, 'exit').mockImplementation((code) => {
    throw new Error(`process.exit ${code}`);
  });
}

describe('runBuild', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('logs that the build finished and does not exit', async () => {
    const exit = stubProcessExit();
    const done = vi.spyOn(logger, 'done');

    await runBuild('rolldown', () => Promise.resolve());

    expect(done).toHaveBeenCalledWith('finished building');
    expect(exit).not.toHaveBeenCalled();
  });

  it('logs which build failed, logs the error and exits with code 1', async () => {
    stubProcessExit();
    const logError = vi.spyOn(logger, 'error');
    const failure = new Error('entry file not found');

    await expect(runBuild('rolldown', () => Promise.reject(failure))).rejects.toThrow('process.exit 1');

    expect(logError).toHaveBeenCalledWith('rolldown build failed');
    expect(logError).toHaveBeenCalledWith(failure);
  });
});
