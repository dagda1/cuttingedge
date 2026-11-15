import { logger } from './logger';

export async function runBuild(name: string, build: () => Promise<void>): Promise<void> {
  try {
    await build();

    logger.done('finished building');
  } catch (error) {
    logger.error(`${name} build failed`);
    logger.error(error);
    process.exit(1);
  }
}
