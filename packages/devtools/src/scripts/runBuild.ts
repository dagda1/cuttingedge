import { logger } from './logger';

export async function runBuild(build: () => Promise<void>): Promise<void> {
  try {
    await build();

    logger.done('finished building');
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}
